import leagueMap from '../maps/leagueMap';

const url = {
  COMPETITIONS: 'https://api.football-data.org/v1/competitions',
  FIXTURES: 'https://api.football-data.org/v1/fixtures'
};

const fetchOptions = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'c43ce3a78a9f467594e4825df988eabc',
    'X-Response-Control': 'minified'
  }
};

const competitionMap = {};

export async function getCompetitions(selectedDate, onSuccess) {
  try {
    const fixturesParams = getRequestParams(selectedDate);
    const fixturesUrl = `${url.FIXTURES}${fixturesParams}`;
    const fixturesResponse = await fetch(fixturesUrl, fetchOptions);
    const fixturesData = await fixturesResponse.json();

    const parsedData = parseEvents(fixturesData ? fixturesData.fixtures : []);

    const competitionPromises = parsedData
      .filter((competition) => !competitionMap[competition.id])
      .map(async (competition) => {
        const response = await fetch(`${url.COMPETITIONS}/${competition.id}`, fetchOptions);
        return response.json();
      });

    for (const competitionPromise of competitionPromises) {
      const competition = await competitionPromise;
      competitionMap[competition.id] = competition;
    }

    const parsedDateWithCompetitions = parsedData.map((competition) => {
      const competitionExt = Object.create(competition);

      competitionExt.caption = competitionMap[competition.id].caption;
      competitionExt.league = competitionMap[competition.id].league;
      competitionExt.country =
        (leagueMap[competitionExt.league] && leagueMap[competitionExt.league].country) || 'Other';

      return competitionExt;
    });

    const sortedParsedData = parsedDateWithCompetitions.sort((a, b) => {
      const aPriority = leagueMap[a.league] ? leagueMap[a.league].priority : 1000;
      const bPriority = leagueMap[b.league] ? leagueMap[b.league].priority : 1000;
      return aPriority - bPriority;
    });

    onSuccess(sortedParsedData);
  } catch (err) {
    console.log('fetch failed', err);
  }
}

function parseEvents(fixtures) {
  const competitionsMap = fixtures
    .map((fixture) => ({
      id: fixture.id,
      competitionId: fixture.competitionId,
      date: fixture.date,
      homeTeamName: fixture.homeTeamName,
      awayTeamName: fixture.awayTeamName,
      score: {
        home: fixture.result.goalsHomeTeam,
        away: fixture.result.goalsAwayTeam
      },
      status: fixture.status
    }))
    .reduce((accumulator, feature) => {
      const competitionId = feature.competitionId;
      if (accumulator[competitionId]) {
        accumulator[competitionId].push(feature);
      } else {
        accumulator[competitionId] = [feature];
      }
      return accumulator;
    }, {});

  const competitions = [];

  for (const [id, events] of Object.entries(competitionsMap)) {
    competitions.push({ id: parseInt(id), events: sortEvents(events) });
  }

  return competitions;
}

function sortEvents(events) {
  const sortedEvents = [...events];
  sortedEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
  return sortedEvents;
}

function getRequestParams(date) {
  if (date) {
    const fixturesDate = date.format('YYYY-MM-DD');
    return `?timeFrameStart=${fixturesDate}&timeFrameEnd=${fixturesDate}`;
  }

  return '?timeFrame=n1';
}

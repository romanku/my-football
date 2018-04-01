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

export async function getCompetitions(onSuccess) {
  try {
    const fixturesResponse = await fetch(url.FIXTURES, fetchOptions);
    const fixturesData = await fixturesResponse.json();

    const parsedData = parseEvents(fixturesData ? fixturesData.fixtures : []);

    const competitionPromises = parsedData.map(async (competition) => {
      const response = await fetch(`${url.COMPETITIONS}/${competition.id}`, fetchOptions);
      return response.json();
    });

    for (const competitionPromise of competitionPromises) {
      const competition = await competitionPromise;

      const parsedCompetition = parsedData.find((comp) => {
        return comp.id === competition.id;
      });

      parsedCompetition.caption = competition.caption;
      parsedCompetition.league = competition.league;
      parsedCompetition.country = (leagueMap[competition.league] && leagueMap[competition.league].country) || 'Other';
    }

    console.log(parsedData);
    onSuccess(parsedData);
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
      awayTeamName: fixture.awayTeamName
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

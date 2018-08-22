const url = {
  COMPETITIONS: 'https://api.football-data.org/v2/competitions',
  FIXTURES: 'https://api.football-data.org/v2/matches'
};

const fetchOptions = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'c43ce3a78a9f467594e4825df988eabc'
  }
};

const competitionMap = {};

export async function getCompetitions(selectedDate, onSuccess, onError) {
  try {
    const fixturesParams = getRequestParams(selectedDate);
    const fixturesUrl = `${url.FIXTURES}${fixturesParams}`;
    const fixturesResponse = await fetch(fixturesUrl, fetchOptions);
    const fixturesData = await fixturesResponse.json();

    const parsedData = parseEvents(fixturesData ? fixturesData.matches : []);

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

    parsedData.forEach((competition) => {
      competition.caption = competitionMap[competition.id].name;
      competition.country = competitionMap[competition.id].area.name;
    });

    onSuccess(parsedData);
  } catch (err) {
    onError();
  }
}

function parseEvents(fixtures) {
  const competitionsMap = fixtures
    .map((fixture) => ({
      id: fixture.id,
      competitionId: fixture.competition.id,
      date: fixture.utcDate,
      homeTeamName: fixture.homeTeam.name,
      awayTeamName: fixture.awayTeam.name,
      score: {
        home: fixture.score.fullTime.homeTeam,
        away: fixture.score.fullTime.awayTeam
      },
      status: fixture.status
    }))
    .reduce((accumulator, fixture) => {
      const competitionId = fixture.competitionId;
      if (accumulator[competitionId]) {
        accumulator[competitionId].push(fixture);
      } else {
        accumulator[competitionId] = [fixture];
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
    return `?dateFrom=${fixturesDate}&dateTo=${fixturesDate}`;
  }

  return '';
}

export async function getMatch(id, onSuccess, onError) {
  try {
    const matchUrl = `${url.FIXTURES}/${id}`;
    const matchResponse = await fetch(matchUrl, fetchOptions);
    const matchData = await matchResponse.json();

    onSuccess(matchData);
  } catch (err) {
    onError();
  }
}

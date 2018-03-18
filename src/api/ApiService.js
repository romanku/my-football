const URL = 'http://api.football-data.org/v1/fixtures';

const fetchOptions = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'c43ce3a78a9f467594e4825df988eabc',
    'X-Response-Control': 'minified'
  }
};

export async function getCompetitions(onSuccess) {
  try {
    const response = await fetch(URL, fetchOptions);
    const data = await response.json();
    onSuccess(parseEvents(data ? data.fixtures : []));
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
    competitions.push({ id, events });
  }

  return competitions;
}

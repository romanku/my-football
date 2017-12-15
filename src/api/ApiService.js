const URL = 'http://api.football-data.org/v1/fixtures';

const fetchOptions = {
  method: 'GET',
  headers: { 'X-Auth-Token': 'c43ce3a78a9f467594e4825df988eabc' }
};

export async function getFixtures(onSuccess) {
  try {
    const response = await fetch(URL, fetchOptions);
    const data = await response.json();
    onSuccess(getEvents(data ? data.fixtures : []));
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}

function getEvents(fixtures) {
  // const fixtures = getFixtures().fixtures;
  let id = 0;
  return fixtures.map((fixture) => ({
    id: id++,
    date: fixture.date,
    homeTeamName: fixture.homeTeamName,
    awayTeamName: fixture.awayTeamName
  }))
}

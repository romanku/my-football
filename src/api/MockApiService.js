const fixtureOne = {
  _links: {
    self: {
      href: 'http://api.football-data.org/v1/fixtures/159661'
    },
    competition: {
      href: 'http://api.football-data.org/v1/competitions/446'
    },
    homeTeam: {
      href: 'http://api.football-data.org/v1/teams/76'
    },
    awayTeam: {
      href: 'http://api.football-data.org/v1/teams/60'
    }
  },
  date: '2017-11-25T15:00:00Z',
  status: 'TIMED',
  matchday: 19,
  homeTeamName: 'Wolverhampton Wanderers FC',
  awayTeamName: 'Bolton Wanderers FC',
  result: {
    goalsHomeTeam: null,
    goalsAwayTeam: null
  },
  odds: null
};

const fixtureTwo = {
  _links: {
    self: {
      href: 'http://api.football-data.org/v1/fixtures/161535'
    },
    competition: {
      href: 'http://api.football-data.org/v1/competitions/450'
    },
    homeTeam: {
      href: 'http://api.football-data.org/v1/teams/529'
    },
    awayTeam: {
      href: 'http://api.football-data.org/v1/teams/543'
    }
  },
  date: '2017-11-25T16:00:00Z',
  status: 'TIMED',
  matchday: 14,
  homeTeamName: 'Stade Rennais FC',
  awayTeamName: 'FC Nantes',
  result: {
    goalsHomeTeam: null,
    goalsAwayTeam: null
  },
  odds: null
};

const fixtureThree = {
  _links: {
    self: {
      href: 'http://api.football-data.org/v1/fixtures/164204'
    },
    competition: {
      href: 'http://api.football-data.org/v1/competitions/457'
    },
    homeTeam: {
      href: 'http://api.football-data.org/v1/teams/1808'
    },
    awayTeam: {
      href: 'http://api.football-data.org/v1/teams/1049'
    }
  },
  date: '2017-11-25T16:00:00Z',
  status: 'TIMED',
  matchday: 12,
  homeTeamName: 'Portimonense S.C.',
  awayTeamName: 'CD Tondela',
  result: {
    goalsHomeTeam: null,
    goalsAwayTeam: null
  },
  odds: null
};

const fixtures = {
  timeFrameStart: '2017-11-25',
  timeFrameEnd: '2017-12-01',
  count: 3,
  fixtures: [fixtureOne, fixtureTwo, fixtureThree]
};

function getFixtures() {
  return fixtures;
}

export function getEvents() {
  const fixtures = getFixtures().fixtures;
  let id = 0;
  return fixtures.map((fixture) => ({
    id: id++,
    date: fixture.date,
    homeTeamName: fixture.homeTeamName,
    awayTeamName: fixture.awayTeamName
  }));
}

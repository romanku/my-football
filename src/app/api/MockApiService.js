/*Competition Example
  
  const competition = {
  caption: 'Campeonato Brasileiro da Série A',
  league: 'BSA',
  country: 'Other',
  id: 468,
  events: [
    {
      id: 166758,
      competitionId: 468,
      date: '2018-07-18T22:30:00Z',
      homeTeamName: 'Ceará',
      awayTeamName: 'Sport Recife',
      score: {
        home: null,
        away: null
      },
      status: 'SCHEDULED'
    }
  ]
};*/

export function getCompetitions(selectedDate, onSuccess, onError) {
  setTimeout(() => {
    onSuccess([builder.build(), builder.eventsNum(2).build()]);
  }, 1000);
}

class CompetitionBuilder {
  constructor() {
    this.competitionIdGen = 0;
    this.eventIdGen = 0;

    this.competition = this.getInitCompetition();
  }

  eventsNum(num) {
    let i = 0;

    this.competitionIdGen++;

    while (i < num) {
      i++;
      this.competition.events.push(this.eventFactory());
    }
    return this;
  }

  eventFactory() {
    return {
      id: this.eventIdGen++,
      competitionId: this.competitionIdGen,
      date: '2018-07-19T00:45:00Z',
      homeTeamName: 'Team 1',
      awayTeamName: 'Team 2',
      score: {
        home: null,
        away: null
      },
      status: 'SCHEDULED'
    };
  }

  build() {
    if (this.competition.events.length === 0) {
      this.eventsNum(5);
    }

    const competitionData = {
      id: this.competitionIdGen,
      league: `LG${this.competitionIdGen}`,
      caption: `League ${this.competitionIdGen} ${this.competition.country}`
    };

    const returnCompetition = Object.assign(this.competition, competitionData);
    this.competition = this.getInitCompetition();
    return returnCompetition;
  }

  getInitCompetition() {
    return { country: 'Other', events: [] };
  }
}

const builder = new CompetitionBuilder();

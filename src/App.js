import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Start from './Start';
import SelectNum from './SelectNum';
import PlayerNames from './PlayerNames';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1,
      numTeammates: 1,
      numTeams: 2,
      players: [],
    }
  }

  changeDisplay = (num) => {
    this.setState({display: num})
  }

  initPlayers = () => {
    this.changeDisplay(3);
    const players = [...new Array(this.state.numTeams*this.state.numTeammates).keys()].map(() => '');
    this.setState({ players });
  }

  changeNumTeammates = (e) => {
    this.setState({numTeammates: e.target.value});
  }

  changeNumTeams = (e) => {
    this.setState({numTeams: e.target.value});
  }

  updatePlayers = (e, i) => {
    let players = [...this.state.players];
    players[i] = e.target.value;
    this.setState({ players });
  }

  randomizeTeams = () => {
    const randomizeTeams = (players, numTeams) => {
      let teamsMap = {};
      let teamsLeft = numTeams;
      const teamSize = players.length / numTeams;
      let lastTeamKey = numTeams - 1;
      let assignedTeams = {};
      for (let i = 0; i < numTeams; i++) {
        teamsMap[i] = i;
        assignedTeams[i] = [];
      }
      for (let i = 0; i < players.length; i++) {
        const randNum = Math.floor(Math.random() * teamsLeft);
        const team = teamsMap[randNum];
        assignedTeams[team].push(players[i]);
        if (assignedTeams[team].length >= teamSize) {
          teamsMap[randNum] = teamsMap[lastTeamKey];
          delete teamsMap[lastTeamKey];
          lastTeamKey--;
          teamsLeft--;
        }
      }
      return assignedTeams;
    }
}

console.log(randomizeTeams(players, 3));
  }

  render() {
    return (
      <div className="App">
        <Header display={this.state.display} />
        <Start display={this.state.display} changeDisplay={this.changeDisplay}/>
        <SelectNum
          display={this.state.display}
          initPlayers={this.initPlayers}
          changeNumTeammates={this.changeNumTeammates}
          changeNumTeams={this.changeNumTeams}
          numTeammates={this.state.numTeammates}/>
        <PlayerNames
          display={this.state.display}
          players={this.state.players}
          updatePlayers={this.updatePlayers}
          randomizeTeams={this.randomizeTeams} />
      </div>
    );
  }
}

export default App;

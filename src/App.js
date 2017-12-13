import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Start from './Start';
import SelectNum from './SelectNum';
import PlayerNames from './PlayerNames';
import TeamsView from './TeamsView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1,
      numTeammates: 1,
      numTeams: 2,
      players: [],
      assignedTeams: {}
    }
  }

  changeDisplay = (num) => {
    this.setState({display: num});
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
    let teamsMap = {};
    let teamsLeft = this.state.numTeams;
    const teamSize = this.state.players.length / this.state.numTeams;
    let lastTeamKey = this.state.numTeams - 1;
    let assignedTeams = {};
    for (let i = 0; i < this.state.numTeams; i++) {
      teamsMap[i] = i;
      assignedTeams[i] = [];
    }
    for (let i = 0; i < this.state.players.length; i++) {
      const randNum = Math.floor(Math.random() * teamsLeft);
      const team = teamsMap[randNum];
      assignedTeams[team].push(this.state.players[i]);
      if (assignedTeams[team].length >= teamSize) {
        teamsMap[randNum] = teamsMap[lastTeamKey];
        delete teamsMap[lastTeamKey];
        lastTeamKey--;
        teamsLeft--;
      }
    }
    this.setState({ assignedTeams });
    this.changeDisplay(4)
  }

  reset = () => {
    this.setState({
      display: 1,
      numTeammates: 1,
      numTeams: 2,
      players: [],
      assignedTeams: {}
    });
  }

  render() {
    return (
      <div className="App">
        <Header display={this.state.display} />
        <Start display={this.state.display} changeDisplay={this.changeDisplay}/>
        <SelectNum
          display={this.state.display}
          initPlayers={this.initPlayers}
          changeDisplay={this.changeDisplay}
          changeNumTeammates={this.changeNumTeammates}
          changeNumTeams={this.changeNumTeams}
          numTeammates={this.state.numTeammates}
          numTeams={this.state.numTeams} />
        <PlayerNames
          changeDisplay={this.changeDisplay}
          display={this.state.display}
          players={this.state.players}
          updatePlayers={this.updatePlayers}
          randomizeTeams={this.randomizeTeams} />
        <TeamsView
          changeDisplay={this.changeDisplay}
          display={this.state.display}
          assignedTeams={this.state.assignedTeams}
          reset={this.reset}/>
      </div>
    );
  }
}

export default App;

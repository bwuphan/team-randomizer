import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
      errors: {},
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

  onBlurName = (e, i) => {
    const playerName = e.target.value;
    if (!(playerName in this.state.playersObj)) {
      let playersObj = {...this.state.playersObj};
      playersObj[e.target.value] = i;
      this.setState({ playersObj });
    }
    console.log(this.state.playersObj)
  }

  checkForDups = () => {
    const playersObj = {};
    const errors = {};
    for (let i = 0; i < this.state.players.length; i++) {
      if (this.state.players[i] in playersObj && this.state.players[i] !== '') {
        playersObj[this.state.players[i]].push(i);
      } else {
        playersObj[this.state.players[i]] = [i];
      }
    }
    for (let key in playersObj) {
      const playerArr = playersObj[key];
      if (playerArr.length > 1) {
        playerArr.forEach(index => {
          errors[index] = true;
        });
      }
    }
    this.setState({ errors });
  }

  updatePlayers = (e, i) => {
    let players = [...this.state.players];
    players[i] = e.target.value;
    this.setState({ players });
    this.checkForDups();
  }

  randomizeTeams = () => {
    this.checkForDups();
    if (Object.keys(this.state.errors).length === 0) {
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
      this.changeDisplay(4);

    }
  }

  reset = () => {
    this.setState({
      display: 2,
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
          onBlurName={this.onBlurName}
          players={this.state.players}
          updatePlayers={this.updatePlayers}
          randomizeTeams={this.randomizeTeams}
          errors={this.state.errors}
          checkForDups={this.checkForDups}/>
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

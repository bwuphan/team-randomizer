import React, { Component } from 'react';
import logo from './logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap'
import './App.css';

import Start from './Start';
import SelectNumTeammates from './SelectNumTeammates';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1,
    }
  }

  changeDisplay = (display, num) => {
    this.setState({display: num})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Team Randomizer</h1>
        </header>
        <Start display={this.state.display} changeDisplay={this.changeDisplay}/>
        <SelectNumTeammates display={this.state.display} changeDisplay={this.changeDisplay}/>
      </div>
    );
  }
}

export default App;

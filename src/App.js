import React, { Component } from 'react';
import logo from './logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap'
import './App.css';

import Start from './Start';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 1,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Team Randomizer</h1>
        </header>
        <Start show={this.state.display === 1} />
      </div>
    );
  }
}

export default App;

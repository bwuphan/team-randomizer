import React, { Component } from 'react';
import logo from './logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Team Randomizer</h1>
        </header>
        <div className="app-body">
          <p className="App-intro">
            Click here to get started
          </p>
          <Button bsStyle="success" bsSize="large">Large button</Button>
        </div>
      </div>
    );
  }
}

export default App;

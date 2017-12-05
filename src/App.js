import React, { Component } from 'react';
import logo from './logo.svg';
import { ButtonToolbar, Button } from 'react-bootstrap'
import './App.css';

import Header from './Header';
import Start from './Start';
import SelectNum from './SelectNum';


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
        <Header display={this.state.display} />
        <Start display={this.state.display} changeDisplay={this.changeDisplay}/>
        <SelectNum display={this.state.display} changeDisplay={this.changeDisplay}/>
      </div>
    );
  }
}

export default App;

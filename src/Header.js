import React from 'react';
import logo from './logo.svg';

const Header = ({ display }) => {
  if (display !== 1) return null;
  else return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Team Randomizer</h1>
    </header>
  );
}

export default Header;
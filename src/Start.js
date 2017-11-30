import React from 'react';
import { Button } from 'react-bootstrap';

const Start = ({ display, changeDisplay }) => {
  if (display !== 1) {
    return null;
  } else {
    return (
      <div className="app-body">
        <p className="App-intro">
          Click here to get started
        </p>
        <Button onClick={() => changeDisplay(display, 2)} bsStyle="success" bsSize="large">Start</Button>
      </div>
    );

  }
}

export default Start;
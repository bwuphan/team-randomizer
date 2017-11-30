import React from 'react';
import { Button } from 'react-bootstrap';

const Start = ({ show }) => {
  if (show === false) {
    return null;
  } else {
    return (
      <div className="app-body">
        <p className="App-intro">
          Click here to get started
        </p>
        <Button bsStyle="success" bsSize="large">Large button</Button>
      </div>
    );

  }
}

export default Start;
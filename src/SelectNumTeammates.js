import React from 'react';
import { Button } from 'react-bootstrap';

const SelectNumTeammates = ({ display, changeDisplay }) => {
  const numPlayers = [...new Array(10).keys()].map(i => (i + 1));
  const numTeams = [...new Array(50).keys()].map(i => (i + 1));
  if (display !== 2) {
    return null;
  } else {
    return (
      <div className="select-size__body">
        <p className="font-large">How many players per team?</p>
        <p>
          <select>{numPlayers.map((i) => <option>{i}</option>)}</select>
        </p>
        <p className="font-large">How many teams?</p>
        <p><select>{numTeams.map((i) => <option>{i}</option>)}</select></p>
        <Button onClick={() => changeDisplay(display, 2)} bsStyle="info" bsSize="large">Continue</Button>
      </div>
    )
  }
}

export default SelectNumTeammates;
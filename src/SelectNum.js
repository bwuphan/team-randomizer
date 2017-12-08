import React from 'react';
import { Button } from 'react-bootstrap';

const SelectNum = ({ display, initPlayers, changeNumTeams, changeNumTeammates, numTeammates, numTeams }) => {
  const numTeammatesArr = [...new Array(10).keys()].map(i => (i + 1));
  const numTeamsArr = [...new Array(50).keys()].map(i => (i + 1));
  if (display !== 2) {
    return null;
  } else {
    return (
      <div className="select-size__body">
        <p className="font-large">How many players per team?</p>
        <p>
          <select
            value={numTeammates}
            onChange={changeNumTeammates}>
          {numTeammatesArr.map((i) => <option key={i}>{i}</option>)}
          </select>
        </p>
        <p className="font-large">How many teams?</p>
        <p>
          <select
            value={numTeams}
            onChange={changeNumTeams}>
            {numTeamsArr.map((i) => <option key={i}>{i}</option>)}
          </select>
        </p>
        <Button
          onClick={() => initPlayers(numTeammates)}
          bsStyle="info"
          bsSize="large">
        Continue</Button>
      </div>
    )
  }
}

export default SelectNum;
import React from 'react';
import { Button } from 'react-bootstrap';

const PlayerNames = ({ display, players, updatePlayers }) => {
  console.log(updatePlayers)
  if (display !== 3) return null;
  else return (
    <div>
      {players.map((player, i) =>
        <div key={i}>
          <p>
            {i + 1}: <input onChange={event => updatePlayers(event, i)}/>
          </p>
        </div>
      )}
      <Button bsStyle="info" bsSize="large">Get teams!</Button>
    </div>
  );
}

export default PlayerNames;
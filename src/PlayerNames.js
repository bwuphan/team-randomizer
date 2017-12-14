import React from 'react';
import { Button } from 'react-bootstrap';

const PlayerNames = ({ changeDisplay, display, players, updatePlayers, randomizeTeams }) => {
  if (display !== 3) return null;
  else return (
    <div>
      <a className="go-back" onClick={() => changeDisplay(display - 1)}>Go back</a>
      <div className="player-names">
        {players.map((player, i) =>
          <div key={i}>
            <p>
              {i + 1}: <input value={players[i]} onChange={event => updatePlayers(event, i)}/>
            </p>
          </div>
        )}
      </div>
      <Button
        bsStyle="info"
        bsSize="large"
        onClick={() => randomizeTeams()}>
      Get teams!</Button>
    </div>
  );
}

export default PlayerNames;
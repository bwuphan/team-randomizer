import React from 'react';
import { Button } from 'react-bootstrap';

const PlayerNames = ({ changeDisplay, display, players, updatePlayers, randomizeTeams, errors, checkForDups }) => {
  if (display !== 3) return null;
  else return (
    <div>
      <a className="go-back" onClick={() => changeDisplay(display - 1)}>Go back</a>
      <div className="player-names">
      {Object.keys(errors).length !== 0 &&
        <div className="color-red">Duplicate player names are not allowed</div>
      }
        {players.map((player, i) =>
          <div key={i}>
            <p>
              {i + 1}:
              <input
                className={errors[i] === true ? 'border-red' : ''}
                value={players[i]}
                maxLength="30"
                onBlur={checkForDups}
                onChange={event => updatePlayers(event, i)} />
            </p>
          </div>
        )}
      </div>
      <Button
        disabled={Object.keys(errors).length !== 0}
        bsStyle="info"
        bsSize="large"
        onClick={() => randomizeTeams()}>
      Get teams!</Button>
    </div>
  );
}

export default PlayerNames;
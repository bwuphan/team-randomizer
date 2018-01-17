import React from 'react';
import { Button } from 'react-bootstrap';

const PlayerNames = ({ changeDisplay, display, players, updatePlayers, randomizeTeams, errors, checkForDups }) => {
  if (display !== 3) return null;
  else return (
    <div>
      <a className="go-back" onClick={() => changeDisplay(display - 1)}>Go back</a>
      <div className="player-names">
        {players.map((player, i) =>
          <div key={i}>
            {errors[i] === true &&
              <span className="color-red">Duplicate names are not allowed</span>
            }
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
        bsStyle="info"
        bsSize="large"
        onClick={() => randomizeTeams()}>
      Get teams!</Button>
    </div>
  );
}

export default PlayerNames;
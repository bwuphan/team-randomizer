import React from 'react';

const PlayerNames = ({ display, players }) => {
  if (display !== 3) return null;
  else return (
    <div className="select-size__body">
      {players.map(i =>
        <div key={i}>
          <h2>{i}</h2>
          <input />
        </div>
      )}
    </div>
  );
}

export default PlayerNames;
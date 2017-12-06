import React from 'react';

const PlayerNames = ({ display, players }) => {
  if (display !== 3) return null;
  else return (
    <div>
      {players.map((player, i) =>
        <div key={i}>
          <p>
            {i + 1}: <input />
          </p>
        </div>
      )}
    </div>
  );
}

export default PlayerNames;
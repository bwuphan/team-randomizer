import React from 'react';
import { Table } from 'react-bootstrap';

const TeamsView = ({ changeDisplay, display, assignedTeams }) => {
  if (display !== 4) return null;
  else {
    return (
      <div>
        <a className="go-back" onClick={() => changeDisplay(display - 1)}>Go back</a>
        <h2>Teams</h2>
        {Object.keys(assignedTeams).map((team, i) => {
          return (
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <b>{i + 1}</b>
                </tr>
              </thead>
              <tbody>
              {assignedTeams[team].map((player, i) =>
                <tr key={i}>{player}</tr>
              )}
              </tbody>
            </Table>
          );
        })}
      </div>
    );
  }
}

export default TeamsView;
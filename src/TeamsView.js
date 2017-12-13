import React from 'react';
import { Table } from 'react-bootstrap';

const TeamsView = ({ changeDisplay, display, assignedTeams, reset }) => {
  if (display !== 4) return null;
  else {
    return (
      <div>
        <a className="go-back" onClick={() => changeDisplay(display - 1)}>Go back</a>
        <a className="reset" onClick={reset}>Reset</a>
        <h2>Teams</h2>
        {Object.keys(assignedTeams).map((team, i) => {
          return (
            <div>
              <h3>{i + 1}</h3>
              <Table className="table" striped bordered hover>
                <tbody>
                {assignedTeams[team].map((player, j) =>
                  <tr key={j}>
                    <td className="table-left-column">{j + 1}: </td>
                    <td className="table-right-column">{player}</td>
                  </tr>
                )}
                </tbody>
              </Table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TeamsView;
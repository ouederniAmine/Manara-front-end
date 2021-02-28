import React from "react";
import TableBody from "./tableBody";
export default function claimsTable() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title h3">Les réclamations</h4>

        <table className="table table-bordered" >
          <thead>
            <tr>
              <th> # </th>
              <th> Type de violence </th>
              <th> Ville </th>
              <th> Etat réclamation </th>
              <th> Date de création </th>
            </tr>
          </thead>
          <tbody>
            <TableBody />
          </tbody>
        </table>
      </div>
    </div>
  );
}

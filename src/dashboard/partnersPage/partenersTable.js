import React, { useState } from "react";
import TableBody from "./tableBody";
export default function partenersTable() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title h3">Les patenaires</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th> image </th>
              <th> Nom </th>

              <th> N° d'article </th>
              <th> Date de join</th>
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

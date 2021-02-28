import React from "react";
import TableBody from "./tableBody";
export default function adviceTable() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title h3">Demande conseil</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>objet</th>
              <th>Texte </th>
              <th>Type de conseil</th>
              <th>Date de création </th>
              <th>Etat demande</th>
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

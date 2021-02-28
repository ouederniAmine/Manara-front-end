import React, { useEffect } from "react";
import "./style.css";
export default function claimChart() {
  useEffect(() => {
    let div = document.getElementsByClassName("card");
    div[0].onmousedown = () => (location.href = "/parteners");
    div[1].onmousedown = () => (location.href = "/articles");
    div[2].onmousedown = () => (location.href = "/claims");
    div[3].onmousedown = () => (location.href = "/advices");
  });
  return (
    <div className="card-deck d-flex flex-wrap ">
      <div className="card hover">
        <img
          className="card-img-top"
          src="https://cdn.discordapp.com/attachments/695341997321486386/815266135506288690/work-parteners_1.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Gestion des comptes agents partenaires</h5>
          <p className="card-text">
            Cette page est pour voir les comptes des partenaires ou les modifier
          </p>
        </div>
      </div>

      <div className="card hover">
        <img
          className="card-img-top"
          src="https://cdn.discordapp.com/attachments/695341997321486386/815267538492456980/application.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Gestion des articles</h5>
          <p className="card-text">
            Cette page est pour créer un article dans Manara
          </p>
        </div>
      </div>
      <div className="card hover">
        <img
          className="card-img-top"
          src="https://cdn.discordapp.com/attachments/695341997321486386/815266482291605504/claim.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Gestion des réclamations</h5>
          <p className="card-text">
            Cette page est pour visualiser les réaclamations prise par Manara.
          </p>
        </div>
      </div>
      <div className="card hover">
        <img
          className="card-img-top"
          src="https://cdn.discordapp.com/attachments/695341997321486386/815267213279887370/advice.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Gestion des demandes de conseils</h5>
          <p className="card-text">
            Cette page est pour visualiser les demande de conseil prise par
            Manara et répondre a eux.
          </p>
        </div>
      </div>
    </div>
  );
}

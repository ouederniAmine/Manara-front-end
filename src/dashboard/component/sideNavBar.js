import React from "react";

export default function sideNavBar() {
  
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-category">Main Menu</li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="menu-icon typcn typcn-document-text" />
            <span className="menu-title">Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/parteners">
            {" "}
            Gestion des comptes <br></br>agents partenaires{" "}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/articles">
            {" "}
            Gestion des articles{" "}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/claims">
            {" "}
            Gestion des réclamations{" "}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/advices">
            {" "}
            Gestion des demandes de <br></br> conseils{" "}
          </a>
        </li>
      </ul>
    </nav>
  );
}

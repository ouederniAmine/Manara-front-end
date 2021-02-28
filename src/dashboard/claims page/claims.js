import React from "react";
import ClaimsTable from "./claimsTable";
import Navbar from "../component/navBar";
import SideNavBar from "../component/sideNavBar";
export default function dashboard() {
  return (
    <div className="container-scroller">
      <Navbar />
      <div
        style={{ paddingLeft: 0, paddingRight: 0 }}
        className="container-fluid page-body-wrapper"
      >
        <SideNavBar />

        <div className="main-panel">
          <div className="content-wrapper">
            {" "}
            <ClaimsTable />
          </div>
          <footer className="footer">
            <div className="container-fluid clearfix">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                Copyright © Mohamed amine 2020
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Navbar from "../component/navBar";
import SideNavBar from "../component/sideNavBar";
import PartenersTable from "./partenersTable";
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
            <PartenersTable />
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

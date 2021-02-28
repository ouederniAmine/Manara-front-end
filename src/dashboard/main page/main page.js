import React from "react";
import ClaimChart from "../component/claimChart";
export default function mainPage() {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <ClaimChart />
      </div>
      <footer className="footer">
        <div className="container-fluid clearfix">
          <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
            Copyright © Mohamed amine 2020
          </span>
        </div>
      </footer>
    </div>
  );
}

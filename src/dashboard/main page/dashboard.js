import React from "react";
import "./dashboard.css";
import Navbar from "../component/navBar";
import SideNavBar from "../component/sideNavBar";
import MainPage from "./main page";
export default function dashboard() {
  return (
    <div className="container-scroller">
      <Navbar />
      <div
        style={{ paddingLeft: 0, paddingRight: 0 }}
        className="container-fluid page-body-wrapper"
      >
        <SideNavBar />

        <MainPage />
      </div>
    </div>
  );
}

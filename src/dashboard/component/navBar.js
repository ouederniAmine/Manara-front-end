import React, { useEffect } from "react";
import { useHistory } from "react-router";
export default function navBar() {
  const history = useHistory();
  useEffect(() => {
    let logout = document.getElementById("logOut");
    logout.onmousedown = () => history.push("/login");
  });
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
        <a className="navbar-brand brand-logo" href="/">
          <img src="logo.png" alt="logo" />{" "}
        </a>
        <a className="navbar-brand brand-logo-mini" href="/">
          <img src="logo-mini.png" alt="logo hey" />{" "}
        </a>
      </div>
      <button id="logOut" type="button" className="m-r-3 btn btn-primary">
        Log out
      </button>
    </nav>
  );
}

import "./App.css";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  useEffect(() => {
    send();
    let button = document.getElementById("submit");
    button.onmousedown = () => send();
  });
  const send = async () => {
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const body = await response.json().then((e) => {
      if (!e.message) {
        history.push("/");
      } else {
        console.log("no");
      }
    });
  };

  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="">
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text-info">
                    Username:
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <br></br>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="remember-me" className="text-info">
                    <span>Remember me</span> 
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      ></input>
                    </span>
                  </label>
                  <br></br>

                  <button id="submit" className="btn btn-info btn-md">
                    submit
                  </button>
                </div>
                <div id="register-link" className="text-right">
                  <a href="#" className="text-info">
                    Register here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

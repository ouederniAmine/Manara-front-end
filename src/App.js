import "./App.css";

import { useEffect, useState } from "react";
import ApiSend from "./sign in/apiSend";
function App() {
  let emailValue;
  let pwdValue;

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
                    onChange={(event) => {
                      emailValue = event.target.value;
                    }}
                  ></input>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Password:
                  </label>
                  <br></br>
                  <input
                    type="text"
                    id="password"
                    className="form-control"
                    onChange={(event) => {
                      pwdValue = event.target.value;
                    }}
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

                  <ApiSend email={emailValue} password={pwdValue}></ApiSend>
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

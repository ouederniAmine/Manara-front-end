import React from "react";
import App from "./sign in/App";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import dashboard from "./dashboard/index";
import partenersConfig from "./dashboard/partnersPage/partnerConfigPage";
import "./app.css";
import Login from "./sign in/App";
import Articles from "./dashboard/article page/articles";
import claims from "./dashboard/claims page/claims";
import advice from "./dashboard/advice page/advice";
export default function app() {
  let loggedIn;
  const send = async () => {
    const response = await fetch("/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const h = response.json().then((r) => {
      loggedIn = r.loggedIn;
    });
  };
  return (
    <BrowserRouter>
      <Route path="/login" component={App} />
      <Route exact path="/" component={dashboard} />

      <Route path="/parteners" exact component={partenersConfig} />
      <Route path="/articles" exact component={Articles} />
      <Route path="/claims" exact component={claims} />
      <Route path="/advices" exact component={advice} />
    </BrowserRouter>
  );
}

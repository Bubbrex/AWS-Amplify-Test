import "assets/scss/material-kit-react.scss?v=1.10.0";

import { Route, Router, Switch } from "react-router-dom";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about-yichao" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

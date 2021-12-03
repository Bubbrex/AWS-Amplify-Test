import "assets/scss/material-kit-react.scss?v=1.10.0";

import { Redirect, Route, Router, Switch } from "react-router-dom";

import Amplify from "aws-amplify";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import awsconfig from "./aws-exports";
import { createBrowserHistory } from "history";
import store from "./redux/store";

Amplify.configure(awsconfig);
var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/about-yichao" component={ProfilePage} />
        <Route path="/login-page" component={LoginPage} />
        <Route path="/home" component={Components} />
        <Redirect from="/" to="/home" />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

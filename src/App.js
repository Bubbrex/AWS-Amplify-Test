import { Redirect, Route, Router, Switch } from "react-router-dom";

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import React from "react";
import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <React.Fragment>
        <Switch>
          <Route exact path="/landing-page" component={LandingPage} />
          <Route exact path="/about-yichao" component={ProfilePage} />
          <Route exact path="/login-page" component={LoginPage} />
          <Route exact path="/home" component={Components} />
          <Redirect exact from="/" to="/home" />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;

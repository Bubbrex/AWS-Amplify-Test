import "assets/scss/material-kit-react.scss?v=1.10.0";

import Amplify from "aws-amplify";
import App from "./App";
// pages for this product
import { FetchCurrentUser } from "./redux/authSlice";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import awsconfig from "./aws-exports";
import store from "./redux/store";

Amplify.configure(awsconfig);

store.dispatch(FetchCurrentUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
console.log(
  `

██╗   ██╗██╗ ██████╗██╗  ██╗ █████╗  ██████╗     ███╗   ███╗ █████╗ 
╚██╗ ██╔╝██║██╔════╝██║  ██║██╔══██╗██╔═══██╗    ████╗ ████║██╔══██╗
 ╚████╔╝ ██║██║     ███████║███████║██║   ██║    ██╔████╔██║███████║
  ╚██╔╝  ██║██║     ██╔══██║██╔══██║██║   ██║    ██║╚██╔╝██║██╔══██║
   ██║   ██║╚██████╗██║  ██║██║  ██║╚██████╔╝    ██║ ╚═╝ ██║██║  ██║
   ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═╝  ╚═╝

    Welcome to my personal portfolio website!

`
);

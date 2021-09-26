import React from "react";
import ReactDOM from "react-dom";
import "./components/index.css";
import App from "./components/App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/bigredhacks21">
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Test from "./Pages/Test";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path="/home">
          {" "}
          <Home />{" "}
        </Route>
        <Route exact path="/about">
          {" "}
          <About />{" "}
        </Route>
        <Route exact path="/map">
          {" "}
          <Test />{" "}
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;

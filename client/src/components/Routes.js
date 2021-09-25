import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Presenter from "./Pages/HomeScroll";
import Map from "./Pages/Map";
import Drive from "./Pages/Drive";

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
        <Route exact path="/scroll">
          {" "}
          <Presenter />{" "}
        </Route>
        <Route exact path="/map">
          {" "}
          <Map />
        </Route>
        <Route exact path="/drive">
          {" "}
          <Drive />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;

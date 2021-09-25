import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {

  return (
    <div>
      {" "}
      <Link to={"/drive#" + "Shanghai"}> Go Driving </Link>
      <span class="blink_me"> Exploration.. </span>
      <span id="left"><div class="fadein"> fading in</div></span>

      
    </div>
  );
}

export default Home;

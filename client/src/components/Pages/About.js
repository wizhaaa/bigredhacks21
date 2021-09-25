import React, { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {" "}
      About Exploration.
      <Link to={"/drive#" + "Shanghai"}> Go Driving </Link>
    </div>
  );
}

export default About;

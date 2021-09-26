import React, { useState } from "react";

function About() {
  return (
  <div className = "text">
    <head>
      <title> About Daytrip</title>
    </head>
    <body>
      <center>
      <h1>What is Daytrip?</h1>
      <p> 
      Daytrip is an immersive website experience that lets you <strong> explore </strong> different countries and their culture. 
      In a time where technology makes us more connected than ever before, we feel that there is alienation 
      between foreign countries than ever before. We believe that music is the common language that serves as the gateway for cultural exploration. 
      </p>
      <h1>How to use Daytrip</h1>
      <p>
      On the <a href= "/map"> global map </a>, click on a location to take a virtual drive through this country's streets. 
      While seeing what the city looks like, you’ll listen to the local music. 
      You can also discover more about the country and its musical/cultural roots. 
      </p>

      <div className="overlay"></div>
      </center>
    </body>

  </div>
  );
}

export default About;

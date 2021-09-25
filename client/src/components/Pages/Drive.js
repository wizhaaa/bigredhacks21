import React, { useState, useEffect } from "react";
import $ from 'jquery';
import DarkModeToggle from "react-dark-mode-toggle";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//pass in the following:
//props.cityName --> the city name
function Drive(props) {

    const [isLoading, setIsLoading] = useState(false); //set to false when done loading
    const [playAmbience, setPlayAmbience] = useState(true);
    const [playMusic, setPlayMusic] = useState(true);
    const [timeOfDay, setTimeOfDay] = useState(true); //true means daytime, false means nighttime
    const [driveVideoResponse, setDriveVideoResponse] = useState(null);
    const [cityName, setCityName] = useState((window.location.href+"").substring((window.location.href+"").lastIndexOf("#")+1)); //hash should contain city name. set into state
    const [isDarkMode, setIsDarkMode] = useState(false);

    function toggleAmbience() {
        setPlayAmbience(!playAmbience);
    }

    function toggleMusic() {
        setPlayMusic(!playMusic);
    }

    setTimeout(() => {
        setIsLoading(true);
    }, 5000);

    const size = useWindowSize();

    const APIKEY = "AIzaSyDUlHg82lK4mu3cXxCHffiAYaSLbAku3ts";

    let keyword = cityName + " 4k" + (timeOfDay ? "" : " night") + " drive";

    // var settings = {
    //     "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + keyword + "&type=video&key=" + APIKEY,
    //     "method": "GET",
    //     "timeout": 0,
    //     };
        
    // $.ajax(settings).done(function (response) {
    //     setDriveVideoResponse(response);
    //     setIsLoading(false);
    // });
    let hardcodedAmbientID = "fh3EdeGNKus";

    let hardcodedID = "";
    let hardcodedPlaylistID = "";
    
    if (cityName==="shanghai") {
        hardcodedID = "o0q00XhqUK8";
        hardcodedPlaylistID = "FUhJrjQHwUY";
    }
    if (cityName==="seoul") {
        hardcodedID = "d7SHqhQ82OQ";
        hardcodedPlaylistID = "rGtnDBqxvaI";
    }
    if (cityName==="tokyo") {
        hardcodedID = "p7l6JQApzak";
        hardcodedPlaylistID = "UZ7oOhhPEWU";
    }
    if (cityName==="newyork") {
        hardcodedID = "7HaJArMDKgI";
        hardcodedPlaylistID = "_sI_Ps7JSEk";
    }
    if (cityName==="sanfrancisco") {
        hardcodedID = "PGMu_Z89Ao8";
        hardcodedPlaylistID = "kSNVlmP65GI";
    }
    if (cityName==="chongqing") {
        hardcodedID = "T8COEmwmjkw";
        hardcodedPlaylistID = "QARz7ggiImI";
    }
    if (cityName==="delhi") {
        hardcodedID = "_UlKnvXKUWE";
        hardcodedPlaylistID = "3GI_uE4SxSU";
    }
    if (cityName==="cairo") {
        hardcodedID = "86pZTI5gJQM";
        hardcodedPlaylistID = "T2rNJcLmuEA";
    }
    if (cityName==="mexicocity") {
        hardcodedID = "fR7jnwIovEw";
        hardcodedPlaylistID = "ZrR68Ons4jI";
    }
    if (cityName==="london") {
        hardcodedID = "QI4_dGvZ5yE";
        hardcodedPlaylistID = "VmOOv6rVC20";
    }
    if (cityName==="chicago") {
        hardcodedID = "x42Wxn1btTY";
        hardcodedPlaylistID = "BJzmJxLncO4";
    }
    if (cityName==="paris") {
        hardcodedID = "FBjjYw-xcdg";
        hardcodedPlaylistID = "MZgojxDcYNo";
    }
    if (cityName==="dubai") {
        hardcodedID = "TE2tfavIo3E";
        hardcodedPlaylistID = "FJ6UtVkBN80";
    }
    if (cityName==="lagos") {
        hardcodedID = "BxcVPzP8cWc";
        hardcodedPlaylistID = "v8azffiFg5w";
    }
    if (cityName==="taipei") {
        hardcodedID = "o0q00XhqUK8";
        hardcodedPlaylistID = "6_73l00N9rM";
    }

    return (
        <>
            <VideoTile 
                vidid={hardcodedID} 
                width={size.width+100} 
                height={size.height}
                visible={true}
                muted={true}
            />
            <LoadOverlay 
                cityName={cityName}
                visible={!isLoading} 
                width={size.width+100} 
                height={size.height}
            />
            <ControlOverlay
                setIsDarkMode={setIsDarkMode}
                isDarkMode={isDarkMode}
                toggleAmbience={toggleAmbience}
                toggleMusic={toggleMusic}
                ambienceOn={playAmbience}
                musicOn={playMusic}
            />
            <VideoTile 
                vidid={hardcodedAmbientID}
                width={1}
                height={1}
                visible={false}
                muted={playAmbience}
            />
            <VideoTile 
                vidid={hardcodedPlaylistID}
                width={1}
                height={1}
                visible={false}
                muted={playMusic}
            />
        </>
    );
}

function ControlOverlay(props) {
    return (
        <div className="controlOverlay">
            <div className="leftside"><div className="controlelement" id="returntomap"
            ><Link to={"/map"} style={{color: "white", textDecoration: "none"}}> Back to Map </Link></div></div>
            <div className="rightside">             
                <div className="controlelement" id="localradio"
                    onClick={props.toggleMusic}
                >{props.musicOn ? "Play Music" : "Pause Music"}</div>
                <div className="controlelement" id="ambientnoise"
                    onClick={props.toggleAmbience}
                >{props.ambienceOn ? "Play Ambient Noise" : "Pause Ambient Noise"} </div>
            </div>
        </div>
    )
}

function LoadOverlay(props) {
    return (
        <div id="loadingOverlay" style={{visibility: props.visible ? 'visible' : 'hidden', width:props.width, height:props.height }} >
            <div id="teleportationnotice">Teleporting to {props.cityName}</div>
        </div>
    )
}

function VideoTile(props) { 

    let opts;
    opts = {
        height: ((parseInt(props.height)))+"",
        width: ((parseInt(props.width)))+"",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    if (props.visible===true) {
        return (
            <div class="videotile" id={props.vidid}>
                {/* x button */}
                <YouTube videoId={props.vidid} opts={opts} muted={props.muted}/>
            </div>
        )
    } else {
        return (
            <div class="videotile" id={props.vidid}>
                {/* x button */}
                <YouTube videoId={props.vidid} opts={opts} muted={props.muted}/>
            </div>
        );
    }
}

function YouTube(props) {
    var src = "https://www.youtube.com/embed/" + props.videoId + "?start=100&autoplay=1&rel=0&controls=0&mute=" + (props.muted ? 1 : 0) + "&start=" + props.opts.playerVars.start + "&end=" + props.opts.playerVars.end;
    return (
        <center>
            <iframe id="ytplayer" type="text/html" width={props.opts.width} height={props.opts.height}
                src={src}
                frameborder="0" allow="autoplay">
            </iframe>
        </center>
    );
}

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }

export default Drive;

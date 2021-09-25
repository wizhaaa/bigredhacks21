import React, { useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import { AiOutlineArrowDown } from "react-icons/ai";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Fab } from "@mui/material";

import { Link } from "react-router-dom";

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const pageOneAni = batch(Fade(), Sticky(), MoveOut(0, -200));

  document.body.style.overflow = "default";

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={MoveIn}>
          <br /><br /><br /><br /><br />
          <span style={{ fontSize: "3em" }}>DayTrip </span>
          <br /><br />
          <div>
            <Link to="map">
              <Fab variant="extended">
                <PlayArrowIcon sx={{ mr: 1 }} /> begin now{" "}
              </Fab>
            </Link>
          </div>
        </Animator>{" "}
        <AiOutlineArrowDown className="scroll-down blink-me" />{" "}
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}>
            {" "}
            Ready to <em>Explore</em>? 🚀
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={MoveIn}>
          <span style={{ fontSize: "3em" }}>
            {" "}
            Ever wonder what it's like to drive in <em> any</em> city? 🌃
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div style={{ flex: "center" }}>
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveIn(-1000, 0)}> New York 🍎</Animator>
            <Animator animation={MoveIn(1000, 0)}> Dubai🇦🇪</Animator>
            Shanghai 🇨🇳
            <Animator animation={MoveOut(1000, 0)}> Tokyo 🗼</Animator>
            <Animator animation={MoveOut(-1000, 0)}> Amsterdam 🇳🇱</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }} className="fadein">
            {" "}
            Done. ✅{" "}
          </span>{" "}
          <br />
          <span style={{ fontSize: "2em" }}>
            Day Trip will let you experience a fully immersive ride with music,
            ambience, and control<span className="blink-me">...</span>{" "}
            <Link to="about" className="links">
              {" "}
              Want to learn more?{" "}
            </Link>
          </span>
        </Animator>
      </ScrollPage>
      {/* <div>
          <Link to="about"> About </Link>
        </div> */}
    </ScrollContainer>
  );
};

export default Presenter;

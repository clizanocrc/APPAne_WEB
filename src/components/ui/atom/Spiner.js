import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// types:
// "Audio"
// "BallTriangle"
// "Bars"
// "Circles"
// "Grid"
// "Hearts"
// "Oval"
// "Puff"
// "Rings"
// "TailSpin"
// "ThreeDots"

// "Watch"
// "RevolvingDot"
// "Triangle"
// "Plane"
// "MutatingDots"
// "CradleLoader"

//color="#41A75E"
//color="#00BFFF"
//color="#00D9F6"
//color="#FFAD33"

export const Spiner = () => {
  return (
    <Loader
      type="MutatingDots"
      color="#FFAD33"
      height={100}
      width={100}
      visible
      // timeout={3000} //3 secs
    />
  );
};

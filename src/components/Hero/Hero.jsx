import React from "react";
import "./Hero.scss";

function Hero({ poster }) {
  if (!poster) {
    return <div className="hero">Loading...</div>;
  }

  return (
    <div className="maincontainer">
      <div className="hero">
        <div className="hero__video-container">
          <video
            className="hero__video"
            src={poster.video}
            poster={poster.image}
            controls
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;

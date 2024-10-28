import React from "react";
import "./Hero.scss";

function Hero({ video }) {
  if (!video) {
    return <div className="hero">Loading...</div>;
  }

  return (
    <div className="maincontainer">
    <div className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          src={video.video}
          poster={video.image}
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

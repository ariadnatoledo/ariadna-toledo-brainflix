import React from "react";
import "./HeroDescription.scss";

function HeroDescription({ video }) {
  return (
    <div className="herodescription">
      <div className="herodescription__subdescription">
      <p>{video.description}</p>
      </div>
      <div className="herodescription__length">
      <h2>{video.comments.length} Comments</h2>
      </div>
    </div>
  );
}

export default HeroDescription;

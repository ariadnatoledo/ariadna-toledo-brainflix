import React from "react";
import "./HeroDescription.scss";

function HeroDescription({ description }) {
  return (
    <div className="herodescription">
      <div className="herodescription__subdescription">
        <p>{description.description}</p>
      </div>
      <div className="herodescription__length">
        <h3>{description.comments.length} Comments</h3>
      </div>
    </div>
  );
}

export default HeroDescription;

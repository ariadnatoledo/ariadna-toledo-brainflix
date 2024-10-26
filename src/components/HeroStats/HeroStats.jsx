import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./HeroStats.scss";

import React from "react";

function HeroStats({ video }) {
  return (
    <div className="herostats">
      <h1 className="herostats__title">{video.title}</h1>
      <div className="herostats__container">
      <div className="herostats__channel">
        <p className="herostats__channel-name">Channel: {video.channel}</p>
        <p className="herostats__channel-date">
          Date: {new Date(video.timestamp).toLocaleDateString()}
        </p>
      </div>
      <div className="herostats__section">
        <p className="herostats__section-views">
          <img src={viewsIcon} alt="Views icon" className="herostats__section-icon" />
          {video.views}
        </p>
        <p className="herostats__section-likes">
          <img src={likesIcon} alt="Likes icon" className="herostats__section-icon" />
          {video.likes}
        </p>
      </div>
      </div>
    </div>
  );
}

export default HeroStats;

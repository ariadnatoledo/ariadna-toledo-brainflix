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
          <div className="herostats__container-views">
            <img
              src={viewsIcon}
              alt="Views icon"
              className="herostats__section-icon"
            />
            <p className="herostats__section-views">{video.views}</p>
          </div>
          <div className="herostats__container-likes">
            <img
              src={likesIcon}
              alt="Likes icon"
              className="herostats__section-icon"
            />
            <p className="herostats__section-likes">{video.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroStats;

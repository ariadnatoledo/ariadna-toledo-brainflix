import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

import React from "react";

function HeroStats({ video }) {
  return (
    <div className="hero__details">
      <h1 className="hero__title">{video.title}</h1>
      <p className="hero__channel">Channel: {video.channel}</p>
      <p className="hero__date">
        Date: {new Date(video.timestamp).toLocaleDateString()}
      </p>
      <p className="hero__views">
        <img src={viewsIcon} alt="Views icon" className="hero__icon" />
        {video.views}
      </p>
      <p className="hero__likes">
        <img src={likesIcon} alt="Likes icon" className="hero__icon" />
        {video.likes}
      </p>
    </div>
  );
}

export default HeroStats;

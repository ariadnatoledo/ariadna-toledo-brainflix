import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "./VideoDetails.scss";

import React from "react";

function VideoDetails({ stats, description }) {
  return (
    <div className="videodetails">
      <h1 className="videodetails__title">{stats.title}</h1>
      <div className="videodetails__container">
        <div className="videodetails__channel">
          <p className="videodetails__channel-name">Channel: {stats.channel}</p>
          <p className="videodetails__channel-date">
            Date: {new Date(stats.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="videodetails__section">
          <div className="videodetails__container-views">
            <img
              src={viewsIcon}
              alt="Views icon"
              className="videodetails__section-icon"
            />
            <p className="videodetails__section-views">{stats.views}</p>
          </div>
          <div className="videodetails__container-likes">
            <img
              src={likesIcon}
              alt="Likes icon"
              className="videodetails__section-icon"
            />
            <p className="videodetails__section-likes">{stats.likes}</p>
          </div>
        </div>
      </div>
      <div className="videodetails__description">
        <div className="videodetails__description-text">
          <p>{description.description}</p>
        </div>
        <div className="videodetails__length">
          <h3>{description.comments.length} Comments</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;

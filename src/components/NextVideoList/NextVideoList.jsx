import React from "react";
import { Link } from "react-router-dom";
import "./NextVideoList.scss";

function NextVideoList({ videos, onVideoSelect }) {
  return (
    <div className="video-list">
      <div className="video-list__wrapper">
        <h2 className="video-list__header">NEXT VIDEOS</h2>
      </div>
      {videos.map((video) => (
        <Link 
          key={video.id} 
          to={`/video/${video.id}`} 
          className="video-list__item" 
          onClick={() => onVideoSelect(video)} 
        >
          <img
            className="video-list__image"
            src={video.image}
            alt={video.title}
          />
          <div className="video-list__details">
            <h3 className="video-list__title">{video.title}</h3>
            <p className="video-list__channel">{video.channel}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NextVideoList;


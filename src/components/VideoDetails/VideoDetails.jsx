import React from "react";
import { useParams } from "react-router-dom"; 
import VideoDetailsData from "../../data/video-details.json"; 
import "./VideoDetails.scss"; 

function VideoDetails() {
  const { id } = useParams(); 
  const video = VideoDetailsData.find((video) => video.id === id); 

  if (!video) {
    return <div>Video not found!</div>; 
  }

  return (
    <div className="video-details">
      <h1 className="video-details__title">{video.title}</h1>
      <p className="video-details__author">By {video.channel}</p>
      <img className="video-details__image" src={video.image} alt={video.title} />
      <p className="video-details__views">{video.views} views</p>
      <p className="video-details__likes">{video.likes} likes</p>
      <p className="video-details__description">{video.description}</p>
    </div>
  );
}

export default VideoDetails;


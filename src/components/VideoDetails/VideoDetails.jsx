import React from "react";
import "./VideoDetails.scss";

function VideoDetails({ video }) {
  console.log("Video Details:", video); 

  if (!video) {
    return <div>Video not found!</div>; 
  }

  return (
    <div className="video-details">
            {/* <img className="video-details__image" src={video.image} alt={video.title} />  */}
      <h1 className="video-details__title">{video.title}</h1>
      <p className="video-details__author">By {video.channel}</p>
      <p className="video-details__views">{video.views} views</p>
      <p className="video-details__likes">{video.likes} likes</p>
      <p className="video-details__description">{video.description}</p>
      <h3>{video.comments.length} Comments</h3> {/* Display comment count here */}
    </div>
  );
}

export default VideoDetails;


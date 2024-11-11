import React from "react";
import "./VideoFeatured.scss";

function VideoFeatured({ poster, source }) {
  if (!poster || !source) {
    return <div className="videofeatured">Loading...</div>;
  }

  return (
    <div className="maincontainer">
      <div className="videofeatured">
        <div className="videofeatured__video-container">
          <video
            className="videofeatured__video"
            poster={poster} 
            controls
            playsInline
          >
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoFeatured;




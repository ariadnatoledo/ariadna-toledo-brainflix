import React from "react";
import "./VideoFeatured.scss";

function VideoFeatured({ poster }) {
  if (!poster) {
    return <div className="videofeatured">Loading...</div>;
  }

  return (
    <div className="maincontainer">
      <div className="videofeatured">
        <div className="videofeatured__video-container">
          <video
            className="videofeatured__video"
            src={poster.video}
            poster={poster.image}
            controls
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VideoFeatured;
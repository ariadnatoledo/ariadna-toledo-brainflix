import React from "react";
import "./VideoFeatured.scss";

function VideoFeatured({ poster, source }) {
  // console.log("Poster data in VideoFeatured:", poster);
  // console.log("Video source in VideoFeatured:", source); 

  if (!poster || !poster.video) {
    return <div className="videofeatured">Loading...</div>;
  }

  return (
    <div className="maincontainer">
      <div className="videofeatured">
        <div className="videofeatured__video-container">
          <video
            className="videofeatured__video"
            poster={poster.image}
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


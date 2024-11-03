import React from 'react';
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "../VideoDetails/VideoDetails.scss";

function VideoDetails({ videoDetails }) {
  return (
    <>
      {/* Video Details */}
      {videoDetails.title && (
        <div className="videodetails">
          <h2 className="videodetails__title">{videoDetails.title}</h2>
          
          <div className="videodetails__container">
            <div className="videodetails__channel">
              <p className="videodetails__channel-name"><strong>By:</strong> {videoDetails.channel}</p>
              <p className="videodetails__channel-date"> {videoDetails.timestamp ? new Date(videoDetails.timestamp).toLocaleDateString() : 'No Date Available'}</p>
            </div>

            <div className="videodetails__section">
              <div className="videodetails__container-views">
              <img
              src={viewsIcon}
              alt="Views icon"
              className="videodetails__section-icon"
            />
                <p clasName="videodetails__sections-views"> {videoDetails.views}</p>
              </div>
              <div className="videodetails__container-likes">
              <img
              src={likesIcon}
              alt="Likes icon"
              className="herostats__section-icon"
            />
                <p className="videodetails__section-likes">{videoDetails.likes}</p>
              </div>
            </div>
          </div>
          
          <div className="videodetails__description">
            <p className="videodetails__description-text"> {videoDetails.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoDetails;


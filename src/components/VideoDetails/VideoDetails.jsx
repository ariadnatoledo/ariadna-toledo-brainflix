import React from 'react';

function VideoDetails({ videoDetails }) {
  return (
    <>
      {/* Video Details */}
      {videoDetails.title && (
        <div>
          <h2>{videoDetails.title}</h2>
          <p><strong>Channel:</strong> {videoDetails.channel}</p>
          <p><strong>Date:</strong> {videoDetails.date ? new Date(videoDetails.date).toLocaleDateString() : 'No Date Available'}</p>
          <p><strong>Views:</strong> {videoDetails.views}</p>
          <p><strong>Likes:</strong> {videoDetails.likes}</p>
          <p><strong>Description:</strong> {videoDetails.description}</p>
        </div>
      )}
    </>
  );
}

export default VideoDetails;


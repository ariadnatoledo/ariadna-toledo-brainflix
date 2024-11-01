// VideoUploadPage.jsx
import React from 'react';
import './VideoUploadPage.scss';

function VideoUploadPage() {
  return (
    <div className="upload-page">
      <h1>Upload a Video</h1>
      <form>
        <label htmlFor="videoTitle">Title:</label>
        <input type="text" id="videoTitle" placeholder="Enter video title" required />

        <label htmlFor="videoDescription">Description:</label>
        <textarea id="videoDescription" placeholder="Enter video description" required />

        <label htmlFor="videoFile">Choose Video:</label>
        <input type="file" id="videoFile" accept="video/*" required />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default VideoUploadPage;

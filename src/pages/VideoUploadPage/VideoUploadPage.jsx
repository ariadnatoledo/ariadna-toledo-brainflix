import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import '../VideoUploadPage/VideoUploadPage.scss';

function VideoUploadPage() {
  const navigate = useNavigate();

  // State to hold video details
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    thumbnail: null,
  });

  const handleInputChange = (event) => {
    const { id, value, files } = event.target;
    if (id === 'videoThumbnail') {
      setVideoData((prev) => ({ ...prev, thumbnail: files[0] })); // Store thumbnail file
    } else {
      setVideoData((prev) => ({ ...prev, [id]: value })); // Store title and description
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Notify user about upload
    alert("Video uploaded successfully!");

    // Prepare video data for navigation
    const defaultVideo = {
      id: 1, // Example ID
      title: videoData.title || "Default Title", // Use provided title or a default
      description: videoData.description || "Default Description", // Use provided description or a default
      thumbnail: videoData.thumbnail, // Include thumbnail information if needed
    };

    // Redirect to Home with the default video
    navigate("/", { state: { video: defaultVideo } }); // Pass video data in the navigation state
  };

  return (
    <div className="upload-page">
      <h1 className="upload-page__heading">Upload Video</h1>
      
      <h2 className="upload-page__thumbnail-heading">VIDEO THUMBNAIL</h2>
      <img src={videoThumbnail} alt="Video Thumbnail" className="upload-page__thumbnail-image" />

      {/* <div className="upload-page__thumbnail-container">
        {videoData.thumbnail ? (
          <img 
            src={URL.createObjectURL(videoData.thumbnail)} 
            alt="Video Thumbnail" 
            className="upload-page__thumbnail-image" 
          />
        ) : (
          <div className="upload-page__placeholder">No thumbnail selected</div>
        )}
      </div> */}

      <div className="upload-page__form-container">
        <form className="upload-page__form" onSubmit={handleFormSubmit}>
          <label className="upload-page__label" htmlFor="videoTitle">TITLE YOUR VIDEO</label>
          <input 
            className="upload-page__input" 
            type="text" 
            id="videoTitle" 
            placeholder="Add a title to your video" 
            required 
            onChange={handleInputChange}
          />

          <label className="upload-page__label" htmlFor="videoDescription">ADD A VIDEO DESCRIPTION</label>
          <textarea 
            className="upload-page__textarea" 
            id="videoDescription" 
            placeholder="Add a description to your video" 
            required 
            onChange={handleInputChange}
          />

          {/* <label className="upload-page__label" htmlFor="videoThumbnail">UPLOAD THUMBNAIL:</label>
          <input 
            className="upload-page__file-input" 
            type="file" 
            id="videoThumbnail" 
            accept="image/*" 
            required 
            onChange={handleInputChange}
          /> */}

          <button className="upload-page__submit" type="submit">PUBLISH</button>
          <button className="upload-page__cancel" type="button" onClick={() => navigate("/")}>CANCEL</button>
        </form>
      </div>
    </div>
  );
}

export default VideoUploadPage;

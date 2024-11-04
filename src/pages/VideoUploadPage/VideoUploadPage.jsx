import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoThumbnail from "../../assets/images/Upload-video-preview.jpg";
import "../VideoUploadPage/VideoUploadPage.scss";

function VideoUploadPage() {
  const navigate = useNavigate();

  const [videoData, setVideoData] = useState({
    title: "",
    description: "",
    thumbnail: null,
  });

  const handleInputChange = (event) => {
    const { id, value, files } = event.target;
    if (id === "videoThumbnail") {
      setVideoData((prev) => ({ ...prev, thumbnail: files[0] }));
    } else {
      setVideoData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Video uploaded successfully!");
    const defaultVideo = {
      id: 1,
      title: videoData.title || "Default Title",
      description: videoData.description || "Default Description",
      thumbnail: videoData.thumbnail,
    };
    navigate("/", { state: { video: defaultVideo } });
  };

  return (
    <div className="upload-page">
      <h1 className="upload-page__heading">Upload Video</h1>

      {/* Outer container with padding */}
      <div className="upload-page__outer-container">
        <div className="upload-page__content">
          {/* Thumbnail Section */}
          <div className="upload-page__thumbnail">
            <h2 className="upload-page__thumbnail-heading">VIDEO THUMBNAIL</h2>
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="upload-page__thumbnail-image"
            />
          </div>

          {/* Form Section */}
          <div className="upload-page__form-container">
            <form className="upload-page__form" onSubmit={handleFormSubmit}>
              <div className="upload-page__form-section">
                <label className="upload-page__label" htmlFor="videoTitle">
                  TITLE YOUR VIDEO
                </label>
                <input
                  className="upload-page__input"
                  type="text"
                  id="videoTitle"
                  placeholder="Add a title to your video"
                  required
                  onChange={handleInputChange}
                />

                <label className="upload-page__label" htmlFor="videoDescription">
                  ADD A VIDEO DESCRIPTION
                </label>
                <textarea
                  className="upload-page__textarea"
                  id="videoDescription"
                  placeholder="Add a description to your video"
                  required
                  onChange={handleInputChange}
                />
              </div>

              {/* Button Section inside the form */}
              <div className="upload-page__button-container">
                <button className="upload-page__submit" type="submit">
                  PUBLISH
                </button>
                <button
                  className="upload-page__cancel"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoUploadPage;




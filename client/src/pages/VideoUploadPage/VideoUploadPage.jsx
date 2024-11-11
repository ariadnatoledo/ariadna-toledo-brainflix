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

  const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        const newVideo = {
          title: videoData.title || "New York Marathon 2024 Blog",
          channel: "Jordan Hawkings", 
          image: "http://localhost:8080/images/Upload-video-preview.jpg", 
          description: videoData.description || "Welcome to my channel. Here I post about marathon advice, my daily blogs and things that help keep me running throughout the week.",
          views: "2,233,563",
          likes: "449,751",
          duration: "11:12",
          video: "https://unit-3-project-api-0a5620414506.herokuapp.com/stream",
          timestamp: Date.now(),
          comments: [
            {
              name: "Ariadna Toledo",
              comment: "Excited to dive into these coding techniques! Your tutorials make complex topics feel approachable. Keep up the awesome work!",
              likes: 35,
              timestamp: 1731078667799
            },
            {
              name: "Kuriela Castañas",
              comment: "The way you break down each coding concept is so helpful! I'm learning so much about building efficient software. Thank you for making it all so clear!",
              likes: 11,
              timestamp: 1731078667799
            },
            {
              name: "Naoto Wakabayashi",
              comment: "This tutorial really connects the dots between theory and practice! I've struggled with understanding these concepts before, but your explanations make them click. Looking forward to building my own projects with these insights!",
              likes: 100,
              timestamp: 1731078667799
            }
          ],
        };
      
        try {
          const response = await fetch("http://localhost:8080/videos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newVideo),
          });
      
          if (response.ok) {
            alert("Video uploaded successfully!");
            navigate("/");
          } else {
            alert("Failed to upload video");
          }
        } catch (error) {
          console.error("Error uploading video:", error);
          alert("An error occurred while uploading the video");
        }
      };

  return (
    <div className="upload-page">
      <h1 className="upload-page__heading">Upload Video</h1>

      <div className="upload-page__outer-container">
        <div className="upload-page__content">
          <div className="upload-page__thumbnail">
            <h2 className="upload-page__thumbnail-heading">VIDEO THUMBNAIL</h2>
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="upload-page__thumbnail-image"
            />
          </div>

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


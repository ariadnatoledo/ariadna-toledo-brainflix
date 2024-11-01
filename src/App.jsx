// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoFeatured from "./components/VideoFeatured/VideoFeatured";
import VideoDetails from "./components/VideoDetails/VideoDetails"; 
import CommentForm from "./components/CommentForm/CommentForm";
import Comments from "./components/Comments/Comments";
import NextVideoList from "./components/NextVideoList/NextVideoList";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage"; 
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage"; 
import VideoDetailsData from "./data/video-details.json";
import NewVideoDetailsData from "./data/videos.json";
import BrainFlixLogo from "./assets/logo/BrainFlix-logo.svg";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoDetailsData[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  const handleAddComment = (newComment) => {
    setCurrentVideo((prevVideo) => ({
      ...prevVideo,
      comments: [{ id: Date.now(), ...newComment }, ...prevVideo.comments],
    }));
  };

  return (
    <BrowserRouter>
      <Header logo={BrainFlixLogo} />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <VideoFeatured poster={currentVideo} />
              <section className="maincontainer">
                <div>
                  <VideoDetails video={currentVideo} />
                  <CommentForm onAddComment={handleAddComment} />
                  <Comments user={currentVideo} />
                </div>
                <div className="maincontainer__two">
                  <NextVideoList
                    videos={NewVideoDetailsData.filter(
                      (video) => video.id !== currentVideo.id
                    )}
                    onVideoSelect={handleVideoSelect}
                  />
                </div>
              </section>
            </>
          }
        />
        <Route 
          path="/video/:id" 
          element={<VideoDetailsPage />} // Use VideoDetailsPage here
        />
        <Route 
          path="/upload" 
          element={<VideoUploadPage />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



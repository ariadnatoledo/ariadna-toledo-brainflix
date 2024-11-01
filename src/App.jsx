import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import HomePage from "./pages/HomePage/HomePage"; 
import VideoDetailsData from "./data/video-details.json";
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
            <HomePage 
              currentVideo={currentVideo}
              handleAddComment={handleAddComment}
              handleVideoSelect={handleVideoSelect}
            />
          }
        />
        <Route 
          path="/video/:id" 
          element={<VideoDetailsPage />} 
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




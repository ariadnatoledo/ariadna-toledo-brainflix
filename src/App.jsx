import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoFeatured from "./components/VideoFeatured/VideoFeatured";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import CommentForm from "./components/CommentForm/CommentForm";
import Comments from "./components/Comments/Comments";
import NextVideoList from "./components/NextVideoList/NextVideoList";
import VideoDetailsData from "./data/video-details.json";

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
    <>
      <Header logo="BrainFlix" />
      <VideoFeatured poster={currentVideo} />
      <section className="maincontainer">
        <div>
          <VideoDetails stats={currentVideo} description={currentVideo} />
          <CommentForm onAddComment={handleAddComment} />
          <Comments user={currentVideo} />
        </div>
        <div className="maincontainer__two">
          <NextVideoList
            videos={VideoDetailsData.filter(
              (video) => video.id !== currentVideo.id
            )}
            onVideoSelect={handleVideoSelect}
          />
        </div>
      </section>
    </>
  );
}

export default App;

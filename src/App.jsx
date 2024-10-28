import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HeroStats from "./components/HeroStats/HeroStats";
import HeroDescription from "./components/HeroDescription/HeroDescription";
import CommentForm from "./components/CommentForm/CommentForm";
import Comments from "./components/Comments/Comments";
import VideoList from "./components/VideoList/VideoList";
import VideoDetails from "./data/video-details.json";

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoDetails[0]);

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
      <Hero video={currentVideo} />
      <section className="maincontainer">
        <div>
          <HeroStats video={currentVideo} />
          <HeroDescription video={currentVideo} />
          <CommentForm onAddComment={handleAddComment} />
          <Comments video={currentVideo} />
        </div>
        <div className="maincontainer__two">
          <VideoList
            videos={VideoDetails.filter(
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

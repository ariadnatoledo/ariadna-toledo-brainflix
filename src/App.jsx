import { useState } from 'react';
import './App.scss'
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList';
import VideoDetails from './data/video-details.json';

function App() {
  const [currentVideo, setCurrentVideo] = useState(VideoDetails[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  const handleAddComment = (newComment) => {
    setCurrentVideo(prevVideo => ({
      ...prevVideo,
      comments: [newComment, ...prevVideo.comments]
    }));
  };

  return (
    <>
      <Header logo="BrainFlix"/>
      <Hero video={currentVideo} />
      <Comments video={currentVideo} onAddComment={handleAddComment} />
      <VideoList 
        videos={VideoDetails.filter(video => video.id !== currentVideo.id)} 
        onVideoSelect={handleVideoSelect}
      />
    </>
  )
}

export default App;
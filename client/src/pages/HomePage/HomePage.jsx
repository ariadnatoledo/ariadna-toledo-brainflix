import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NextVideosList from "../../components/NextVideoList/NextVideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comments from "../../components/Comments/Comments";
import VideoFeatured from "../../components/VideoFeatured/VideoFeatured";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const base_URL = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();

  console.log("Base URL:", base_URL);

  const getVideosData = async () => {
    try {
      const response = await axios.get(`${base_URL}`);
      setVideos(response.data);
      if (!id && response.data.length > 0) {
        setVideoDetails(response.data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos", error);
      setError("Failed to load videos.");
      setLoading(false);
    }
  };

  const getVideoById = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_URL}/${id}`);
      setVideoDetails(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video by id", error);
      setError("Failed to load video details.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideosData();
  }, []);

  useEffect(() => {
    if (id) {
      getVideoById(id);
    } else if (videos.length > 0) {
      getVideoById(videos[0].id);
    }
  }, [id, videos]);

  const handleVideoClick = (video) => {
    getVideoById(video.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddComment = (newComment) => {
    setVideoDetails((prevDetails) => ({
      ...prevDetails,
      comments: [newComment, ...prevDetails.comments],
    }));
  };

  if (loading) {
    return <div>Loading video details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      {videoDetails && (
        <>
          <VideoFeatured poster={videoDetails.image} source={videoDetails.video} />
          <section className="maincontainer">
            <div>
              <VideoDetails videoDetails={videoDetails} comments={videoDetails.comments} />
              <CommentForm onAddComment={handleAddComment} />
              <Comments comments={videoDetails.comments} />
            </div>
            <div className="maincontainer__two">
              <NextVideosList list={videos} onVideoClick={handleVideoClick} />
            </div>
          </section>
        </>
      )}
    </section>
  );
}

export default HomePage;





















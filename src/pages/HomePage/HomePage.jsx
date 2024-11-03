import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NextVideosList from "../../components/NextVideoList/NextVideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comments from "../../components/Comments/Comments";
import VideoFeatured from "../../components/VideoFeatured/VideoFeatured";

function HomePage() {
  const API_KEY = "c61566c5-5f0b-4954-ab44-e1ba75fe94bb";
  const base_url = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos`;

  const { id } = useParams();
  const navigate = useNavigate();

  const [videoDetails, setVideoDetails] = useState({});
  const [videos, setVideos] = useState([]);

  // Fetch the list of videos and set the default video
  const getVideos = async () => {
    try {
      const response = await axios.get(`${base_url}?api_key=${API_KEY}`);
      setVideos(response.data);

      // Set default video if no id in URL
      if (!id && response.data.length > 0) {
        const firstVideoId = response.data[0].id;
        navigate(`/videos/${firstVideoId}`);
      }
    } catch (error) {
      console.error("Error fetching videos", error);
    }
  };

  // Fetch video details by ID
  const getVideoById = async (videoId) => {
    try {
      const response = await axios.get(
        `${base_url}/${videoId}?api_key=${API_KEY}`
      );
      setVideoDetails(response.data);
    } catch (error) {
      console.error("Error fetching video by id", error);
    }
  };

  // Handle adding a new comment
  const handleAddComment = (newComment) => {
    setVideoDetails((prevDetails) => ({
      ...prevDetails,
      comments: [...prevDetails.comments, newComment],
    }));
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (id) {
      getVideoById(id);
    }
  }, [id]);

  return (
    <section>
    <VideoFeatured poster={videoDetails} source={`${videoDetails.video}?api_key=${API_KEY}`} />

      <section className="maincontainer">
        <div>
          <VideoDetails videoDetails={videoDetails} />
          <CommentForm onAddComment={handleAddComment} />
          <Comments comments={videoDetails.comments} />
        </div>

        <div className="maincontainer__two">
          <NextVideosList list={videos} />
        </div>
      </section>
    </section>
  );
}

export default HomePage;

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
  // Fetch all videos
  const getVideosData = async () => {
    try {
      const response = await axios.get(`${base_URL}`);
      setVideos(response.data);
      if (!id && response.data.length > 0) {
        setVideoDetails(response.data[0]); // Load the first video as default
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos", error);
      setError("Failed to load videos.");
      setLoading(false);
    }
  };

  // Fetch video details by ID
  const getVideoById = async (videoId) => {
    setLoading(true); // Start loading when fetching new video details
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

  // Fetch videos when component mounts
  useEffect(() => {
    getVideosData();
  }, []);

  // Fetch video details when id changes
  useEffect(() => {
    if (id) {
      getVideoById(id);
    }
  }, [id]);

  // Handle video click from NextVideoList
  const handleVideoClick = (video) => {
    getVideoById(video.id); // Fetch selected video details by ID
  };

  // Handle adding a new comment
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
          <VideoFeatured poster={videoDetails} source={videoDetails.video} />
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


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import NextVideosList from "../../components/NextVideoList/NextVideoList";
// import VideoDetails from "../../components/VideoDetails/VideoDetails";
// import CommentForm from "../../components/CommentForm/CommentForm";
// import Comments from "../../components/Comments/Comments";
// import VideoFeatured from "../../components/VideoFeatured/VideoFeatured";

// function HomePage() {
//   const [videos, setVideos] = useState([]);
//   const [videoDetails, setVideoDetails] = useState(null); // State for selected video details
//   const base_URL = import.meta.env.VITE_BASE_URL;


//   console.log("Base URL:", base_URL);

//   const { id } = useParams();

//   // Fetch all videos
//   const getVideosData = async () => {
//     try {
//       const response = await axios.get(`${base_URL}/videos`);
//       setVideos(response.data);
//       // Set initial video if no id is specified
//       if (!id && response.data.length > 0) {
//         setVideoDetails(response.data[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching videos", error);
//     }
//   };

//   // Fetch video details by ID
//   const getVideoById = async (videoId) => {
//     try {
//       const response = await axios.get(`${base_URL}/videos/${videoId}`);
//       setVideoDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching video by id", error);
//     }
//   };

//   // Fetch videos when component mounts
//   useEffect(() => {
//     getVideosData();
//   }, []);

//   // Fetch video details when id changes
//   useEffect(() => {
//     if (id) {
//       getVideoById(id);
//     }
//   }, [id]);

//   // Handle adding a new comment
//   const handleAddComment = (newComment) => {
//     setVideoDetails((prevDetails) => ({
//       ...prevDetails,
//       comments: [newComment, ...prevDetails.comments],
//     }));
//   };

//   const handleVideoClick = (video) => {
//     setSelectedVideo(video); // Update selected video on click
//   };

//   // Filter out the current video from the list for the "Next Videos" section
//   // const filteredVideos = videos.filter((video) => video.id !== videoDetails?.id);

//   return (
//     <section>
//       {videoDetails && (
//         <>
//           <VideoFeatured poster={videoDetails} source={videoDetails.video} />
//           <section className="maincontainer">
//             <div>
//               <VideoDetails videoDetails={videoDetails} comments={videoDetails.comments} />
//               <CommentForm onAddComment={handleAddComment} />
//               <Comments comments={videoDetails.comments} />
//             </div>
//             <div className="maincontainer__two">
//             <NextVideoList list={videos} onVideoClick={handleVideoClick} />
//               {/* <NextVideosList list={filteredVideos} /> */}
//             </div>
//           </section>
//         </>
//       )}
//     </section>
//   );
// }

// export default HomePage;




















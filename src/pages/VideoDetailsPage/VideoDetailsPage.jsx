import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import "./VideoDetailsPage.scss";

function VideoDetailsPage({ videos }) {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "c61566c5-5f0b-4954-ab44-e1ba75fe94bb";

  useEffect(() => {
    const fetchVideoDetailsPage = async () => {
      try {
        const URL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${API_KEY}`;
        const response = await axios.get(URL);
        console.log("API Response:", response.data); 
        setVideoDetails(response.data);
      } catch (error) {
        console.log("Error fetching Video Details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchVideoDetailsPage();
  }, [id]);
  
  if (loading) return <p>Loading Video Details...</p>;
  if (!videoDetails) return <p>Video not found!</p>;

  return (
    <div className="video-details-page">
      <VideoDetails video={videoDetails} />
      <Comments user={videoDetails} />
      <NextVideoList videos={videos.filter((video) => video.id !== id)} />
    </div>
  );
}

export default VideoDetailsPage;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import VideoDetails from "../../components/VideoDetails/VideoDetails";
// import Comments from "../../components/Comments/Comments";
// import NextVideoList from "../../components/NextVideoList/NextVideoList";
// import "./VideoDetailsPage.scss";

// function VideoDetailsPage({ videos }) {
//   const { id } = useParams();
//   const [videoDetails, setVideoDetails] = useState(null);
//   const API_KEY = "c61566c5-5f0b-4954-ab44-e1ba75fe94bb";

//   useEffect(() => {
//     const fetchVideoDetailsPage = async () => {
//       try {
//         const URL = `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=${API_KEY}`;
//         const response = await axios.get(URL);
//         console.log("Fetched Video Details:", response.data); // Log to see the API response
//         setVideoDetails(response.data);
//       } catch (error) {
//         console.log("Error fetching Video Details", error);
//       }
//     };
//     fetchVideoDetailsPage();
//   }, [id]);

//   if (!videoDetails) return <p>Loading Video Details...</p>;

//   return (
//     <div className="video-details-page">
//       <VideoDetails video={videoDetails} />
//       <Comments user={videoDetails} />
//       <NextVideoList videos={videos.filter((video) => video.id !== id)} />
//     </div>
//   );
// }

// export default VideoDetailsPage;



import React from "react";
import { useParams } from "react-router-dom";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoDetailsData from "../../data/video-details.json";

function VideoDetailsPage() {
  const { id } = useParams();
  const video = VideoDetailsData.find((video) => video.id === id);

  if (!video) {
    return <div>Video not found!</div>;
  }

  return (
    <div>
      <VideoDetails video={video} />
    </div>
  );
}

export default VideoDetailsPage;

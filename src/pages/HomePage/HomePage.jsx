import React from "react";
import VideoFeatured from "../../components/VideoFeatured/VideoFeatured";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comments from "../../components/Comments/Comments";
import NextVideoList from "../../components/NextVideoList/NextVideoList";
import NewVideoDetailsData from "../../data/videos.json";

function HomePage({ currentVideo, handleAddComment, handleVideoSelect }) {
  return (
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
  );
}

export default HomePage;


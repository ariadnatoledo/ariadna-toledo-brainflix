import React from "react";

function HeroDescription({ video }) {
  return (
    <div>
      <p>{video.description}</p>
      <h2>{video.comments.length} Comments</h2>
    </div>
  );
}

export default HeroDescription;

import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

function Hero({ video }) {
  if (!video) {
    return <div>Loading...</div>; // Or any other loading state
  }

  return (
    <div className="hero">
      <div className="hero__video-container">
        <video
          className="hero__video"
          src={video.video}
          poster={video.image}
          controls
          width="100%"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero__details">
        <h1 className="hero__title">{video.title}</h1>
        <p className="hero__channel">Channel: {video.channel}</p>
        <p className="hero__date">
          Date: {new Date(video.timestamp).toLocaleDateString()}
        </p>
        <p className="hero__views">
          <img src={viewsIcon} alt="Views icon" className="hero__icon" />
          {video.views}
        </p>
        <p className="hero__likes">
          <img src={likesIcon} alt="Likes icon" className="hero__icon" />
          {video.likes}
        </p>
      </div>
    </div>
  );
}

export default Hero;

// import React from 'react';
// import './Hero.scss';

// function Hero({ video }) {
//   if (!video) {
//     return <div>Loading...</div>; // Or any other loading state
//   }

//   return (
//     <div className="hero">
//       <div className="hero__video-container">
//         <video
//           className="hero__video"
//           src={video.video}
//           poster={video.image}
//           controls
//           width="100%"
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="hero__details">
//         <h1 className="hero__title">{video.title}</h1>
//         <p className="hero__channel">Channel: {video.channel}</p>
//         <p className="hero__date">Date: {new Date(video.timestamp).toLocaleDateString()}</p>
//         <p className="hero__views">Views: {video.views}</p>
//         <p className="hero__likes">Likes: {video.likes}</p>
//       </div>
//     </div>
//   );
// }

// export default Hero;

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
    </div>
  );
}

export default Hero;

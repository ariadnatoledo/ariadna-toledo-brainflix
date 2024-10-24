import videoPreview from "../../assets/images/Upload-video-preview.jpg"

function Hero({ video }) {
  return (
    <div className="hero">
<video src={video.video}></video>     

{/* To add poster (thumbnail) and connect "Next Videos" to display onClick */}
{/* To add width: 100% - Don't forget */}

 <h1>{video.title}</h1>
      <p>{video.channel}</p>
      <p>{new Date(video.timestamp).toLocaleDateString()}</p>
      <p>Views: {video.views}</p>
      <p>Likes: {video.likes}</p>
    </div>
  );
}
export default Hero;

{
  /* //Separating comments */
}

//       <p>{video.description}</p>
//       <h2> 3 Comments</h2>
//       {video.comments.map((comment) => (
//         <div key={comment.id}>
//           <p>{comment.name}</p>
//           <p>{comment.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Hero;

// NOTE: Separate my hero from my comments, description and videos.

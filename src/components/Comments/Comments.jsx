function Comments({video}) {
    return (
      <div className="comments">
        <p>{video.description}</p>
        <h2>{video.comments.length} Comments</h2>
        {video.comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Comments
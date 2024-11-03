import React from 'react';
import "../Comments/Comments.scss"

function Comments({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No comments available.</p>;
  }

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.timestamp} style={{ marginBottom: '1rem' }}>
            <p><strong>{comment.name}</strong> - {comment.timestamp ? new Date(comment.timestamp).toLocaleDateString() : 'No Date'}</p>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;

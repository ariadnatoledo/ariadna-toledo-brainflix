import React from 'react';
import "../Comments/Comments.scss";

function Comments({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No comments available.</p>;
  }

  return (
    <div className="comment">
      <ul>
        {comments.map((comment) => (
          <li key={comment.timestamp} className="comment__wrapper">
            <div className="comment__avatar" />
            <div className="comment__content">
              <div className="comment__header">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__timestamp">
                  {comment.timestamp ? new Date(comment.timestamp).toLocaleDateString() : 'No Date'}
                </p>
              </div>
              <p className="comment__text">{comment.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;


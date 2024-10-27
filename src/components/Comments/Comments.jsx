import React, { useState } from "react";
import "./Comments.scss";

function Comments({ video, onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (comment.trim() === "") {
      alert("Please leave a cool comment!");
      return;
    }

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      comment: comment.trim(),
      timestamp: new Date().toISOString(),
    };

    onAddComment(newComment);

    setName("");
    setComment("");
  };

  return (
    <div className="comment">
      {video.comments.map((comment) => (
        <div key={comment.id} className="comment__wrapper">
          <div className="comment__avatar"></div>
          <div className="comment__content">
            <div className="comment__header">
              <div className="comment__name-container">
                <p className="comment__name">{comment.name}</p>
              </div>
              <div className="comment__timestamp-container">
                <p className="comment__timestamp">
                  {new Date(comment.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;

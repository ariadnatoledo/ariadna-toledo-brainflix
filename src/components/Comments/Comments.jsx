import React, { useState } from "react";
import avatarSvg from "../../assets/images/Mohan-muruge.jpg";
import "../Comments/Comments.scss";

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
    <div className="comments">
      <p>{video.description}</p>
      <h2>{video.comments.length} Comments</h2>

      <form onSubmit={handleSubmit} className="comments__form">
        <h2>Join the Conversation</h2>
        <div className="comments__form-content">
          <img src={avatarSvg} alt="Your Avatar" className="comments__avatar" />
          <div className="comments__input-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="comments__input"
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a new comment"
              className="comments__textarea"
            />
            <button type="submit" className="comments__submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      {video.comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img
            src={avatarSvg}
            alt={`${comment.name}'s Avatar`}
            className="comment__avatar"
          />
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


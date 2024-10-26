import React, { useState } from "react";
import avatarSvg from "../../assets/images/Mohan-muruge.jpg";
import "./CommentForm.scss";

function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() && comment.trim()) {
      onAddComment({
        name: name.trim(),
        comment: comment.trim(),
        timestamp: new Date().toISOString(),
      });
      setName("");
      setComment("");
    }
  };

  return (
    <div className="comments__form">
      <form onSubmit={handleSubmit} className="comments__form-container">
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
    </div>
  );
}

export default CommentForm;

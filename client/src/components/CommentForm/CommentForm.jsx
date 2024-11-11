import React, { useState } from "react";
import avatarSvg from "../../assets/images/Mohan-muruge.jpg";
import "./CommentForm.scss";

function CommentForm({ onAddComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Don't forget to enter your name.");
      return;
    }

    if (comment.trim() === "") {
      alert("Leave a cool comment!");
      return;
    }

    onAddComment({
      name: name.trim(),
      comment: comment.trim(),
      timestamp: new Date().toISOString(),
    });

    setName("");
    setComment("");
  };

  return (
    <div className="comments__form-container">
      <form onSubmit={handleSubmit} className="comments__form">
        <h2 className="comments__heading">JOIN THE CONVERSATION</h2>
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
              COMMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
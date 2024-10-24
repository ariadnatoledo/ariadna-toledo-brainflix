
import React, { useState } from 'react';

function Comments({ video, onAddComment }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    if (comment.trim() === '') {
      alert('Please leave a cool comment!');
      return;
    }

    const newComment = {
      id: Date.now(), // This is a simple way to generate a unique id
      name: name.trim(),
      comment: comment.trim(),
      timestamp: new Date().toISOString(),
    };

    onAddComment(newComment);

    // Clear the form
    setName('');
    setComment('');
  };

  return (
    <div className="comments">
      <p>{video.description}</p>
      <h2>{video.comments.length} Comments</h2>
      
      <form onSubmit={handleSubmit} className="comments__form">
        <h2>Join the Conversation</h2>
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
        <button type="submit" className="comments__submit">Submit</button>
      </form>

      {video.comments.map((comment) => (
        <div key={comment.id} className="comment">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__text">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;









// function Comments({video}) {
//     return (
//       <div className="comments">
//         <p>{video.description}</p>
//         <h2>{video.comments.length} Comments</h2>
//         {video.comments.map((comment) => (
//           <div key={comment.id}>
//             <p>{comment.name}</p>
//             <p>{comment.comment}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export default Comments
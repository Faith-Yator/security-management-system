// Sidebar.js

import React, { useState } from 'react';
import './HomeSecurity.css';

const HomeSecurity = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="sidebar">
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-row">
            <span className="comment">{comment}</span>
          </div>
        ))}
      </div>
      <div className="add-comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..." 
          className="comment-input" 
        />
        <button onClick={handleAddComment} className="add-button">
          Add Comment
        </button>
      </div>
      
    </div>
  );
};

export default HomeSecurity ;

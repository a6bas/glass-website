import React, { useState, useEffect } from 'react';
import './Intro.css';

const CommentsReviews = () => {
  const [comments, setComments] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  // Fetch comments from the server
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:5001/reviews');
        const data = await response.json();
        setComments(data);

        // Calculate average rating
        const totalRating = data.reduce((acc, comment) => acc + comment.rating, 0);
        const avgRating = data.length ? (totalRating / data.length).toFixed(1) : 0;
        setAverageRating(avgRating);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="app__comments-reviews">
      <div className="app__comments-reviews-content">
        <h1 className="headtext__cormorant">Installation by Experts</h1>
        <p className="p__opensans">
          When you hire K Glass Inc to install your frameless or semi-frameless shower enclosure, glass railing, or custom mirror, you'll receive the quality service you deserve. We never use subcontractors.
          All our employees are trained to install any kind of glass work! Warranties include:
        </p>
        <ul className="warranty-list">
          <li>Three-year hardware warranty</li>
          <li>One-year warranty on installation</li>
        </ul>

        <div className="average-rating">
          <h2 className="headtext__cormorant">Average Customer Rating</h2>
          <p className="p__opensans">
            {averageRating} / 5 Stars
          </p>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={{
                  color: index < Math.round(averageRating) ? '#DCCA87' : '#ccc',
                  fontSize: '1.5rem',
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="button-group">
          <button
            className="toggle-reviews-button"
            onClick={() => setShowReviews(!showReviews)}
          >
            {showReviews ? 'Hide Reviews' : 'Show Reviews'}
          </button>

          <button
            className="write-review-button"
            onClick={() => window.location.href = '#footer'}
          >
            Write a Review
          </button>
        </div>

        {showReviews && (
          <div className="comments-container">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="comment">
                  <p className="p__opensans">{comment.comment}</p>
                  <p className="p__opensans"><strong>Rating:</strong> {comment.rating}</p>
                  <p className="p__opensans"><strong>By:</strong> {comment.name}</p>
                </div>
              ))
            ) : (
              <p className="p__opensans">No reviews yet. Be the first to leave a comment!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentsReviews;

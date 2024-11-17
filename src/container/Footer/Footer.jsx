import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Footer.css';

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track submission status

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      rating,
      comment,
      name,
      email,
    };

    try {
      const response = await fetch('http://localhost:5001/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      const data = await response.json();
      console.log('Review submitted:', data);
      setSubmitted(true); // Display thank-you message
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting your review');
    }
  };

  return (
    <div className="app__review-form-wrapper" id="footer">
      <div className="app__review-form section__padding">
        {submitted ? (
          <div className="thank-you-message">
            <h1 className="headtext__cormorant">Thank You!</h1>
            <p className="p__opensans">
              We value your feedback and appreciate you taking the time to share your experience.
            </p>
          </div>
        ) : (
          <>
            <h1 className="headtext__cormorant">Leave Your Feedback</h1>
            <p className="p__opensans">
              Thank you for taking the time to tell us about your experience. Please fill out the survey below.
            </p>

            <form onSubmit={handleSubmit} className="review__form">
              <div className="form__group">
                <p className="p__opensans">Rate Us</p>
                <div className="rating">
                  {[...Array(5)].map((_, index) => {
                    const currentRating = index + 1;
                    return (
                      <FaStar
                        key={index}
                        size={30}
                        color={currentRating <= (hover || rating) ? '#DCCA87' : '#ccc'}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(currentRating)}
                        style={{ cursor: 'pointer' }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="form__group">
                <textarea
                  placeholder="Comments"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </div>

              <div className="form__group">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form__group">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="custom__button">
                Submit Review
              </button>
            </form>
          </>
        )}
      </div>
     
    </div>
  );
};

export default WriteReview;

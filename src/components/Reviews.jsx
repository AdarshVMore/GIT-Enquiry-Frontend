import React from "react";
import "./Reviews.css";
import reviewImage from "../assets/alumni.png"; // Update the path accordingly

const Reviews = () => {
  return (
    <div className="review-container">
      <div className="review-image">
        <img src={reviewImage} alt="Review" />
      </div>
      <div className="review-text">
        <div className="apostrophe start">“</div>
        <p>
          Completing my engineering at Gharda Institute of Technology was an
          amazing experience. GIT helped me grow both academically and
          personally. The lively environment boosted my confidence, and living
          in the hostel made me more independent. I made great friends and
          unforgettable memories that I’ll always cherish.
        </p>
        <div className="reviewer-name">- PRATIK DOSHI</div>
        <div className="apostrophe end">”</div>
      </div>
    </div>
  );
};

export default Reviews;

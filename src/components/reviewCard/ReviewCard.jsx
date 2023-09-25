import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ name, image, review, stars, place }) => {
  return (
    <div className="review_card">
      <div className="review_detail">
        <div>
          <img src={image} alt="" className="review_img" />
        </div>
        <div className="farmer_detail">
          <p className="farmer_name">{name}</p>
          <p className="farmer_place">{place}</p>
        </div>
      </div>
      <div className="farmer_review">{review}</div>
      <div className="farmer_stars">
        {stars.map((star) => {
          return <>{star}</>;
        })}
      </div>
    </div>
  );
};

export default ReviewCard;

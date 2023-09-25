import React from "react";
import "./Reviews.css";
import { ReviewsData } from "./Data.js";
import ReviewCard from "../reviewCard/ReviewCard"

const Reviews = () => {
  return (
    <div className="expert_sec farmer_reviews">
      <div className="heading">
        <h1 className="experts_head">Farmer Reviews</h1>
        <p className="review_subhead">from around the world</p>
      </div>
      <div className="review_cards">
        {ReviewsData.map((review) => {
          return (
            <div className="" key={review.id}>
              <ReviewCard
                name={review.name}
                image={review.image}
                review={review.review}
                stars={review.stars}
                place={review.place}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;

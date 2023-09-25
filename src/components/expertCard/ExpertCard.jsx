import React from "react";
import "./ExpertCard.css";
import 'boxicons'

const ExpertCard = ({ name, quote, image }) => {
  return (
    <div className="expert_card">
      <div className="inner_expert_card">
        <img className="expert_img" src={image} alt="" />
        <div className="expert_name">{name}</div>
        <div className="expert_quote">{quote}</div>
        <div className="socials">
        <box-icon type='logo' name='facebook'></box-icon>
        <box-icon type='logo' name='twitter'></box-icon>
        <box-icon type='logo' name='instagram'></box-icon>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;

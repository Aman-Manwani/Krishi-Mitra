import React from "react";
import "./Expert.css";
import {experts} from "./ExpertData.js";
import ExpertCard from "../expertCard/ExpertCard";

const Expert = () => {
  return (
    <div className="expert_sec">
      <div className="heading">
        <h1 className="experts_head">Experts</h1>
        <p className="expert_subhead">Our Professional Trainers</p>
      </div>
      <div className="upper_card">
        {experts.map((expert) => {
          return (
            <div className="" key={expert.id}>
              <ExpertCard name = {expert.name} quote = {expert.quote} image = {expert.image} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="banner">
      <div className="banner_contents">
        <h1 className="banner_title">
          Meet Our Experts
        </h1>
        <div className="banner_buttons">
          <h1 className="banner_description" style={{color:"white"}}>
            Solve  plants problems in just 15 minutes with our prescribed experts
          </h1>
        </div>
          <Link to='/register/basic'><button className="register_btn2">Join Us As Expert</button></Link>
      </div>
      <div className="fade_bottom">
        
      </div>

    </header>
  );
};

export default Home;

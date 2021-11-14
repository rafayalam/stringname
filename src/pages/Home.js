import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/construction.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> OccuSafe </h1>
        <p> UTILIZING CURRENT TRENDS TO SECURE YOUR FUTURE </p>
        <Link to="/menu">
          <button> VIEW DATA </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

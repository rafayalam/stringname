import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/construction.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> OCCUPATIONAL SAFETY </h1>
        <p> CURRENT AND FUTURE TRENDS </p>
        <Link to="/menu">
          <button> VIEW DATA </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

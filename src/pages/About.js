import React from "react";
import MultiplePizzas from "../assets/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        The inspiration for the development of OccuSafe stems from us analyzing datasets to identify and provide awareness of current and future trends related to occupational safety.
        Construction workers face many on the job dangers and difficulties which can cause serious injuries and could even be fatal.
        We wanted to create a web app that serves as a catalyst to determine current and future trends of occupational safety while also providing an interactive experience to educate workers in the field!
        <br/>
        <br/>
        OccuSafe is a web app with 3 core features being the Data, Tips, and Game screen. On the Data page, users can observe and study graphs which are very intricately implemented using PowerBI as well RStudio to calculate occupational safety trends.
        With the Tips feature, occupational safety workers can learn more about following the correct safety protocols and guidelines to prevent future injuries or fatalities.
        With the Game feature, users can test their knowledge of all the information provided on the Tips page to determine how well they are familiar with their safety protocols.
        </p>
      </div>
    </div>
  );
}

export default About;

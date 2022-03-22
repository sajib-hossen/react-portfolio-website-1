import React from "react";
import "./Intro.css";
import me from "../../img/man-removebg-preview.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is </h2>
          <h1 className="i-name">Sajib Hossen </h1>
          <div className="i-title">
            <div className="i-tilte-wrapper">
              <div className="i-title-item"> Web Developer </div>
              <div className="i-title-item">React Developer </div>
              <div className="i-title-item">Front Developer </div>
              <div className="i-title-item">Full Stack Developer </div>
              <div className="i-title-item"> MERN Stack Developer </div>
              <div className="i-title-item"> WordPress Developer </div>
              <div className="i-title-item"> Photographer </div>
            </div>
          </div>
          <div className="i-description">
            <p>
              {" "}
              I design and develop services for customers of all sizes
              specializing in creatin stylish , modern websites, web services
              and online stores{" "}
            </p>
          </div>
          <div className="i-btn">
            <button> Hire Me </button>
            <button> Download Resume </button>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

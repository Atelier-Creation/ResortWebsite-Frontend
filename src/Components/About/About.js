import React from 'react';
import './About.css';
import storyImg from '../../Assets/outdoor.png'; 

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <h2 className="aboutLabel">ABOUT</h2>
        <h1 className="aboutTitle">Discover<br />Our Story</h1>

        <div className="about">
          <div className="horizontalLine"></div>
          <div>
          <p className="aboutPara">
            Zenvilla is designed to meet the requirements of modern day travelers.
            We understand each trip is different and have thoughtfully balanced
            the scapes of a peaceful home and a luxury hotel.
          </p>
          <button className="aboutButton">Know More</button>
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="blue-frame"></div>
        <img src={storyImg} alt="Zenvilla" className="about-img" />
      </div>
    </div>
  );
}

export default About;

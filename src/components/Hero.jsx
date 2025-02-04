import React from 'react';
import '../App.css'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Explore Our Gallery</h2>
        <div className="hero-button-container">
  <button className="hero-button">Fiction</button>
  <button className="hero-button">Non-Fiction</button>
  <button className="hero-button">Poetry</button>
  <button className="hero-button">Audio</button>
  <button className="hero-button">Visual Arts</button>
  <button className="hero-button">View All</button>
</div>

      </div>
    </section>
  );
};

export default Hero;


import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">ZOLLA AUSTINE</h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-description">
            I specialize in transforming complex problems into elegant, responsive web designs. 
            My journey as a developer is driven by a relentless passion for clean code and 
            exceptional user experiences. I believe that great design is invisible - it just works, 
            seamlessly connecting users with technology in ways that feel natural and intuitive.
          </p>
          <div className="hero-buttons">
            <a href="#skills" className="btn btn-primary">View My Skills</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <div className="profile-icon">
              <i className="fas fa-code"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

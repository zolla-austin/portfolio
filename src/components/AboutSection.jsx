import React from 'react';
import '../styles/GlobalStyles.css';

const AboutSection = () => {
  return (
    <section className="about reveal" id="about">
      <div className="about-info">
        <div className="img-about">
          <img src="/profile.jpeg" alt="Zolla Austine" />
        </div>
        <div className="info-text">
          <h5>zolla-austine</h5>
          <p>Front-end Developer</p>
        </div>
      </div>
      <h3>ABOUT ME</h3>
      <div className="about-info2">
        <div className="about-text">
          <p>I am a Front-End Developer specializing in building modern, responsive, and high-performance web applications. I work with HTML, CSS, JavaScript, and React to create clean, scalable, and user-friendly interfaces.</p>
          <p>I focus on delivering seamless user experiences through well-structured code, attention to detail, and strong design implementation. My approach emphasizes performance, usability, and consistency across all projects.</p>
        </div>
        <div className="photo-container">
          <img src="/profile.jpeg" alt="Zolla Austine" />
          <span className="tape tape1"></span>
          <span className="tape tape2"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

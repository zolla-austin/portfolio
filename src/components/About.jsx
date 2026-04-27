import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about reveal" id="about">
      <div className="about-info">
        <div className="img-about">
          <img src="images/img.jpg" alt="Profile" />
        </div>
        <div className="info-text">
          <h5>@amine</h5>
          <p>Frontend Developer</p>
        </div>
      </div>
      <h3>ABOUT ME</h3>
      <div className="about-info2">
        <div className="about-text">
          <p>Hi! I'm Amine Hamzaoui, a passionate and creative UI/UX Designer and Frontend Developer <br /> based in Algeria.</p>
          <p>I'm currently a second-year Computer Science student, where I've developed a deep interest in designing intuitive and visually appealing user interfaces that bring ideas to life on the web.</p>
          <p>I'm particularly focused on modern web design, <br /> responsive layouts, and interactive user experiences that blend beauty with functionality.</p>
          <p>Right now, I'm improving my skills in:</p>
          <p><span>#</span>Figma and Adobe XD for UI/UX design</p>
          <p><span>#</span>HTML, CSS, JavaScript, and Tailwind CSS for frontend development</p>
          <p><span>#</span>Creating personal projects and exploring new web technologies to expand my portfolio</p>
        </div>
        <div className="photo-container">
          <img src="images/img.jpg" alt="Profile" />
          <span className="tape tape1"></span>
          <span className="tape tape2"></span>
        </div>
      </div>
    </section>
  );
};

export default About;

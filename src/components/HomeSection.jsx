import React from 'react';
import '../styles/GlobalStyles.css';

const HomeSection = () => {
  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">. </span>Available for freelance work
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm</h1>
            <h2>Zolla Austine</h2>
            <h3>Front-End Developer</h3>
            <div className="info-p">
              <p>I build modern, responsive, and high-performance web applications that deliver seamless user experiences. With expertise in HTML, CSS, JavaScript, and React, I focus on creating clean, scalable, and visually engaging interfaces.</p>
            </div>
            <div className="info-p2">
              <p><i className="fa-solid fa-location-dot"></i> Based in Nigeria Lagos</p>
              <p><i className="fa-solid fa-briefcase"></i> Available Now</p>
            </div>
            <div className="btnn">
              <button className="btn-home1">
                <i className="fa-solid fa-arrow-right"></i> Hire Me
              </button>
              <button className="btn-home2">
                <i className="fa-solid fa-download"></i> Download CV
              </button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li><a href="https://github.com/zolla-austin" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/zolla-austine-9b02a5376?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/zollaaustin?igsh=M3F6ZDlyOHdsYWFx" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://wa.me/2347041793529" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <img src="/profile.jpeg" alt="Zolla Austine" />
      </div>
    </section>
  );
};

export default HomeSection;

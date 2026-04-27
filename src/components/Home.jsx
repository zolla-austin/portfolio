import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">. </span>Available for freelance work
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Amine</h1>
            <h3>Frontend Developer</h3>
            <div className="info-p">
              <p>I create beautiful, functional, and user-centered digital experiences. With</p>
              <p>2+ years of experience in web Development, I bring ideas to life through</p>
              <p>clean code and thoughtful design</p>
            </div>
            <div className="info-p2">
              <p><i className="fas fa-location-dot"></i> Based in Algeria</p>
              <p><i className="fas fa-briefcase"></i> Available Now</p>
            </div>
            <div className="btnn">
              <button className="btn-home1">
                <i className="fas fa-arrow-right"></i> Hire Me
              </button>
              <button className="btn-home2">
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li><a href="#"><i className="fab fa-github"></i></a></li>
                <li><a href="#"><i className="fab fa-discord"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <img src="images/img2.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;

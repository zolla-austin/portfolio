import React, { useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  useEffect(() => {
    // This makes the sections appear
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-root">
      <header>
        <nav className="nav-container">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-card reveal show"> {/* Added 'show' manually to force it visible */}
          <div className="hero-content">
            <span className="badge">AVAILABLE FOR PROJECTS</span>
            <h1>Front-End <span className="text-gradient">Developer</span></h1>
            <p className="hero-desc">
              Building modern, responsive, and user-centered web applications. 
              Focused on performance and clean digital experiences.
            </p>
            <div className="location-tag">
               &#128205; <span>Lagos, Nigeria</span>
            </div>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Hire Me</a>
              <a href="#skills" className="btn-secondary">My Skills</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="orbit-container">
              <div className="orbit-ring">
                <div className="icon-orbit i1">&#128187;</div>
                <div className="icon-orbit i2">&#2699;</div>
                <div className="icon-orbit i3">&#127760;</div>
              </div>
              <div className="orbit-core">CORE</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section reveal show">
        <div className="section-container">
          <div className="photo-wrapper">
            <div className="tape tape-top"></div>
            <img src="/profile.jpeg" alt="Zolla Austine" className="profile-img" />
            <div className="tape tape-bottom"></div>
          </div>
          <div className="about-info">
            <h2 className="section-title">ABOUT ME</h2>
            <p>I approach every project with a problem-solving mindset, ensuring clean code and scalability.</p>
            <p>Based in <strong>Lagos, Nigeria</strong>, I value precision and efficiency.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

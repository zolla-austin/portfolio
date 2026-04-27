import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const [showRealSite, setShowRealSite] = useState(false);

  useEffect(() => {
    const animations = [
      { selector: ".top-tags", class: "from-top", delay: 0 },
      { selector: ".left h1", class: "from-left", delay: 0.3 },
      { selector: ".desc", class: "from-left", delay: 0.6 },
      { selector: ".live-line", class: "from-bottom", delay: 0.9 },
      { selector: ".buttons", class: "zoom-in", delay: 1.2 },
      { selector: ".site-link", class: "from-bottom", delay: 1.5 },
      { selector: ".right", class: "from-right", delay: 0.6 },
      { selector: ".stats", class: "from-bottom", delay: 1.8 },
    ];

    animations.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) {
        el.style.animationDelay = `${item.delay}s`;
        el.classList.add(item.class);
      }
    });

    // Hide intro and show real site
    const timer = setTimeout(() => {
      const introElement = document.getElementById("intro");
      if (introElement) {
        introElement.classList.add("smooth-out");
        setTimeout(() => {
          setShowRealSite(true);
          onComplete();
        }, 1200);
      }
    }, 3800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (showRealSite) return null;

  return (
    <div id="intro" className="intro">
      <div className="main">
        <div className="card">
          {/* TOP TAGS */}
          <div className="top-tags">
            <span className="dot">SYSTEM READY</span>
            <span>PORTFOLIO 2025</span>
            <span>UI LOADING</span>
          </div>
          <div className="content">
            {/* LEFT */}
            <div className="left">
              <h1>
                Welcome to <br />
                my Portfolio <br />
                Website
              </h1>
              <p className="desc">
                Building modern, reliable, and fast digital experiences with a
                focus on clean UI and solid engineering.
              </p>
              <div className="live-line">
                <span>LIVE STATUS</span>
              </div>
              <div className="buttons">
                <div className="btn">
                  <i className="fas fa-code"></i> CODE
                </div>
                <div className="btn">
                  <i className="fas fa-user"></i> PROFILE
                </div>
                <div className="btn">
                  <i className="fab fa-github"></i> SOURCE
                </div>
              </div>
              {/* WEBSITE LINK */}
              <div className="site-link">
                <i className="fas fa-globe"></i>
                www.amine.dev
              </div>
            </div>
            {/* RIGHT */}
            <div className="right">
              <div className="right-head">
                <span>CORE UI</span>
                <span className="online">ONLINE</span>
              </div>
              <div className="orbit-box">
                <div className="orbit">
                  <i className="fas fa-layer-group i1"></i>
                  <i className="fas fa-bolt i2"></i>
                  <i className="fas fa-code i3"></i>
                  <i className="fas fa-wifi i4"></i>
                </div>
                <div className="core">
                  <span>WELCOME</span>
                </div>
              </div>
              <div className="stats">
                <div>
                  <h4>06</h4>
                  <p>Loaded</p>
                </div>
                <div>
                  <h4>12ms</h4>
                  <p>Stable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

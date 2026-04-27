import React, { useEffect } from 'react';
import '../styles/GlobalStyles.css';

const LoadingScreen = ({ onComplete }) => {
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

    // Hide intro and show main site
    const timer = setTimeout(() => {
      const intro = document.getElementById("intro");
      const site = document.getElementById("real-site");
      if (intro) {
        intro.classList.add("smooth-out");
        setTimeout(() => {
          intro.style.display = "none";
          if (site) {
            site.style.display = "block";
          }
          onComplete();
        }, 1200);
      }
    }, 3800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div id="intro">
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
                  <i className="fa-solid fa-code"></i> CODE
                </div>
                <div className="btn">
                  <i className="fa-solid fa-user"></i> PROFILE
                </div>
                <div className="btn">
                  <i className="fa-brands fa-github"></i> SOURCE
                </div>
              </div>

              {/* WEBSITE LINK */}
              <div className="site-link">
                <i className="fa-solid fa-globe"></i>
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
                  <i className="fa-solid fa-layer-group i1"></i>
                  <i className="fa-solid fa-bolt i2"></i>
                  <i className="fa-solid fa-code i3"></i>
                  <i className="fa-solid fa-wifi i4"></i>
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

export default LoadingScreen;

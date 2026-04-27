import React, { useState, useEffect } from 'react';
import '../styles/GlobalStyles.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      const navItems = document.querySelectorAll(".ul-list li");
      navItems.forEach(item => {
        item.classList.remove("active");
        const link = item.querySelector("a");
        if (link && link.getAttribute("href") === `#${current}`) {
          item.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 120,
          behavior: "smooth"
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <header>
      <div className="div-list">
        <ul className="ul-list">
          <li className="active">
            <i className="fa-solid fa-circle-user"></i>
            <a href="#home">Home</a>
          </li>
          <li>
            <i className="fa-regular fa-address-card"></i>
            <a href="#about">About</a>
          </li>
          <li>
            <i className="fa-regular fa-folder-open"></i>
            <a href="#project">Projects</a>
          </li>
          <li>
            <i className="fa-solid fa-code"></i>
            <a href="#service">services</a>
          </li>
          <li>
            <i className="fa-regular fa-envelope"></i>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;

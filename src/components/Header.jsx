import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <div className="div-list">
        <ul className="ul-list">
          <li className={activeSection === 'home' ? 'active' : ''}>
            <i className="fas fa-circle-user"></i>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <i className="far fa-address-card"></i>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          </li>
          <li className={activeSection === 'project' ? 'active' : ''}>
            <i className="far fa-folder-open"></i>
            <a href="#project" onClick={(e) => handleNavClick(e, '#project')}>Projects</a>
          </li>
          <li className={activeSection === 'service' ? 'active' : ''}>
            <i className="fas fa-code"></i>
            <a href="#service" onClick={(e) => handleNavClick(e, '#service')}>Services</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <i className="far fa-envelope"></i>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's build something amazing together</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>zolla.austine@example.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Available for remote work</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="Portfolio">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ZOLLA AUSTINE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

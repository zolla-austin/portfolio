import React from 'react';
import '../styles/GlobalStyles.css';

const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description: "I create responsive, modern websites using the latest technologies and best practices. From concept to deployment, I ensure your website looks great and performs perfectly across all devices.",
      features: ["Responsive Design", "Performance Optimized", "SEO Friendly", "Cross-browser Compatible"]
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerce Solutions",
      description: "Building secure and efficient e-commerce platforms that drive sales and provide excellent shopping experiences for your customers with modern payment integration.",
      features: ["Secure Payments", "Inventory Management", "Analytics", "User-friendly Checkout"]
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description: "Creating mobile-first designs that work seamlessly across all devices and screen sizes, ensuring optimal user experience on smartphones, tablets, and desktops.",
      features: ["Mobile-first Approach", "Adaptive Layouts", "Touch-friendly Interface", "Fast Loading"]
    },
    {
      icon: "fas fa-rocket",
      title: "Performance Optimization",
      description: "Optimizing websites and applications for speed, scalability, and reliability. I ensure your digital products perform at their best under any conditions.",
      features: ["Speed Optimization", "Lazy Loading", "Code Minification", "CDN Integration"]
    },
    {
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description: "Designing intuitive and beautiful user interfaces that provide exceptional user experiences. I focus on usability, accessibility, and visual appeal.",
      features: ["User-centered Design", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: "fas fa-wrench",
      title: "Website Maintenance",
      description: "Providing ongoing support and maintenance to keep your website running smoothly, secure, and up-to-date with the latest technologies and security standards.",
      features: ["Regular Updates", "Security Monitoring", "Bug Fixes", "Performance Tracking"]
    }
  ];

  return (
    <section id="service" className="section services reveal">
      <p>SERVICES</p>
      <h1>OUR Features & Services</h1>
      <hr />
      <div className="container">
        <div className="services-content">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx}>{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

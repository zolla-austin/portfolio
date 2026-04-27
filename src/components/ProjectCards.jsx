import React from 'react';
import '../styles/GlobalStyles.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Modern online store with product filtering, cart, and payment system.",
      image: "/featured project.jpeg",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio to showcase my design and coding projects.",
      image: "/featured-project.jpeg",
      skills: ["HTML", "CSS", "Bootstrap"]
    },
    {
      id: 3,
      title: "Dashboard (SaaS Style)",
      description: "Modern analytics dashboard with real-time data visualization and responsive design.",
      image: "/featured_project.jpeg",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 4,
      title: "Content-Focused Landing Page (Design Heavy)",
      description: "Visually stunning landing page with emphasis on typography, layout, and user engagement.",
      image: "/profiles.jpeg",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section className="project reveal" id="project">
      <p>PROJECTS</p>
      <h1>Featured Work</h1>
      <hr />
      <div className="info-pro">
        <p>A selection of projects showcasing the development of modern, responsive, and high-performance web applications. Each project reflects a focus on clean code, intuitive user interfaces, and practical solutions that deliver real value.</p>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills">
              {project.skills.map((skill, index) => (
                <a key={index} href="#">{skill}</a>
              ))}
            </div>
            <div className="btns">
              <a href="#" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

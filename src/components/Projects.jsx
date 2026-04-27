import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart functionality and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      image: "project2"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
      image: "project3"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blogging platform with markdown support and user authentication.",
      technologies: ["React", "Firebase", "Tailwind CSS", "JWT"],
      image: "project4"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A professional portfolio website with smooth animations and responsive design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      image: "project5"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "A real-time chat application with private messaging and group chat features.",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      image: "project6"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button className="project-btn">View Project</button>
                  <button className="project-btn project-btn-secondary">GitHub</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { projectsData } from '../data/projectsData';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="project reveal" id="project">
      <p>PROJECTS</p>
      <h1>Featured Work</h1>
      <hr />
      <div className="info-pro">
        <p>A showcase of my recent projects demonstrating expertise in full-stack</p>
        <p>development, modern frameworks, and creative problem-solving.</p>
      </div>
      <div className="projects-container">
        {projectsData.map((project) => (
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
              <a href={project.githubUrl} className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href={project.liveUrl} className="btn">
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

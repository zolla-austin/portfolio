import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: 'fab fa-html5',
      level: 'Expert',
      description: 'Semantic markup, accessibility, modern HTML5 features'
    },
    {
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      level: 'Expert',
      description: 'Responsive design, animations, CSS Grid, Flexbox'
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js',
      level: 'Advanced',
      description: 'ES6+, async programming, DOM manipulation, modern frameworks'
    },
    {
      name: 'React',
      icon: 'fab fa-react',
      level: 'Advanced',
      description: 'Components, hooks, state management, React ecosystem'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I specialize in</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-container">
                <i className={`${skill.icon} skill-icon`}></i>
                <div className="skill-level">{skill.level}</div>
              </div>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-bar">
                  <div className="skill-progress" style={{width: skill.level === 'Expert' ? '95%' : '85%'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

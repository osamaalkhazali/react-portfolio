import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/images/html.png' },
    { name: 'CSS', icon: '/images/css.webp' },
    { name: 'JavaScript', icon: '/images/js.webp' },
    { name: 'Next.js', icon: '/images/nextjs-icon.webp' },
    { name: 'React', icon: '/images/react-logo.png' },
    { name: 'Node.js', icon: '/images/nodejs-png-nodejs-icon-png-50-px-1600.png' },
    { name: 'PHP', icon: '/images/php_PNG43.png' },
    { name: 'MySQL', icon: '/images/my.png' },
    { name: 'Laravel', icon: '/images/laravel.png' }
  ];

  return (
    <section id="skills" className="skills-portfolio section">
      <div className="skills-item large">
        <h2>Skills</h2>
      </div>
      {skills.map((skill, index) => (
        <div className="skills-item" key={index}>
          <img 
            src={skill.icon} 
            alt={`${skill.name} Icon`} 
            className="icon" 
          />
          <h3>{skill.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default Skills;
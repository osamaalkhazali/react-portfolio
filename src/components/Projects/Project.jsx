import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={project.title} />
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Project;
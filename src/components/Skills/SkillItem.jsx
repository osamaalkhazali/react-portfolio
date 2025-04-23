import React from 'react';
import PropTypes from 'prop-types';
import './Skills.css';

const SkillItem = ({ skill }) => {
  return (
    <div className="skills-item">
      <img src={`${process.env.PUBLIC_URL}/${skill.icon}`} alt={`${skill.name} Icon`} className="icon" />
      <h3>{skill.name}</h3>
    </div>
  );
};

SkillItem.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillItem;
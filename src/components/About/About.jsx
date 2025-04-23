import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="top">
          <h2>About Me</h2>
          <p className="about-text">
            I'm a passionate Full Stack Web Developer with expertise in creating responsive and 
            user-friendly web applications. With a strong foundation in both frontend and backend 
            technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>
        
        <div className="cards">
          <div className="about-fun-facts">
            <div className="fact-card">
              <h3>Experience</h3>
              <p>5+ years of web development experience, working with various technologies and frameworks.</p>
            </div>
            <div className="fact-card">
              <h3>Education</h3>
              <p>Bachelor's degree in Computer Science with focus on web technologies.</p>
            </div>
            <div className="fact-card">
              <h3>Interests</h3>
              <p>When not coding, I enjoy hiking, reading tech blogs, and exploring new coffee shops.</p>
            </div>
          </div>
          
          <div className="about-goals">
            <h3>My Goals</h3>
            <p>To continue learning and mastering new technologies, contribute to open source, and build applications that make a positive difference.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
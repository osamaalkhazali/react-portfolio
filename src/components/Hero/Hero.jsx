import React from 'react';
import './Hero.css';
// Import profile image directly for better handling
import profileImage from '../../assets/images/osama3.png';

const Hero = () => {
  return (
    <div className="bg-hero">
      <div className="container">
        <main className="hero section">
          {/* Removed the header since it's already handled by the Header component */}
          <div className="right">
            <h1>Osama Alkhazali</h1>
            <p>A Full Stack Web Developer passionate about creating modern and responsive web applications.</p>
            <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Hire Me</button>
            <div className="table">
              <a href="#skills">
                <img className="notes" src="/images/notes.png" alt="" />
              </a>
              <img 
                className="tableIMG" 
                useMap="#table" 
                src="/images/table.png" 
                width="95%" 
                alt="" 
              />
              <map name="table">
                <area target="" alt="Projects" title="Projects" href="#projects" coords="269,182,760,12" shape="rect" />
                <area target="" alt="Projects" title="Projects" href="#projects" coords="269,269,558,185" shape="rect" />
                <area target="" alt="Contact" title="Contact" href="#contact" coords="563,267,757,185" shape="rect" />
              </map>
            </div>
          </div>
          <div className="left">
            <img src={profileImage} width="100%" alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
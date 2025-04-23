import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import MainLayout from './layouts/MainLayout';
// import './App.css';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
}

export default App;
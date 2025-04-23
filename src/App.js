import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <div className="sections-container">
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="skills"><Skills /></section>
          <section id="contact"><Contact /></section>
        </div>
        
        {/* Keep routes for URL navigation */}
        <Routes>
          <Route path="/" element={null} />
          <Route path="/about" element={null} />
          <Route path="/projects" element={null} />
          <Route path="/skills" element={null} />
          <Route path="/contact" element={null} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
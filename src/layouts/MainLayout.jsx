import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  // Scroll to section when route changes
  React.useEffect(() => {
    const sectionId = location.pathname.replace('/', '') || 'hero';
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
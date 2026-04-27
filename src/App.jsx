import React, { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProjectCards from './components/ProjectCards';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';
import './styles/GlobalStyles.css';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    setShowMainContent(true);
  };

  // Only run scroll reveal after main content is shown
  const MainContent = () => {
    useScrollReveal();
    
    return (
      <>
        <Navigation />
        <HomeSection />
        <AboutSection />
        <ProjectCards />
        <ServicesSection />
        <ContactForm />
      </>
    );
  };

  return (
    <div className="App">
      <LoadingScreen onComplete={handleIntroComplete} />
      
      {showMainContent && (
        <div id="real-site" style={{ display: 'block' }}>
          <MainContent />
        </div>
      )}
    </div>
  );
}

export default App;

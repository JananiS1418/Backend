import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css'; // Global styles including Tailwind

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('intro');
  const [completedSections, setCompletedSections] = useState([]);

  // Theme Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Sidebar Logic
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Learning Progress Logic
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('completedSections')) || [];
      setCompletedSections(saved);
    } catch (e) {
      setCompletedSections([]);
    }
  }, []);

  const toggleCompletion = (sectionId) => {
    let newCompleted;
    if (completedSections.includes(sectionId)) {
      newCompleted = completedSections.filter(id => id !== sectionId);
    } else {
      newCompleted = [...completedSections, sectionId];
    }
    setCompletedSections(newCompleted);
    localStorage.setItem('completedSections', JSON.stringify(newCompleted));
  };


  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjustment for header
        if (window.scrollY >= (sectionTop - 150)) {
          current = section.getAttribute('id');
        }
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }

      // Back to top button visibility
      const backToTop = document.getElementById('backToTop');
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);


  return (
    <div className="app-container">
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        id="mobileMenuBtn"
        onClick={toggleSidebar}
        style={{ display: 'none' }} // Hidden by default, shown via CSS media query
      >
        <i className={`fas fa-${sidebarOpen ? 'times' : 'bars'}`}></i>
      </button>

      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="main-container">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
        />

        <MainContent
          sidebarOpen={sidebarOpen}
          activeSection={activeSection}
          completedSections={completedSections}
          toggleCompletion={toggleCompletion}
        />
      </div>
    </div>
  );
}

export default App;
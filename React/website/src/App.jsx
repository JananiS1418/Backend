import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css'; // Global styles including Tailwind

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900); // Default based on screen size
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

  // Responsive Sidebar: Auto-close on resize if small
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      {/* Mobile Menu Button - Shown via CSS on mobile */}
      <button
        className="mobile-menu-btn"
        id="mobileMenuBtn"
        onClick={toggleSidebar}
        style={{}} // Style handled by CSS
      >
        <i className={`fas fa-${sidebarOpen ? 'times' : 'bars'}`}></i>
      </button>

      {/* Mobile Backdrop */}
      {sidebarOpen && window.innerWidth <= 900 && (
        <div
          className="sidebar-backdrop"
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 899,
          }}
        />
      )}

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
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import LoginPage from './components/LoginPage';
import './index.css'; // Global styles including Tailwind

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900); // Default based on screen size
  const [activeSection, setActiveSection] = useState('intro');
  const [user, setUser] = useState(null); // User State (null = logged out)

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


  if (!user) {
    return <LoginPage onLogin={(userData) => setUser(userData)} />;
  }

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

      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} user={user} />

      <div className="main-container">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
        />

        <MainContent
          sidebarOpen={sidebarOpen}
          activeSection={activeSection}
        />
      </div>
    </div>
  );
}

export default App;
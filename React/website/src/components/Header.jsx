import React, { useEffect, useState } from 'react';

const Header = ({ isDarkMode, toggleTheme }) => {
    return (
        <header className="main-header">
            <div className="header-content">
                <div className="logo-container">
                    <a href="#" className="logo">
                        <div className="logo-icon">
                            <i className="fab fa-js"></i>
                        </div>
                        <div>
                            <h1>JS<span className="highlight">Ultimate</span></h1>
                            <p>Master the Web</p>
                        </div>
                    </a>
                </div>

                <div className="header-controls">
                    <div className="theme-toggle">
                        <span id="themeLabel">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                id="themeToggle"
                                checked={isDarkMode}
                                onChange={toggleTheme}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

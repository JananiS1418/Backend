import React, { useEffect, useState } from 'react';

const Header = ({ isDarkMode, toggleTheme, user }) => {
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
                    {user && (
                        <div style={{ marginRight: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                                Hi, {user.name}
                            </span>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: 'var(--accent-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '0.9rem'
                            }}>
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    )}
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

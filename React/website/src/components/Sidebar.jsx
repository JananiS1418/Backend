import React, { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, toggleSidebar, activeSection }) => {
    const [completedSections, setCompletedSections] = useState([]);

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('completedSections')) || [];
            setCompletedSections(saved);
        } catch (e) {
            setCompletedSections([]);
        }
    }, []);

    const progressPercentage = Math.round((completedSections.length / 15) * 100); // Assuming 15 total sections for now

    return (
        <nav className={`sidebar ${!isOpen ? 'collapsed' : 'active'}`} id="sidebar">
            <div className="sidebar-header">
                <h3>Table of Contents</h3>
                <button className="collapse-btn" id="collapseBtn" onClick={toggleSidebar}>
                    <i className={`fas fa-chevron-${!isOpen ? 'right' : 'left'}`}></i>
                </button>
            </div>

            <div className={`nav-group ${['intro', 'variables', 'datatypes', 'operators', 'conversions', 'hoisting'].includes(activeSection) ? 'active' : ''}`}>
                <div className="nav-header">
                    <i className="fas fa-rocket"></i>
                    <span>01. Fundamentals</span>
                </div>
                <a href="#intro" className={`nav-link ${activeSection === 'intro' ? 'active' : ''}`}>
                    <i className="fas fa-play-circle"></i>
                    <span>Introduction</span>
                </a>
                <a href="#variables" className={`nav-link ${activeSection === 'variables' ? 'active' : ''}`}>
                    <i className="fas fa-box"></i>
                    <span>Variables</span>
                </a>
                <a href="#datatypes" className={`nav-link ${activeSection === 'datatypes' ? 'active' : ''}`}>
                    <i className="fas fa-dna"></i>
                    <span>Data Types</span>
                </a>
                <a href="#operators" className={`nav-link ${activeSection === 'operators' ? 'active' : ''}`}>
                    <i className="fas fa-calculator"></i>
                    <span>Operators</span>
                </a>
                <a href="#conversions" className={`nav-link ${activeSection === 'conversions' ? 'active' : ''}`}>
                    <i className="fas fa-exchange-alt"></i>
                    <span>Type Conversions</span>
                </a>
                <a href="#hoisting" className={`nav-link ${activeSection === 'hoisting' ? 'active' : ''}`}>
                    <i className="fas fa-arrow-up"></i>
                    <span>Hoisting</span>
                </a>
            </div>

            <div className={`nav-group ${['conditions', 'loops', 'functions'].includes(activeSection) ? 'active' : ''}`}>
                <div className="nav-header">
                    <i className="fas fa-project-diagram"></i>
                    <span>02. Logic & Control</span>
                </div>
                <a href="#conditions" className={`nav-link ${activeSection === 'conditions' ? 'active' : ''}`}>
                    <i className="fas fa-code-branch"></i>
                    <span>Conditions</span>
                </a>
                <a href="#loops" className={`nav-link ${activeSection === 'loops' ? 'active' : ''}`}>
                    <i className="fas fa-redo"></i>
                    <span>Loops</span>
                </a>
                <a href="#functions" className={`nav-link ${activeSection === 'functions' ? 'active' : ''}`}>
                    <i className="fas fa-cogs"></i>
                    <span>Functions</span>
                </a>
            </div>

            <div className={`nav-group ${['arrays', 'strings', 'objects', 'classes', 'mapsets', 'json'].includes(activeSection) ? 'active' : ''}`}>
                <div className="nav-header">
                    <i className="fas fa-layer-group"></i>
                    <span>03. Data Structures</span>
                </div>
                <a href="#arrays" className={`nav-link ${activeSection === 'arrays' ? 'active' : ''}`}>
                    <i className="fas fa-list"></i>
                    <span>Array Methods</span>
                </a>
                <a href="#strings" className={`nav-link ${activeSection === 'strings' ? 'active' : ''}`}>
                    <i className="fas fa-font"></i>
                    <span>String Methods</span>
                </a>
                <a href="#objects" className={`nav-link ${activeSection === 'objects' ? 'active' : ''}`}>
                    <i className="fas fa-cube"></i>
                    <span>Objects</span>
                </a>
                <a href="#classes" className={`nav-link ${activeSection === 'classes' ? 'active' : ''}`}>
                    <i className="fas fa-shapes"></i>
                    <span>Classes (OOP)</span>
                </a>
                <a href="#mapsets" className={`nav-link ${activeSection === 'mapsets' ? 'active' : ''}`}>
                    <i className="fas fa-map"></i>
                    <span>Map & Set</span>
                </a>
                <a href="#json" className={`nav-link ${activeSection === 'json' ? 'active' : ''}`}>
                    <i className="fas fa-code"></i>
                    <span>JSON</span>
                </a>
            </div>

            <div className={`nav-group ${['dom', 'events', 'storage', 'apis', 'cookies'].includes(activeSection) ? 'active' : ''}`}>
                <div className="nav-header">
                    <i className="fas fa-globe"></i>
                    <span>04. The Web (DOM)</span>
                </div>
                <a href="#dom" className={`nav-link ${activeSection === 'dom' ? 'active' : ''}`}>
                    <i className="fas fa-code"></i>
                    <span>DOM Deep Dive</span>
                </a>
                <a href="#events" className={`nav-link ${activeSection === 'events' ? 'active' : ''}`}>
                    <i className="fas fa-mouse-pointer"></i>
                    <span>Events</span>
                </a>
                <a href="#storage" className={`nav-link ${activeSection === 'storage' ? 'active' : ''}`}>
                    <i className="fas fa-database"></i>
                    <span>Web Storage</span>
                </a>
                <a href="#apis" className={`nav-link ${activeSection === 'apis' ? 'active' : ''}`}>
                    <i className="fas fa-plug"></i>
                    <span>APIs</span>
                </a>
                <a href="#cookies" className={`nav-link ${activeSection === 'cookies' ? 'active' : ''}`}>
                    <i className="fas fa-cookie"></i>
                    <span>Cookies</span>
                </a>
            </div>

            <div className={`nav-group ${['es6', 'async', 'fetch', 'modules', 'iterators', 'proxies'].includes(activeSection) ? 'active' : ''}`}>
                <div className="nav-header">
                    <i className="fas fa-bolt"></i>
                    <span>05. Advanced ES6+</span>
                </div>
                <a href="#es6" className={`nav-link ${activeSection === 'es6' ? 'active' : ''}`}>
                    <i className="fas fa-star"></i>
                    <span>ES6 Features</span>
                </a>
                <a href="#async" className={`nav-link ${activeSection === 'async' ? 'active' : ''}`}>
                    <i className="fas fa-clock"></i>
                    <span>Async/Await</span>
                </a>
                <a href="#fetch" className={`nav-link ${activeSection === 'fetch' ? 'active' : ''}`}>
                    <i className="fas fa-wifi"></i>
                    <span>Fetch API</span>
                </a>
                <a href="#modules" className={`nav-link ${activeSection === 'modules' ? 'active' : ''}`}>
                    <i className="fas fa-puzzle-piece"></i>
                    <span>Modules</span>
                </a>
                <a href="#iterators" className={`nav-link ${activeSection === 'iterators' ? 'active' : ''}`}>
                    <i className="fas fa-sync-alt"></i>
                    <span>Iterators</span>
                </a>
                <a href="#proxies" className={`nav-link ${activeSection === 'proxies' ? 'active' : ''}`}>
                    <i className="fas fa-mask"></i>
                    <span>Proxies</span>
                </a>
            </div>

            <div className="sidebar-footer">
                <div className="progress-container">
                    <div className="progress-label">Learning Progress</div>
                    <div className="progress-bar">
                        <div className="progress-fill" id="learningProgress" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <div className="progress-text">{progressPercentage}% Complete</div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;

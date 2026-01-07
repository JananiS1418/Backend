import React from 'react';
import Footer from './Footer';
import Fundamentals from './sections/Fundamentals';
import LogicControl from './sections/LogicControl';
import DataStructures from './sections/DataStructures';
import WebDOM from './sections/WebDOM';
import Advanced from './sections/Advanced';
import Practice from './sections/Practice';

const MainContent = ({ sidebarOpen, activeSection, completedSections, toggleCompletion }) => {
    const isCompleted = completedSections.includes(activeSection);

    // Helper to get readable title from section ID
    const getSectionTitle = (id) => {
        // This is a simple mapping, could be more robust
        const titles = {
            'intro': 'Introduction',
            'variables': 'Variables',
            'datatypes': 'Data Types',
            'operators': 'Operators',
            'conversions': 'Conversions',
            'hoisting': 'Hoisting',
            'conditions': 'Conditions',
            'loops': 'Loops',
            'functions': 'Functions',
            'arrays': 'Arrays',
            'strings': 'Strings',
            'objects': 'Objects',
            'classes': 'Classes',
            'mapsets': 'Map & Set',
            'json': 'JSON',
            'dom': 'DOM',
            'events': 'Events',
            'storage': 'Storage',
            'apis': 'APIs',
            'cookies': 'Cookies',
            'es6': 'ES6',
            'async': 'Async/Await',
            'fetch': 'Fetch API',
            'modules': 'Modules',
            'iterators': 'Iterators',
            'proxies': 'Proxies'
        };
        return titles[id] || 'Introduction';
    };

    return (
        <main className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
            <div className="content-progress">
                <div className="breadcrumb">
                    <i className="fas fa-book-open"></i>
                    <span className="separator">/</span>
                    <span id="currentSection">Fundamentals</span>
                    <span className="separator">/</span>
                    <span id="currentTopic">{getSectionTitle(activeSection)}</span>
                </div>
                <div
                    className="completion-badge"
                    onClick={() => toggleCompletion(activeSection)}
                    style={{
                        backgroundColor: isCompleted ? 'var(--accent-success)' : '',
                        color: isCompleted ? 'white' : ''
                    }}
                >
                    <i className={`${isCompleted ? 'fas' : 'far'} fa-check-circle`}></i>
                    <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
                </div>
            </div>

            <Fundamentals />
            <LogicControl />
            <DataStructures />
            <WebDOM />
            <Advanced />
            <Practice />

            <Footer />
        </main>
    );
};

export default MainContent;

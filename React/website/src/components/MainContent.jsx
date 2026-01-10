import React from 'react';
import Footer from './Footer';
import Fundamentals from './sections/Fundamentals';
import LogicControl from './sections/LogicControl';
import DataStructures from './sections/DataStructures';
import WebDOM from './sections/WebDOM';
import Advanced from './sections/Advanced';
import Practice from './sections/Practice';
import Conclusion from './sections/Conclusion';

const MainContent = ({ sidebarOpen, activeSection }) => {

    // Helper to get readable title from section ID
    const getSectionTitle = (id) => {
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
            'arrays': 'Array Methods',
            'strings': 'String Methods',
            'objects': 'Objects',
            'classes': 'Classes',
            'json': 'JSON',
            'dom': 'DOM Deep Dive',
            'events': 'Events',
            'storage': 'Web Storage',
            'apis': 'APIs',
            'es6': 'ES6 Features',
            'callbacks': 'Callback Functions',
            'promises': 'Promises',
            'async': 'Async/Await',
            'fetch': 'Fetch API',
            'modules': 'Modules',
            'conclusion': 'Conclusion'
        };
        return titles[id] || 'Javascript';
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
            </div>

            <Fundamentals />
            <LogicControl />
            <DataStructures />
            <WebDOM />
            <Advanced />
            <Conclusion />
            <Practice />

            <Footer />
        </main>
    );
};

export default MainContent;

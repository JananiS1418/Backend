import React from 'react';

const SectionHeader = ({ title, icon, difficulty, timeEstimate }) => {
    return (
        <div className="section-header">
            <h1 className="section-title">
                <span className="icon"><i className={icon}></i></span>
                {title}
            </h1>
            <div className="section-meta">
                <span className={`difficulty ${difficulty.toLowerCase()}`}>{difficulty}</span>
                <span className="time-estimate"><i className="far fa-clock"></i> {timeEstimate}</span>
            </div>
        </div>
    );
};

export default SectionHeader;

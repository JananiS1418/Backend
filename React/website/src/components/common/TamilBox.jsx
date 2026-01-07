import React from 'react';

const TamilBox = ({ children, title = 'Tamil Explanation', icon = 'fas fa-language' }) => {
    return (
        <div className="tamil-box">
            <div className="analogy-label">
                <i className={icon}></i>
                <span>{title}</span>
            </div>
            <div className="tamil-text">
                {children}
            </div>
        </div>
    );
};

export default TamilBox;

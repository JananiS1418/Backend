import React from 'react';

const GlassCard = ({ children, className = '', highlight = false }) => {
    return (
        <div className={`glass-card ${highlight ? 'highlight' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;

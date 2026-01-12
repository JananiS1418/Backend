import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="footer-content">
                    <div className="footer-brand">
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
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 JS Ultimate Manual. Built with <i className="fas fa-heart"
                        style={{ color: 'var(--accent-secondary)' }}></i> for developers.</p>
                </div>
            </footer>
            {/* Back to Top Button */}
            <button
                id="backToTop"
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
};

export default Footer;

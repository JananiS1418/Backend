import React from 'react';
import GlassCard from '../common/GlassCard';
import SectionHeader from '../common/SectionHeader';

const Conclusion = () => {
    return (
        <section id="conclusion" className="content-section">
            <SectionHeader title="Conclusion & Next Steps" icon="fas fa-flag-checkered" difficulty="All Levels" timeEstimate="Lifetime Learning" />

            <GlassCard className="highlight-card" style={{ marginBottom: '3rem', padding: '3rem 2rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <i className="fas fa-trophy" style={{ fontSize: '4rem', color: '#fbbf24', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))' }}></i>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Congratulations!</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        You've journeyed through the core concepts of JavaScript! 🚀
                    </p>
                </div>
            </GlassCard>

            <div className="grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
                {/* Learned Section - Green Styling */}
                <div className="info-card" style={{ background: 'rgba(16, 185, 129, 0.05)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header" style={{ marginBottom: '1.5rem' }}>
                        <i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '1.5rem' }}></i>
                        <h3 style={{ color: '#10b981', fontSize: '1.4rem', margin: 0 }}>What You Have Learned</h3>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2', fontSize: '1.05rem' }}>
                        <li><strong>Fundamentals:</strong> Variables, Data Types, Operators.</li>
                        <li><strong>Logic Control:</strong> Loops, Conditions, Functions.</li>
                        <li><strong>Data Structures:</strong> Arrays, Strings, Objects.</li>
                        <li><strong>Web & DOM:</strong> Manipulating HTML, Events.</li>
                        <li><strong>Advanced ES6+:</strong> Promises, Async/Await, Modules.</li>
                    </ul>
                </div>

                {/* Next Steps - Purple Styling */}
                <div className="info-card" style={{ background: 'rgba(99, 102, 241, 0.05)', borderLeft: '4px solid #6366f1' }}>
                    <div className="info-card-header" style={{ marginBottom: '1.5rem' }}>
                        <i className="fas fa-rocket" style={{ color: '#6366f1', fontSize: '1.5rem' }}></i>
                        <h3 style={{ color: '#6366f1', fontSize: '1.4rem', margin: 0 }}>What's Next?</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '1rem', borderRadius: '50%', color: '#6366f1' }}><i className="fab fa-react fa-lg"></i></div>
                            <div>
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem' }}>Learn Frameworks</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>Master React, Vue, or Angular.</p>
                            </div>
                        </div>
                        <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: '#10b981' }}><i className="fab fa-node fa-lg"></i></div>
                            <div>
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem' }}>Backend Development</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>Explore Node.js and Databases.</p>
                            </div>
                        </div>
                        <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '1rem', borderRadius: '50%', color: '#ec4899' }}><i className="fas fa-project-diagram fa-lg"></i></div>
                            <div>
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.2rem' }}>Build Projects</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>Apply knowledge in real apps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Thought - Blue Styling */}
            <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(59, 130, 246, 0.05)', borderLeft: '4px solid #3b82f6', textAlign: 'center' }}>
                <div className="info-card-header" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
                    <i className="fas fa-quote-left" style={{ color: '#3b82f6', fontSize: '1.8rem' }}></i>
                </div>
                <h3 style={{ color: '#3b82f6', marginBottom: '1rem' }}>Final Thought</h3>
                <p style={{ fontStyle: 'italic', fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                    "Programming isn't about what you know; it's about what you can figure out."
                </p>
            </div>


        </section>
    );
};

export default Conclusion;

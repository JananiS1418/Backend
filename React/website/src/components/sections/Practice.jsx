import React, { useState } from 'react';

const Practice = () => {
    const [userCode, setUserCode] = useState('// Swap variables a and b\nlet a = 5;\nlet b = 10;\n\n// Your code here\n\n\nconsole.log("a:", a, "b:", b);');
    const [result, setResult] = useState(null);

    const checkSolution = () => {
        try {
            // Test the code
            // We'll wrap execution to capture correct swap
            let checkFunc = new Function(`
                let a = 5;
                let b = 10;
                let console = { log: () => {} }; // Mock console
                
                ${userCode}
                
                // Return true if swapped correctly
                return (a === 10 && b === 5);
            `);

            const isCorrect = checkFunc();

            if (isCorrect) {
                setResult({
                    success: true,
                    message: '🎉 Correct! Well done!',
                    solution: null // Hide solution on success unless requested? JS logic didn't specify
                });
            } else {
                setResult({
                    success: false,
                    message: '❌ Not quite right. Try again!',
                    solution: `// Solution 1: Using a temporary variable
let temp = a;
a = b;
b = temp;

// Solution 2: Using destructuring
[a, b] = [b, a];`
                });
            }

        } catch (error) {
            setResult({
                success: false,
                message: `Error: ${error.message}`
            });
        }
    };

    return (
        <section className="practice-section">
            <div className="practice-header">
                <h2>
                    <span className="icon"><i className="fas fa-dumbbell"></i></span>
                    Practice Area
                </h2>
                <p>Test your knowledge with these coding exercises.</p>
            </div>

            <div className="exercise-container">
                <div className="exercise">
                    <h3>Variable Swapping</h3>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        Write code to swap the values of variables <code>a</code> and <code>b</code>.
                        Initially <code>a = 5</code> and <code>b = 10</code>. After your code runs, <code>a</code> should be 10 and <code>b</code> should be 5.
                    </p>

                    <div className="code-editor">
                        <textarea
                            className="code-input"
                            value={userCode}
                            onChange={(e) => setUserCode(e.target.value)}
                            spellCheck="false"
                        ></textarea>
                    </div>

                    <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="check-btn" onClick={checkSolution}>
                            <i className="fas fa-play"></i> Check Solution
                        </button>
                    </div>

                    {result && (
                        <div className="exercise-result" style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            borderRadius: '8px',
                            backgroundColor: result.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                            border: `1px solid ${result.success ? 'var(--accent-success)' : 'var(--accent-danger)'}`
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <i className={`fas ${result.success ? 'fa-check-circle' : 'fa-times-circle'}`}
                                    style={{ color: result.success ? 'var(--accent-success)' : 'var(--accent-danger)' }}></i>
                                <strong>{result.message}</strong>
                            </div>
                            {!result.success && result.solution && (
                                <details style={{ marginTop: '0.5rem' }}>
                                    <summary style={{ cursor: 'pointer', color: 'var(--accent-primary)', fontSize: '0.875rem' }}>
                                        Show solution
                                    </summary>
                                    <pre style={{ marginTop: '0.5rem', padding: '0.5rem', background: 'var(--bg-primary)', borderRadius: '4px', fontSize: '0.75rem' }}>
                                        {result.solution}
                                    </pre>
                                </details>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(99, 102, 241, 0.1)', borderLeft: '4px solid #6366f1' }}>
                <div className="info-card-header">
                    <i className="fas fa-brain" style={{ color: '#6366f1' }}></i>
                    <h3 style={{ color: '#6366f1' }}>Why Practice Matters?</h3>
                </div>
                <p>
                    Reading code is like watching someone exercise. Writing code is like doing the exercise yourself.
                    You only build the "muscle memory" by typing it out and solving problems!
                </p>
            </div>
        </section >
    );
};

export default Practice;

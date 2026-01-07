import React, { useState } from 'react';

const CodePlayground = ({ initialCode, explanation }) => {
    const [output, setOutput] = useState([]);
    const [error, setError] = useState(null);

    const runCode = () => {
        setOutput([]);
        setError(null);

        try {
            // Capture console.log
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog(...args); // Optional: keep logging to browser console
            };

            // Execute code
            // eslint-disable-next-line no-eval
            eval(initialCode);

            // Restore console.log
            console.log = originalLog;

            setOutput(logs);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="interactive-box">
            <div className="code-playground">
                <div className="editor-header">
                    <button className="run-btn" onClick={runCode}>
                        <i className="fas fa-play"></i> Run Code
                    </button>
                </div>
                <div className="editor-content">
                    {initialCode}
                </div>
                {(output.length > 0 || error) && (
                    <div className="output-display">
                        <div className="output-header">Output:</div>
                        <div className="output-content">
                            {output.map((line, i) => (
                                <div key={i} style={{ marginBottom: '0.5rem' }}>{line}</div>
                            ))}
                            {error && (
                                <div style={{ color: 'var(--accent-danger)' }}>
                                    <strong>Error:</strong> {error}
                                </div>
                            )}
                            {explanation && output.length > 0 && !error && (
                                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px' }}>
                                    <strong>Explanation:</strong> {explanation}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CodePlayground;

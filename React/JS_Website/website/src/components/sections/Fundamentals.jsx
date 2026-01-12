import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';
import CodePlayground from '../common/CodePlayground';


const Fundamentals = () => {
    // State for Type Checker
    const [typeInput, setTypeInput] = useState('');
    const [typeResult, setTypeResult] = useState('');

    const checkType = () => {
        const inputValue = typeInput.trim();
        if (!inputValue) {
            setTypeResult('<span style="color: var(--accent-warning)">Please enter a value</span>');
            return;
        }

        try {
            let value;
            if (inputValue === 'null') value = null;
            else if (inputValue === 'undefined') value = undefined;
            else if (inputValue === 'true') value = true;
            else if (inputValue === 'false') value = false;
            else if (!isNaN(inputValue) && inputValue !== '') {
                value = Number(inputValue);
                if (isNaN(value)) value = inputValue;
            } else if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
                try { value = JSON.parse(inputValue); } catch { value = inputValue; }
            } else if (inputValue.startsWith('{') && inputValue.endsWith('}')) {
                try { value = JSON.parse(inputValue); } catch { value = inputValue; }
            } else {
                if ((inputValue.startsWith("'") && inputValue.endsWith("'")) ||
                    (inputValue.startsWith('"') && inputValue.endsWith('"'))) {
                    value = inputValue.slice(1, -1);
                } else {
                    value = inputValue;
                }
            }

            let type = typeof value;
            if (value === null) type = "null (object bug)";
            if (Array.isArray(value)) type = "array (object)";

            setTypeResult(`<span style="color: var(--accent-success)">${type}</span> : <code style="font-size: 0.9em">${JSON.stringify(value)}</code>`);
        } catch (e) {
            setTypeResult('Error parsing value');
        }
    };

    return (
        <>
            {/* INTRO */}
            <section id="intro" className="content-section">
                <SectionHeader title="Introduction to JavaScript" icon="fas fa-rocket" difficulty="Beginner" timeEstimate="5 min" />

                <p className="desc">
                    JavaScript (JS) is a <strong>high-level, interpreted programming language</strong> mainly used to create <strong>interactive web pages</strong>.
                    It allows websites to respond to user actions like clicks, typing, scrolling, etc.
                </p>

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-history" style={{ color: '#f59e0b' }}></i> History</h3>
                        </div>
                        <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Year:</strong> 1995</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Created by:</strong> Brendan Eich (Netscape)</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Evolution:</strong> Mocha &rarr; LiveScript &rarr; JavaScript</li>
                        </ul>
                        <div className="card-footer">
                            <span className="tip"><i className="fas fa-info-circle"></i> Not related to Java</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-book" style={{ color: '#10b981' }}></i> ECMAScript (ES)</h3>
                        </div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Standard specification for JavaScript.</p>
                        <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>ES6 (2015):</strong> Modern JS (let, const)</li>
                            <li><strong>Status:</strong> We mostly use ES6+</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem' }}>
                    <div className="info-card-header">
                        <i className="fas fa-edit"></i>
                        <h3>Text Editors</h3>
                    </div>
                    <p>
                        A text editor is software to write/edit code. <strong>Visual Studio Code (VS Code)</strong> is the best choice (Free, Fast, Auto-complete).
                    </p>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderLeft: '4px solid #6366f1' }}>
                    <div className="info-card-header">
                        <i className="fas fa-lightbulb" style={{ color: '#6366f1' }}></i>
                        <h3 style={{ color: '#6366f1' }}>Real-life Example</h3>
                    </div>
                    <p>
                        When you click a <strong>Login</strong> button and see an error without reloading, that is handled by JavaScript.
                    </p>
                    <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '4px' }}>
                        <code style={{ fontFamily: 'monospace', color: '#e0e0e0' }}>console.log("Hello JavaScript");</code>
                    </div>
                </div>

                <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>The Web Trinity</h3>
                <div className="grid-3">
                    <GlassCard>
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <i className="fab fa-html5" style={{ fontSize: '3rem', color: '#e34c26' }}></i>
                        </div>
                        <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#e34c26' }}>HTML</h3>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>The Skeleton (Structure)</p>
                        <ul style={{ marginTop: '1rem', fontSize: '0.85rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Defines content</li>
                            <li>Structural tags</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <i className="fab fa-css3-alt" style={{ fontSize: '3rem', color: '#264de4' }}></i>
                        </div>
                        <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#264de4' }}>CSS</h3>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>The Skin (Presentation)</p>
                        <ul style={{ marginTop: '1rem', fontSize: '0.85rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Styles & Layout</li>
                            <li>Animations</li>
                        </ul>
                    </GlassCard>

                    <GlassCard highlight={true} style={{ borderColor: '#f7df1e' }}>
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <i className="fab fa-js-square" style={{ fontSize: '3rem', color: '#f7df1e' }}></i>
                        </div>
                        <h3 style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#f0db4f' }}>JavaScript</h3>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>The Brain (Behavior)</p>
                        <ul style={{ marginTop: '1rem', fontSize: '0.85rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Dynamic logic</li>
                            <li>Interactivity</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="code-comparison">
                    <div className="comparison-header">
                        <span>JavaScript in Action</span>
                    </div>
                    <div className="comparison-content">
                        <div className="code-example">
                            <div className="code-header">Without JavaScript</div>
                            <pre><code>&lt;button&gt;Click Me&lt;/button&gt;
                                <span className="com">// Nothing happens when clicked</span></code></pre>
                            <button style={{ marginTop: '10px' }}>Click Me</button>
                        </div>
                        <div className="code-example">
                            <div className="code-header">With JavaScript</div>
                            <pre><code>&lt;button onClick="alert('Hello!')"&gt;
                                Click Me
                                &lt;/button&gt;
                                <span className="com">// Shows alert when clicked</span></code></pre>
                            <button style={{ marginTop: '10px' }} onClick={() => alert('Hello!')}>Click Me</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* VARIABLES */}
            <section id="variables" className="content-section">
                <SectionHeader title="Variables & Scope" icon="fas fa-box" difficulty="Beginner" timeEstimate="8 min" />

                <p className="desc">
                    A variable is a <strong>named container</strong> used to store data values.
                    Example: <code>let city = "Chennai";</code>
                </p>

                <div className="grid-3">
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-unlock"></i> var</h3>
                            <span className="badge legacy">Legacy</span>
                        </div>
                        <p>Function scoped, re-declarable. Causes bugs.</p>
                        <pre><code><span className="kwd">var</span> age = 20;</code></pre>
                        <div className="card-footer">
                            <span className="warning"><i className="fas fa-exclamation-triangle"></i> Avoid</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-edit"></i> let</h3>
                            <span className="badge recommended">Recommended</span>
                        </div>
                        <p>Block scoped, value can be changed.</p>
                        <pre><code><span className="kwd">let</span> score = 50;
                            score = 80;</code></pre>
                        <div className="card-footer">
                            <span className="tip"><i className="fas fa-check-circle"></i> Use for changing values</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-lock"></i> const</h3>
                            <span className="badge recommended">Recommended</span>
                        </div>
                        <p>Block scoped, fixed values.</p>
                        <pre><code><span className="kwd">const</span> country = "India";</code></pre>
                        <div className="card-footer">
                            <span className="tip"><i className="fas fa-check-circle"></i> Use for fixed values</span>
                        </div>
                    </GlassCard>
                </div>

                {/* Difference Table */}
                <GlassCard style={{ marginTop: '1rem' }}>
                    <h3>Difference between let and const</h3>
                    <table style={{ width: '100%', marginTop: '0.5rem', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>let</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>const</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Reassign</td>
                                <td style={{ padding: '0.5rem' }}>Yes</td>
                                <td style={{ padding: '0.5rem' }}>No</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Block Scoped</td>
                                <td style={{ padding: '0.5rem' }}>Yes</td>
                                <td style={{ padding: '0.5rem' }}>Yes</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Best Use</td>
                                <td style={{ padding: '0.5rem' }}>Changing values</td>
                                <td style={{ padding: '0.5rem' }}>Fixed values</td>
                            </tr>
                        </tbody>
                    </table>
                </GlassCard>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-check-double" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Pro Tip</h3>
                    </div>
                    <p>Always start by declaring variables with <code>const</code>. Only change to <code>let</code> if you know the value needs to change later. This prevents accidental reassignments and makes code safer.</p>
                </div>

                <CodePlayground
                    initialCode={`let count = 5;
const multiplier = 2;
let result = count * multiplier;

console.log('Count: ' + count);
console.log('Result: ' + result);

// The line below would cause an error if uncommented
// multiplier = 3; // ❌ This will cause an error`}
                    explanation="The const variable multiplier cannot be reassigned."
                />

            </section>

            {/* DATA TYPES */}
            <section id="datatypes" className="content-section">
                <SectionHeader title="Data Types" icon="fas fa-dna" difficulty="Beginner" timeEstimate="10 min" />

                <p className="desc">
                    JavaScript has dynamic types: the same variable can hold different data types.
                    There are 7 primitive data types and 1 non-primitive (object).
                </p>

                <div className="data-types-container">
                    <div className="data-type-category">
                        <h3><i className="fas fa-star"></i> Primitive Types (Immutable)</h3>
                        <div className="type-grid">
                            <div className="type-card">
                                <div className="type-icon string">S</div>
                                <div className="type-info">
                                    <h4>String</h4>
                                    <p>Text values</p>
                                    <code>"Janani"</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon number">N</div>
                                <div className="type-info">
                                    <h4>Number</h4>
                                    <p>Numeric values</p>
                                    <code>21</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon boolean">B</div>
                                <div className="type-info">
                                    <h4>Boolean</h4>
                                    <p>True or False</p>
                                    <code>true</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon null">Ø</div>
                                <div className="type-info">
                                    <h4>Null</h4>
                                    <p>Empty value</p>
                                    <code>null</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon undefined">U</div>
                                <div className="type-info">
                                    <h4>Undefined</h4>
                                    <p>Not assigned</p>
                                    <code>let result;</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon symbol">Σ</div>
                                <div className="type-info">
                                    <h4>Symbol</h4>
                                    <p>Unique identifier</p>
                                    <code>Symbol('id')</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon bigint">B</div>
                                <div className="type-info">
                                    <h4>BigInt</h4>
                                    <p>Large integers</p>
                                    <code>12345678901234567890n</code>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="data-type-category">
                        <h3><i className="fas fa-cube"></i> Non-Primitive Types (Mutable)</h3>
                        <div className="type-grid">
                            <div className="type-card">
                                <div className="type-icon object">O</div>
                                <div className="type-info">
                                    <h4>Object</h4>
                                    <p>Key-value pairs</p>
                                    <code style={{ fontSize: '0.75rem' }}>{`{name: "Arun", age: 20}`}</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon array">A</div>
                                <div className="type-info">
                                    <h4>Array</h4>
                                    <p>Multiple values</p>
                                    <code>[70, 80, 90]</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon function">F</div>
                                <div className="type-info">
                                    <h4>Function</h4>
                                    <p>Reusable code</p>
                                    <code>function greet()...</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon array">AO</div>
                                <div className="type-info">
                                    <h4>Array of Obj</h4>
                                    <p>List of objects</p>
                                    <code style={{ fontSize: '0.7rem' }}>{`[{id:1, name:"A"}, {id:2, name:"B"}]`}</code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="type-check-demo">
                    <h3><i className="fas fa-search"></i> Type Checking</h3>
                    <p>Use <code>typeof</code> operator to check data types:</p>
                    <CodeBlock>
                        <pre><code><span className="kwd">typeof</span> "Hello"        <span className="com">// "string"</span>
                            <span className="kwd">typeof</span> 42           <span className="com">// "number"</span>
                            <span className="kwd">typeof</span> true         <span className="com">// "boolean"</span></code></pre>
                    </CodeBlock>

                    <div className="interactive-box">
                        <h3><i className="fas fa-flask"></i> Type Checking Interactive Demo</h3>
                        <p>Enter any JavaScript value to check its type:</p>
                        <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
                            <input
                                type="text"
                                value={typeInput}
                                onChange={(e) => setTypeInput(e.target.value)}
                                placeholder="Enter value (e.g., 42, 'hello', true)"
                                style={{ flex: 1, padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                            />
                            <button onClick={checkType} className="run-btn">
                                <i className="fas fa-search"></i> Check Type
                            </button>
                        </div>
                        <div className="output-display">
                            <div className="output-header">Type Result:</div>
                            <div className="output-content" dangerouslySetInnerHTML={{ __html: typeResult || 'Enter a value above and click "Check Type"' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OPERATORS */}
            <section id="operators" className="content-section">
                <SectionHeader title="Operators" icon="fas fa-calculator" difficulty="Beginner" timeEstimate="15 min" />

                <GlassCard className="intro-card" style={{ marginBottom: '2rem' }}>
                    <h3>✅ What is an Operator?</h3>
                    <p>An operator is a special symbol used to perform an operation on values or variables.</p>
                    <p>👉 In simple words, operators help us:</p>
                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                        <li>Calculate values</li>
                        <li>Compare values</li>
                        <li>Assign values</li>
                        <li>Make decisions</li>
                    </ul>
                    <div style={{ marginTop: '1rem' }}>
                        <h5>Example:</h5>
                        <CodeBlock>
                            <pre><code><span className="kwd">let</span> a = 10 + 5;</code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <strong>Explanation:</strong> <code>+</code> is an operator. It adds 10 and 5. Result is stored in <code>a</code>.
                        </p>
                    </div>
                </GlassCard>

                <h3 style={{ marginBottom: '1rem' }}>✅ Types of Operators in JavaScript</h3>

                <div className="operators-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem' }}>

                    {/* 1. Arithmetic */}
                    <div className="operator-category">
                        <h3>1️⃣ Arithmetic Operators</h3>
                        <p>Used to perform mathematical calculations.</p>
                        <div className="operator-table">
                            <div className="operator-row"><span className="operator-symbol">+</span><span className="operator-name">Addition</span></div>
                            <div className="operator-row"><span className="operator-symbol">-</span><span className="operator-name">Subtraction</span></div>
                            <div className="operator-row"><span className="operator-symbol">*</span><span className="operator-name">Multiplication</span></div>
                            <div className="operator-row"><span className="operator-symbol">/</span><span className="operator-name">Division</span></div>
                            <div className="operator-row"><span className="operator-symbol">%</span><span className="operator-name">Modulus (remainder)</span></div>
                            <div className="operator-row"><span className="operator-symbol">**</span><span className="operator-name">Power</span></div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> a = 10;{'\n'}
                                    <span className="kwd">let</span> b = 3;{'\n'}
                                    {'\n'}
                                    console.log(a + b); <span className="com">// 13</span>{'\n'}
                                    console.log(a - b); <span className="com">// 7</span>{'\n'}
                                    console.log(a * b); <span className="com">// 30</span>{'\n'}
                                    console.log(a / b); <span className="com">// 3.33</span>{'\n'}
                                    console.log(a % b); <span className="com">// 1</span>{'\n'}
                                    console.log(a ** b); <span className="com">// 1000</span>
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> <code>+</code> adds values, <code>%</code> gives remainder, <code>**</code> means power (10³).
                            </p>
                        </div>
                    </div>

                    {/* 2. Assignment */}
                    <div className="operator-category">
                        <h3>2️⃣ Assignment Operators</h3>
                        <p>Used to assign values to variables.</p>
                        <div className="operator-table">
                            <div className="operator-row"><span className="operator-symbol">=</span><span className="operator-name">Assign</span></div>
                            <div className="operator-row"><span className="operator-symbol">+=</span><span className="operator-name">Add and assign</span></div>
                            <div className="operator-row"><span className="operator-symbol">-=</span><span className="operator-name">Subtract and assign</span></div>
                            <div className="operator-row"><span className="operator-symbol">*=</span><span className="operator-name">Multiply and assign</span></div>
                            <div className="operator-row"><span className="operator-symbol">/=</span><span className="operator-name">Divide and assign</span></div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> x = 10;{'\n'}
                                    {'\n'}
                                    x += 5; <span className="com">// 15</span>{'\n'}
                                    x -= 3; <span className="com">// 12</span>{'\n'}
                                    x *= 2; <span className="com">// 24</span>{'\n'}
                                    x /= 4; <span className="com">// 6</span>
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> <code>x += 5</code> means <code>x = x + 5</code>. Saves code and improves readability.
                            </p>
                        </div>
                    </div>

                    {/* 3. Comparison */}
                    <div className="operator-category">
                        <h3>3️⃣ Comparison Operators</h3>
                        <p>Used to compare two values. They always return true or false.</p>
                        <div className="operator-table">
                            <div className="operator-row"><span className="operator-symbol">==</span><span className="operator-name">Equal (value only)</span></div>
                            <div className="operator-row highlight"><span className="operator-symbol">===</span><span className="operator-name">Strict equal (value & type)</span></div>
                            <div className="operator-row"><span className="operator-symbol">!=</span><span className="operator-name">Not equal</span></div>
                            <div className="operator-row"><span className="operator-symbol">!==</span><span className="operator-name">Strict not equal</span></div>
                            <div className="operator-row"><span className="operator-symbol">&gt;</span><span className="operator-name">Greater than</span></div>
                            <div className="operator-row"><span className="operator-symbol">&lt;</span><span className="operator-name">Less than</span></div>
                            <div className="operator-row"><span className="operator-symbol">&gt;=</span><span className="operator-name">Greater/Equal</span></div>
                            <div className="operator-row"><span className="operator-symbol">&lt;=</span><span className="operator-name">Less/Equal</span></div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    console.log(5 == "5");   <span className="com">// true</span>{'\n'}
                                    console.log(5 === "5"); <span className="com">// false</span>{'\n'}
                                    console.log(10 &gt; 5);    <span className="com">// true</span>
                                </code></pre>
                            </CodeBlock>
                            <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b' }}>
                                <p style={{ fontSize: '0.9rem' }}>
                                    <strong>Explanation:</strong> <code>==</code> checks only value. <code>===</code> checks value + datatype. <br />
                                    <strong>✅ Always use === in real projects</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Logical */}
                    <div className="operator-category">
                        <h3>4️⃣ Logical Operators</h3>
                        <p>Used to combine conditions.</p>
                        <div className="operator-table">
                            <div className="operator-row"><span className="operator-symbol">&&</span><span className="operator-name">AND</span></div>
                            <div className="operator-row"><span className="operator-symbol">||</span><span className="operator-name">OR</span></div>
                            <div className="operator-row"><span className="operator-symbol">!</span><span className="operator-name">NOT</span></div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> age = 20;{'\n'}
                                    <span className="kwd">let</span> hasId = true;{'\n'}
                                    {'\n'}
                                    console.log(age &gt;= 18 && hasId); <span className="com">// true</span>{'\n'}
                                    console.log(age &lt; 18 || hasId);  <span className="com">// true</span>{'\n'}
                                    console.log(!hasId);             <span className="com">// false</span>
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> <code>&&</code> → all true. <code>||</code> → any one true. <code>!</code> → reverses result.
                            </p>
                        </div>
                    </div>

                    {/* 5. Unary */}
                    <div className="operator-category">
                        <h3>5️⃣ Unary Operators</h3>
                        <p>Work with only one value.</p>
                        <div className="operator-table">
                            <div className="operator-row"><span className="operator-symbol">++</span><span className="operator-name">Increment</span></div>
                            <div className="operator-row"><span className="operator-symbol">--</span><span className="operator-name">Decrement</span></div>
                            <div className="operator-row"><span className="operator-symbol">typeof</span><span className="operator-name">Data type</span></div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> count = 5;{'\n'}
                                    {'\n'}
                                    count++;{'\n'}
                                    console.log(count); <span className="com">// 6</span>{'\n'}
                                    {'\n'}
                                    console.log(<span className="kwd">typeof</span> count); <span className="com">// number</span>
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> <code>++</code> increases value by 1. <code>typeof</code> tells the data type.
                            </p>
                        </div>
                    </div>

                    {/* 6. Ternary */}
                    <div className="operator-category">
                        <h3>6️⃣ Ternary Operator</h3>
                        <p>Short form of if–else.</p>
                        <div className="operator-table">
                            <div className="operator-row highlight"><span className="operator-symbol">? :</span><span className="operator-name">Condition ? True : False</span></div>
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <p><strong>Syntax:</strong> <code>condition ? value1 : value2</code></p>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> age = 17;{'\n'}
                                    {'\n'}
                                    <span className="kwd">let</span> result = age &gt;= 18 ? "Adult" : "Minor";{'\n'}
                                    console.log(result);
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> Condition true → "Adult". Condition false → "Minor".
                            </p>
                        </div>
                    </div>

                    {/* 7. String */}
                    <div className="operator-category">
                        <h3>7️⃣ String Operators</h3>
                        <p>Used to join strings (concatenation).</p>
                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> firstName = "Janani";{'\n'}
                                    <span className="kwd">let</span> lastName = "S";{'\n'}
                                    {'\n'}
                                    console.log(firstName + " " + lastName);
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> <code>+</code> joins strings into one sentence.
                            </p>
                        </div>
                    </div>

                    {/* 8. Special */}
                    <div className="operator-category">
                        <h3>8️⃣ Special Operators</h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4>🔹 typeof</h4>
                            <p>Checks the data type.</p>
                            <CodeBlock>
                                <pre><code>
                                    console.log(<span className="kwd">typeof</span> "Hello"); <span className="com">// string</span>{'\n'}
                                    console.log(<span className="kwd">typeof</span> 25);      <span className="com">// number</span>
                                </code></pre>
                            </CodeBlock>
                        </div>

                        <div>
                            <h4>🔹 instanceof</h4>
                            <p>Checks object type.</p>
                            <CodeBlock>
                                <pre><code>
                                    <span className="kwd">let</span> arr = [1, 2, 3];{'\n'}
                                    {'\n'}
                                    console.log(arr <span className="kwd">instanceof</span> Array); <span className="com">// true</span>
                                </code></pre>
                            </CodeBlock>
                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                <strong>Explanation:</strong> <code>typeof</code> → primitive type. <code>instanceof</code> → object type.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* CONVERSIONS */}
            <section id="conversions" className="content-section">
                <SectionHeader title="Type Conversions" icon="fas fa-exchange-alt" difficulty="Beginner" timeEstimate="15 min" />

                {/* Intro Card */}
                <GlassCard className="intro-card" style={{ marginBottom: '2rem' }}>
                    <h3>✅ What is Type Conversion?</h3>
                    <p>Type Conversion means changing one data type into another data type.</p>
                    <p>👉 JavaScript automatically converts types when needed, or we can convert them manually.</p>
                    <div style={{ marginTop: '1rem' }}>
                        <h5>Simple Example:</h5>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> result = "5" + 2;{'\n'}
                                console.log(result);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <strong>Explanation:</strong> "5" is a string. 2 is a number. JS converts 2 into string. Result is "52".
                        </p>
                    </div>
                </GlassCard>

                <h3 style={{ marginBottom: '1rem' }}>✅ Types of Type Conversion</h3>

                <div className="grid-2">
                    {/* 1. Implicit */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>1️⃣ Implicit Conversion</h3>
                            <span className="badge legacy">Automatic</span>
                        </div>
                        <p style={{ marginBottom: '1rem' }}>Happens automatically by JavaScript (Type Coercion).</p>

                        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>🔹 String Conversion</h4>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> res = "10" + 5; <span className="com">// "105"</span>
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}><code>+</code> prefers strings. 5 becomes "5".</p>

                        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>🔹 Number Conversion</h4>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> res = "10" - 5; <span className="com">// 5</span>
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}><code>-</code>, <code>*</code>, <code>/</code> work with numbers.</p>

                        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>⚠️ Risky Issues</h4>
                        <CodeBlock>
                            <pre><code>
                                console.log("5" - "2"); <span className="com">// 3</span>{'\n'}
                                console.log("5" + "2"); <span className="com">// "52"</span>
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Can cause confusion.</p>
                    </GlassCard>

                    {/* 2. Explicit */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>2️⃣ Explicit Conversion</h3>
                            <span className="badge recommended">Manual</span>
                        </div>
                        <p style={{ marginBottom: '1rem' }}>Done manually by the developer.</p>

                        <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--accent-success)' }}>🔸 String()</h4>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">String</span>(100); <span className="com">// "100"</span>
                            </code></pre>
                        </CodeBlock>

                        <h4 style={{ fontSize: '1rem', margin: '1rem 0 0.5rem', color: 'var(--accent-success)' }}>🔸 Number()</h4>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">Number</span>("50"); <span className="com">// 50</span>{'\n'}
                                <span className="kwd">Number</span>("abc"); <span className="com">// NaN</span>
                            </code></pre>
                        </CodeBlock>

                        <h4 style={{ fontSize: '1rem', margin: '1rem 0 0.5rem', color: 'var(--accent-success)' }}>🔸 parseInt / parseFloat</h4>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">parseInt</span>("25.5"); <span className="com">// 25</span>{'\n'}
                                <span className="kwd">parseFloat</span>("25.5"); <span className="com">// 25.5</span>
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                {/* Truthy / Falsy & Boolean */}
                <GlassCard style={{ marginTop: '2rem' }}>
                    <h3>🔸 Boolean Conversion & Truthy/Falsy</h3>
                    <div className="grid-2" style={{ marginTop: '1rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--accent-danger)' }}>❌ Falsy Values</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Convert to <code>false</code></p>
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                                <li><code>false</code></li>
                                <li><code>0</code></li>
                                <li><code>""</code> (empty string)</li>
                                <li><code>null</code></li>
                                <li><code>undefined</code></li>
                                <li><code>NaN</code></li>
                            </ul>
                            <div style={{ marginTop: '1rem' }}>
                                <CodeBlock>
                                    <pre><code>
                                        <span className="kwd">Boolean</span>(0); <span className="com">// false</span>{'\n'}
                                        <span className="kwd">Boolean</span>(""); <span className="com">// false</span>
                                    </code></pre>
                                </CodeBlock>
                            </div>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-success)' }}>✅ Truthy Values</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Convert to <code>true</code></p>
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                                <li><code>"0"</code> (string)</li>
                                <li><code>"false"</code> (string)</li>
                                <li><code>[]</code> (empty array)</li>
                                <li><code>{`{}`}</code> (empty object)</li>
                                <li>Any number other than 0</li>
                            </ul>
                            <div style={{ marginTop: '1rem' }}>
                                <CodeBlock>
                                    <pre><code>
                                        <span className="kwd">Boolean</span>("hello"); <span className="com">// true</span>{'\n'}
                                        <span className="kwd">Boolean</span>(1); <span className="com">// true</span>
                                    </code></pre>
                                </CodeBlock>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Comparison Table */}
                <GlassCard style={{ marginTop: '2rem' }}>
                    <h3>✅ Implicit vs Explicit Conversion</h3>
                    <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Feature</th>
                                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Implicit</th>
                                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Explicit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '0.75rem' }}>Who converts</td>
                                <td style={{ padding: '0.75rem' }}>JavaScript Engine</td>
                                <td style={{ padding: '0.75rem' }}>Developer</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '0.75rem' }}>Control</td>
                                <td style={{ padding: '0.75rem' }}>Less</td>
                                <td style={{ padding: '0.75rem' }}>More</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.75rem' }}>Safe</td>
                                <td style={{ padding: '0.75rem', color: 'var(--accent-danger)' }}><i className="fas fa-times-circle"></i> Risky</td>
                                <td style={{ padding: '0.75rem', color: 'var(--accent-success)' }}><i className="fas fa-check-circle"></i> Safe</td>
                            </tr>
                        </tbody>
                    </table>
                </GlassCard>
            </section>

            {/* HOISTING */}
            <section id="hoisting" className="content-section">
                <SectionHeader title="Hoisting" icon="fas fa-arrow-up" difficulty="Intermediate" timeEstimate="10 min" />
                <p className="desc">Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.</p>
                <div className="grid-3">
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-arrow-up"></i> var Hoisting</h3>
                        </div>
                        <p>Variables are hoisted and initialized with undefined</p>
                        <CodeBlock>
                            <pre><code>console.log(x); <span className="com">// undefined</span>
                                <span className="kwd">var</span> x = 5;</code></pre>
                        </CodeBlock>
                        <div className="card-footer">
                            <span className="tip" style={{ color: 'var(--accent-success)' }}><i className="fas fa-info-circle"></i> Declaration is hoisted, assignment stays</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-exclamation-triangle"></i> let/const Hoisting</h3>
                        </div>
                        <p>Variables are hoisted but not initialized (Temporal Dead Zone)</p>
                        <CodeBlock>
                            <pre><code>console.log(y); <span className="com">// ❌ Error</span>
                                <span className="kwd">let</span> y = 5;</code></pre>
                        </CodeBlock>
                        <div className="card-footer">
                            <span className="warning" style={{ color: 'var(--accent-warning)' }}><i className="fas fa-exclamation-circle"></i> Cannot access before declaration</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3>Function Hoisting</h3>
                        </div>
                        <p>Function declarations are fully hoisted</p>
                        <CodeBlock>
                            <pre><code>sayHello(); <span className="com">// ✅ "Hello!"</span>
                                <span className="kwd">function</span> sayHello() {'{'}
                                console.log("Hello!");
                                {'}'}</code></pre>
                        </CodeBlock>
                        <div className="card-footer">
                            <span className="tip" style={{ color: 'var(--accent-success)' }}><i className="fas fa-check-circle"></i> Can call before declaration</span>
                        </div>
                    </GlassCard>
                </div>
            </section>




        </>
    );
};

export default Fundamentals;


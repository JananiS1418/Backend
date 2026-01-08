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
                    JavaScript is a versatile, high-level programming language that powers interactive behavior on websites.
                    It's the third layer of standard web technologies alongside HTML and CSS.
                </p>

                <div className="info-card">
                    <div className="info-card-header">
                        <i className="fas fa-lightbulb"></i>
                        <h3>Key Insight</h3>
                    </div>
                    <p>JavaScript was created in just 10 days by Brendan Eich in 1995 while working at Netscape.</p>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderLeft: '4px solid #6366f1' }}>
                    <div className="info-card-header">
                        <i className="fas fa-question-circle" style={{ color: '#6366f1' }}></i>
                        <h3 style={{ color: '#6366f1' }}>Why Learn JavaScript?</h3>
                    </div>
                    <p>
                        It is the <strong>only</strong> language that runs natively in the browser. If you want to build modern websites (like Netflix, Facebook, or Amazon), you <em>must</em> know JavaScript.
                    </p>
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
                    Variables are containers for storing data values. JavaScript uses three keywords to declare variables:
                    <code>var</code>, <code>let</code>, and <code>const</code>.
                </p>

                <div className="grid-3">
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-unlock"></i> var</h3>
                            <span className="badge legacy">Legacy</span>
                        </div>
                        <p>Function-scoped, can be redeclared and updated.</p>
                        <pre><code><span className="kwd">var</span> name = "John";
                            <span className="kwd">var</span> name = "Jane"; <span className="com">// ✅ Allowed</span></code></pre>
                        <div className="card-footer">
                            <span className="warning"><i className="fas fa-exclamation-triangle"></i> Avoid in modern code</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-edit"></i> let</h3>
                            <span className="badge recommended">Recommended</span>
                        </div>
                        <p>Block-scoped, can be updated but not redeclared.</p>
                        <pre><code><span className="kwd">let</span> age = 25;
                            age = 26; <span className="com">// ✅ Allowed</span>
                            {/* <span className="kwd">let</span> age = 27; <span className="com">// ❌ Error</span> */}</code></pre>
                        <div className="card-footer">
                            <span className="tip"><i className="fas fa-check-circle"></i> Use for variables that change</span>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-lock"></i> const</h3>
                            <span className="badge recommended">Recommended</span>
                        </div>
                        <p>Block-scoped, cannot be updated or redeclared.</p>
                        <pre><code><span className="kwd">const</span> PI = 3.14;
                            {/* PI = 3.15; <span className="com">// ❌ Error</span> */}</code></pre>
                        <div className="card-footer">
                            <span className="tip"><i className="fas fa-check-circle"></i> Use for values that won't change</span>
                        </div>
                    </GlassCard>
                </div>

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
                                    <p>Text data</p>
                                    <code>"Hello", 'World'</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon number">N</div>
                                <div className="type-info">
                                    <h4>Number</h4>
                                    <p>Integer or floating point</p>
                                    <code>42, 3.14, -5</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon boolean">B</div>
                                <div className="type-info">
                                    <h4>Boolean</h4>
                                    <p>Logical true/false</p>
                                    <code>true, false</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon null">Ø</div>
                                <div className="type-info">
                                    <h4>Null</h4>
                                    <p>Intentional empty value</p>
                                    <code>null</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon undefined">U</div>
                                <div className="type-info">
                                    <h4>Undefined</h4>
                                    <p>Variable not assigned</p>
                                    <code>undefined</code>
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
                                    <p>Key-value collections</p>
                                    <code>{`{name: "John", age: 30}`}</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon array">A</div>
                                <div className="type-info">
                                    <h4>Array</h4>
                                    <p>Ordered lists</p>
                                    <code>[1, 2, 3, 4, 5]</code>
                                </div>
                            </div>
                            <div className="type-card">
                                <div className="type-icon function">F</div>
                                <div className="type-info">
                                    <h4>Function</h4>
                                    <p>Callable objects</p>
                                    <code>function() {'{}'}</code>
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
                <SectionHeader title="Operators" icon="fas fa-calculator" difficulty="Beginner" timeEstimate="12 min" />
                <p className="desc">Operators are symbols that perform operations on variables and values. JavaScript includes arithmetic, assignment, comparison, logical, and other operators.</p>

                <div className="operators-grid">
                    <div className="operator-category">
                        <h3><i className="fas fa-plus-circle"></i> Arithmetic Operators</h3>
                        <div className="operator-table">
                            <div className="operator-row">
                                <span className="operator-symbol">+</span>
                                <span className="operator-name">Addition</span>
                                <code>5 + 2 = 7</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">-</span>
                                <span className="operator-name">Subtraction</span>
                                <code>5 - 2 = 3</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">*</span>
                                <span className="operator-name">Multiplication</span>
                                <code>5 * 2 = 10</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">/</span>
                                <span className="operator-name">Division</span>
                                <code>5 / 2 = 2.5</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">%</span>
                                <span className="operator-name">Modulus</span>
                                <code>5 % 2 = 1</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">**</span>
                                <span className="operator-name">Exponentiation</span>
                                <code>5 ** 2 = 25</code>
                            </div>
                        </div>
                    </div>

                    <div className="operator-category">
                        <h3><i className="fas fa-equals"></i> Assignment Operators</h3>
                        <div className="operator-table">
                            <div className="operator-row">
                                <span className="operator-symbol">=</span>
                                <span className="operator-name">Assignment</span>
                                <code>x = 5</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">+=</span>
                                <span className="operator-name">Add and assign</span>
                                <code>x += 3 // x = x + 3</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">-=</span>
                                <span className="operator-name">Subtract and assign</span>
                                <code>x -= 3 // x = x - 3</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">*=</span>
                                <span className="operator-name">Multiply and assign</span>
                                <code>x *= 3 // x = x * 3</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">/=</span>
                                <span className="operator-name">Divide and assign</span>
                                <code>x /= 3 // x = x / 3</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">%=</span>
                                <span className="operator-name">Modulus and assign</span>
                                <code>x %= 3 // x = x % 3</code>
                            </div>
                        </div>
                    </div>

                    <div className="operator-category">
                        <h3><i className="fas fa-balance-scale"></i> Comparison Operators</h3>
                        <div className="operator-table">
                            <div className="operator-row">
                                <span className="operator-symbol">==</span>
                                <span className="operator-name">Equal to (value)</span>
                                <code>5 == "5" // true</code>
                            </div>
                            <div className="operator-row highlight">
                                <span className="operator-symbol">===</span>
                                <span className="operator-name">Strict equal</span>
                                <code>5 === "5" // false</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">!=</span>
                                <span className="operator-name">Not equal</span>
                                <code>5 != "5" // false</code>
                            </div>
                            <div className="operator-row highlight">
                                <span className="operator-symbol">!==</span>
                                <span className="operator-name">Strict not equal</span>
                                <code>5 !== "5" // true</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">&gt;</span>
                                <span className="operator-name">Greater than</span>
                                <code>5 &gt; 3 // true</code>
                            </div>
                            <div className="operator-row">
                                <span className="operator-symbol">&lt;</span>
                                <span className="operator-name">Less than</span>
                                <code>5 &lt; 3 // false</code>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="operator-category" style={{ marginTop: '2rem' }}>
                    <h3><i className="fas fa-code-branch"></i> Logical Operators</h3>
                    <div className="operator-table">
                        <div className="operator-row">
                            <span className="operator-symbol">&&</span>
                            <span className="operator-name">AND</span>
                            <code>true && false // false</code>
                        </div>
                        <div className="operator-row">
                            <span className="operator-symbol">||</span>
                            <span className="operator-name">OR</span>
                            <code>true || false // true</code>
                        </div>
                        <div className="operator-row">
                            <span className="operator-symbol">!</span>
                            <span className="operator-name">NOT</span>
                            <code>!true // false</code>
                        </div>
                        <div className="operator-row">
                            <span className="operator-symbol">??</span>
                            <div className="operator-name">
                                Nullish Coalescing
                            </div>
                            <code>null ?? "default" // "default"</code>
                        </div>
                    </div>
                </div>

                <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b' }}>
                    <div className="info-card-header">
                        <i className="fas fa-exclamation-circle" style={{ color: '#f59e0b' }}></i>
                        <h3 style={{ color: '#f59e0b' }}>Equality: == vs ===</h3>
                    </div>
                    <p>
                        <code>==</code> checks for <strong>value only</strong> (performs automatic type conversion).<br />
                        <code>===</code> checks for both <strong>value AND type</strong> (strict equality).<br />
                        <strong>Recommendation:</strong> Always use <code>===</code> to avoid unexpected bugs.
                    </p>
                </div>
            </section>

            {/* CONVERSIONS */}
            <section id="conversions" className="content-section">
                <SectionHeader title="Type Conversions" icon="fas fa-exchange-alt" difficulty="Beginner" timeEstimate="8 min" />
                <p className="desc">JavaScript can convert values from one type to another automatically (implicit conversion) or manually (explicit conversion).</p>
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-magic"></i> Implicit Conversion</h3>
                        <p>Automatic type conversion by JavaScript</p>
                        <CodeBlock>
                            <pre><code>"5" + 2      <span className="com">// "52" (string concatenation)</span>
                                "5" - 2      <span className="com">// 3 (string to number)</span>
                                "5" * "2"    <span className="com">// 10 (both strings to numbers)</span>
                                true + false <span className="com">// 1 (booleans to numbers)</span>
                                5 + null     <span className="com">// 5 (null becomes 0)</span>
                                "5" + null   <span className="com">// "5null" (null becomes "null")</span></code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-wrench"></i> Explicit Conversion</h3>
                        <p>Manual type conversion by developer</p>
                        <CodeBlock>
                            <pre><code><span className="kwd">String</span>(123)        <span className="com">// "123"</span>
                                <span className="kwd">Number</span>("123")      <span className="com">// 123</span>
                                <span className="kwd">Boolean</span>(1)         <span className="com">// true</span>
                                <span className="kwd">parseInt</span>("10px")   <span className="com">// 10</span>
                                <span className="kwd">parseFloat</span>("3.14") <span className="com">// 3.14</span>
                                + "123"            <span className="com">// 123 (unary plus)</span>
                                !! 1               <span className="com">// true (double NOT)</span></code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
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


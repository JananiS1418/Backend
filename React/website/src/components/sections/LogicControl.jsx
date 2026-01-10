import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const LogicControl = () => {
    return (
        <>
            {/* CONDITIONS */}
            <section id="conditions" className="content-section">
                <SectionHeader title="Conditions" icon="fas fa-code-branch" difficulty="Beginner" timeEstimate="15 min" />
                <p className="desc">Conditional statements control the flow of execution based on different conditions.</p>

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-code-branch"></i> If / Else</h3>
                        </div>
                        <p>Execute code if a condition is true</p>
                        <CodeBlock>
                            <pre><code>if (hour &lt; 12) {'{'}
                                console.log("Good morning");
                                {'}'} else if (hour &lt; 18) {'{'}
                                console.log("Good afternoon");
                                {'}'} else {'{'}
                                console.log("Good evening");
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-toggle-on"></i> Switch</h3>
                        </div>
                        <p>Select one of many blocks to be executed</p>
                        <CodeBlock>
                            <pre><code>switch (day) {'{'}
                                case 0:
                                text = "Sunday";
                                break;
                                case 6:
                                text = "Saturday";
                                break;
                                default:
                                text = "Weekday";
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <GlassCard className="mt-4">
                    <div className="card-header">
                        <h3><i className="fas fa-question-circle"></i> Ternary Operator</h3>
                    </div>
                    <p>Short hand for if/else</p>
                    <CodeBlock>
                        <pre><code>let status = (age &gt;= 18) ? "Adult" : "Minor";</code></pre>
                    </CodeBlock>
                </GlassCard>

                <div className="info-card warning-card" style={{ marginTop: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b' }}>
                    <div className="info-card-header">
                        <i className="fas fa-lightbulb" style={{ color: '#f59e0b' }}></i>
                        <h3 style={{ color: '#f59e0b' }}>Analogies</h3>
                    </div>
                    <p>
                        <strong>If/Else:</strong> Like deciding what to wear based on weather ("If rain, umbrella; Else, sunglasses").<br />
                        <strong>Switch:</strong> Like a vending machine (Press 'A' for soda, 'B' for chips, 'C' for candy).<br />
                        <strong>Ternary:</strong> A quick check. "Pass or Fail?" (Score &gt; 50 ? "Pass" : "Fail").
                    </p>
                </div>
            </section>

            {/* LOOPS */}
            <section id="loops" className="content-section">
                <SectionHeader title="Loops" icon="fas fa-redo" difficulty="Beginner" timeEstimate="20 min" />

                {/* Intro Card */}
                <GlassCard className="intro-card" style={{ marginBottom: '2rem' }}>
                    <h3>✅ What is a Loop?</h3>
                    <p>A loop is used to execute a block of code repeatedly until a condition becomes false.</p>
                    <p>👉 Instead of writing the same code many times, we use loops.</p>

                    <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--accent-danger)', marginBottom: '0.5rem' }}><i className="fas fa-times-circle"></i> Without Loop</h4>
                            <CodeBlock>
                                <pre><code>
                                    console.log(1);{'\n'}
                                    console.log(2);{'\n'}
                                    console.log(3);
                                </code></pre>
                            </CodeBlock>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-success)', marginBottom: '0.5rem' }}><i className="fas fa-check-circle"></i> With Loop</h4>
                            <CodeBlock>
                                <pre><code>
                                    for (let i = 1; i &lt;= 3; i++) {'{'}{'\n'}
                                    console.log(i);{'\n'}
                                    {'}'}
                                </code></pre>
                            </CodeBlock>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <span className="badge recommended">✔ Less code</span>
                        <span className="badge recommended">✔ Easy to maintain</span>
                        <span className="badge recommended">✔ Efficient</span>
                    </div>
                </GlassCard>

                <h3 style={{ marginBottom: '1rem' }}>✅ Types of Loops</h3>

                {/* 1. For Loop */}
                <GlassCard>
                    <div className="card-header">
                        <h3>1️⃣ For Loop</h3>
                        <span className="badge">Known Iterations</span>
                    </div>
                    <p>Used when the number of iterations is known.</p>
                    <div style={{ margin: '1rem 0', background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '4px' }}>
                        <code><strong>Syntax:</strong> for (initialization; condition; increment/decrement) {'{'} // code {'}'}</code>
                    </div>
                    <CodeBlock>
                        <pre><code>
                            for (let i = 1; i &lt;= 5; i++) {'{'}{'\n'}
                            console.log(i);{'\n'}
                            {'}'}
                        </code></pre>
                    </CodeBlock>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        <strong>Explanation:</strong> <code>i=1</code> (Start), <code>i&lt;=5</code> (Run until true), <code>i++</code> (Increase by 1). Output: 1 2 3 4 5.
                    </p>
                </GlassCard>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    {/* 2. While Loop */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>2️⃣ While Loop</h3>
                        </div>
                        <p>Condition is checked <strong>before</strong> execution.</p>
                        <CodeBlock>
                            <pre><code>
                                let i = 1;{'\n'}
                                {'\n'}
                                while (i &lt;= 5) {'{'}{'\n'}
                                console.log(i);{'\n'}
                                i++;{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>

                    {/* 3. Do...While Loop */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>3️⃣ Do...While Loop</h3>
                        </div>
                        <p>Executes <strong>at least once</strong>, even if condition is false.</p>
                        <CodeBlock>
                            <pre><code>
                                let i = 6;{'\n'}
                                {'\n'}
                                do {'{'}{'\n'}
                                console.log(i);{'\n'}
                                i++;{'\n'}
                                {'}'} while (i &lt;= 5);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Output: 6 (runs once before check).</p>
                    </GlassCard>
                </div>

                {/* Comparison Table */}
                <GlassCard style={{ marginTop: '1rem' }}>
                    <h4>🔍 Difference: while vs do-while</h4>
                    <table style={{ width: '100%', marginTop: '0.5rem', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>while</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>do-while</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Condition check</td>
                                <td style={{ padding: '0.5rem' }}>Before loop</td>
                                <td style={{ padding: '0.5rem' }}>After loop</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Executes at least once</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-danger)' }}>❌</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-success)' }}>✅</td>
                            </tr>
                        </tbody>
                    </table>
                </GlassCard>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    {/* 4. For...of Loop */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>4️⃣ For...of Loop</h3>
                        </div>
                        <p>Iterates over values of arrays and strings.</p>
                        <h5 style={{ marginTop: '1rem' }}>Array:</h5>
                        <CodeBlock>
                            <pre><code>
                                let colors = ["red", "green"];{'\n'}
                                for (let color of colors) {'{'}{'\n'}
                                console.log(color);{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <h5 style={{ marginTop: '1rem' }}>String:</h5>
                        <CodeBlock>
                            <pre><code>
                                let name = "JS";{'\n'}
                                for (let char of name) {'{'}{'\n'}
                                console.log(char);{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>

                    {/* 5. For...in Loop */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>5️⃣ For...in Loop</h3>
                        </div>
                        <p>Iterates over keys of an object.</p>
                        <CodeBlock>
                            <pre><code>
                                let student = {'{'}{'\n'}
                                name: "Janani",{'\n'}
                                age: 21,{'\n'}
                                city: "Chennai"{'\n'}
                                {'}'};{'\n'}
                                {'\n'}
                                for (let key in student) {'{'}{'\n'}
                                console.log(key, student[key]);{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <strong>Explanation:</strong> <code>key</code> gives property name, <code>student[key]</code> gives value.
                        </p>
                    </GlassCard>
                </div>

                {/* Nested Loops */}
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>🔁 Nested Loop</h3>
                <GlassCard>
                    <p>A nested loop is a loop inside another loop. Used for tables, patterns, matrix data.</p>

                    <div className="grid-2" style={{ marginTop: '1rem' }}>
                        <div>
                            <h4>Example 2: Multiplication Table</h4>
                            <CodeBlock>
                                <pre><code>
                                    for (let i = 1; i &lt;= 3; i++) {'{'}{'\n'}
                                    for (let j = 1; j &lt;= 10; j++) {'{'}{'\n'}
                                    console.log(`${'{'}i{'}'} x ${'{'}j{'}'} = ${'{'}i * j{'}'}`);{'\n'}
                                    {'}'}{'\n'}
                                    {'}'}
                                </code></pre>
                            </CodeBlock>
                            <p style={{ fontSize: '0.85rem' }}>Outer loop: table no. Inner loop: multiplier.</p>
                        </div>
                        <div>
                            <h4>Example 3: Pattern Printing</h4>
                            <CodeBlock>
                                <pre><code>
                                    for (let i = 1; i &lt;= 3; i++) {'{'}{'\n'}
                                    let row = "";{'\n'}
                                    for (let j = 1; j &lt;= i; j++) {'{'}{'\n'}
                                    row += "* ";{'\n'}
                                    {'}'}{'\n'}
                                    console.log(row);{'\n'}
                                    {'}'}
                                </code></pre>
                            </CodeBlock>
                            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.5rem', borderRadius: '4px', marginTop: '0.5rem' }}>
                                <pre style={{ margin: 0, fontSize: '0.8rem' }}>*<br />* *<br />* * *</pre>
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Infinite Loop & Break/Continue */}
                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <div className="info-card warning-card" style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444' }}>
                        <div className="info-card-header">
                            <i className="fas fa-exclamation-triangle" style={{ color: '#ef4444' }}></i>
                            <h3 style={{ color: '#ef4444' }}>⛔ Infinite Loop (Be Careful)</h3>
                        </div>
                        <p>Runs forever if condition never becomes false.</p>
                        <CodeBlock style={{ borderColor: '#ef4444' }}>
                            <pre><code>
                                let i = 1;{'\n'}
                                while (i &lt;= 5) {'{'}{'\n'}
                                console.log(i);{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <p style={{ color: '#ef4444', fontSize: '0.9rem' }}>❌ <code>i++</code> is missing → infinite loop</p>
                    </div>

                    <GlassCard>
                        <h3>✅ break and continue</h3>

                        <h5 style={{ marginTop: '1rem', color: 'var(--accent-primary)' }}>break</h5>
                        <p style={{ fontSize: '0.9rem' }}>Stops the loop completely.</p>
                        <CodeBlock>
                            <pre><code>
                                for (let i = 1; i &lt;= 5; i++) {'{'}{'\n'}
                                if (i === 3) break;{'\n'}
                                console.log(i);{'\n'}
                                {'}'} <span className="com">// Output: 1 2</span>
                            </code></pre>
                        </CodeBlock>

                        <h5 style={{ marginTop: '1rem', color: 'var(--accent-primary)' }}>continue</h5>
                        <p style={{ fontSize: '0.9rem' }}>Skips the current iteration.</p>
                        <CodeBlock>
                            <pre><code>
                                for (let i = 1; i &lt;= 5; i++) {'{'}{'\n'}
                                if (i === 3) continue;{'\n'}
                                console.log(i);{'\n'}
                                {'}'} <span className="com">// Output: 1 2 4 5</span>
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
            </section>

            {/* FUNCTIONS */}
            <section id="functions" className="content-section">
                <SectionHeader title="Functions" icon="fas fa-cogs" difficulty="Beginner" timeEstimate="20 min" />

                {/* 1. Intro */}
                <GlassCard className="intro-card" style={{ marginBottom: '2rem' }}>
                    <h3>✅ What is a Function?</h3>
                    <p>A function is a block of reusable code that performs a specific task.</p>
                    <p>👉 Instead of writing the same code again and again, we write it once inside a function and reuse it.</p>

                    <div style={{ marginTop: '1rem' }}>
                        <h4 style={{ fontSize: '1rem', color: 'var(--accent-primary)' }}>🔹 Why do we need functions?</h4>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <li>Avoid code repetition</li>
                            <li>Improve readability</li>
                            <li>Easy maintenance</li>
                            <li>Better structure</li>
                        </ul>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <h5>Simple Example:</h5>
                        <CodeBlock>
                            <pre><code>
                                function greet() {'{'}{'\n'}
                                console.log("Hello World");{'\n'}
                                {'}'}{'\n'}
                                greet();
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <strong>Explanation:</strong> <code>function</code> (keyword), <code>greet</code> (name), <code>{'{}'}</code> (body), <code>greet()</code> (call).
                        </p>
                    </div>
                </GlassCard>

                {/* 2. Parts of a Function */}
                <GlassCard>
                    <h3>✅ Parts of a Function</h3>
                    <CodeBlock>
                        <pre><code>
                            function add(a, b) {'{'}{'\n'}
                            return a + b;{'\n'}
                            {'}'}
                        </code></pre>
                    </CodeBlock>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <li><strong>add:</strong> Function name</li>
                        <li><strong>a, b:</strong> Parameters (inputs)</li>
                        <li><strong>return:</strong> Sends result back</li>
                        <li><strong>add(5, 3):</strong> Function call ( usage )</li>
                    </ul>
                </GlassCard>

                <h3 style={{ margin: '2rem 0 1rem' }}>✅ Types of Functions in JavaScript</h3>

                <div className="grid-2">
                    {/* 1. Function Declaration */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>1️⃣ Function Declaration</h3>
                        </div>
                        <p>Declared using the <code>function</code> keyword.</p>
                        <CodeBlock>
                            <pre><code>
                                function multiply(a, b) {'{'}{'\n'}
                                return a * b;{'\n'}
                                {'}'}{'\n'}
                                console.log(multiply(4, 5));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>✅ Supports hoisting (can be called before definition).</p>
                    </GlassCard>

                    {/* 2. Function Expression */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>2️⃣ Function Expression</h3>
                        </div>
                        <p>A function stored inside a variable.</p>
                        <CodeBlock>
                            <pre><code>
                                const add = function(a, b) {'{'}{'\n'}
                                return a + b;{'\n'}
                                {'}'};{'\n'}
                                console.log(add(3, 2));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>❌ No hoisting (cannot call before definition).</p>
                    </GlassCard>
                </div>

                {/* 3. Arrow Function */}
                <GlassCard style={{ marginTop: '1.5rem' }}>
                    <div className="card-header">
                        <h3>3️⃣ Arrow Function (ES6)</h3>
                        <span className="badge recommended">Modern</span>
                    </div>
                    <p>Shorter syntax introduced in ES6.</p>
                    <div className="grid-2" style={{ marginTop: '1rem' }}>
                        <div>
                            <h5>Regular Syntax:</h5>
                            <CodeBlock>
                                <pre><code>
                                    const subtract = (a, b) =&gt; {'{'}{'\n'}
                                    return a - b;{'\n'}
                                    {'}'};
                                </code></pre>
                            </CodeBlock>
                        </div>
                        <div>
                            <h5>Shorter Version:</h5>
                            <CodeBlock>
                                <pre><code>
                                    const subtract = (a, b) =&gt; a - b;
                                </code></pre>
                            </CodeBlock>
                        </div>
                    </div>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>👉 <code>=&gt;</code> is the arrow symbol. Cleaner syntax, no own <code>this</code>.</p>
                </GlassCard>

                <div className="grid-3" style={{ marginTop: '1.5rem' }}>

                    {/* 4. Anonymous Function */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>4️⃣ Anonymous</h3>
                        </div>
                        <p>Function without a name.</p>
                        <CodeBlock>
                            <pre><code>
                                setTimeout(function() {'{'}{'\n'}
                                console.log("Hello");{'\n'}
                                {'}'}, 1000);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Used in callbacks.</p>
                    </GlassCard>

                    {/* 5. IIFE */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>5️⃣ IIFE</h3>
                        </div>
                        <p>Immediately Invoked Function Expression.</p>
                        <CodeBlock>
                            <pre><code>
                                (function() {'{'}{'\n'}
                                console.log("Run Now");{'\n'}
                                {'}'})();
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Runs instantly.</p>
                    </GlassCard>

                    {/* 6. Callback Function */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>6️⃣ Callback</h3>
                        </div>
                        <p>Passed as argument to another function.</p>
                        <CodeBlock>
                            <pre><code>
                                greet("Janani", sayBye);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Executed inside another function.</p>
                    </GlassCard>
                </div>

                {/* Params vs Arguments & Return */}
                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>✅ Params & Arguments</h3>
                        <CodeBlock>
                            <pre><code>
                                function greet(name) {'{'}...{'}'}{'\n'}
                                greet("Janani");
                            </code></pre>
                        </CodeBlock>
                        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li><code>name</code> → Parameter (Placeholder)</li>
                            <li><code>"Janani"</code> → Argument (Actual Value)</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>✅ Return Value</h3>
                        <CodeBlock>
                            <pre><code>
                                function square(num) {'{'}{'\n'}
                                return num * num;{'\n'}
                                {'}'}{'\n'}
                                let result = square(4);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Function stops execution after <code>return</code> and sends value back.</p>
                    </GlassCard>
                </div>

                {/* Comparisons */}
                <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>🔍 comparisons</h3>

                <div className="grid-2">
                    {/* Declaration vs Expression */}
                    <GlassCard>
                        <h4>🔹 Declaration vs Expression</h4>
                        <table style={{ width: '100%', marginTop: '0.5rem', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Declaration</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Expression</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '0.5rem' }}>Hoisting</td>
                                    <td style={{ padding: '0.5rem', color: 'var(--accent-success)' }}>✅ Yes</td>
                                    <td style={{ padding: '0.5rem', color: 'var(--accent-danger)' }}>❌ No</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.5rem' }}>Syntax</td>
                                    <td style={{ padding: '0.5rem' }}>Normal</td>
                                    <td style={{ padding: '0.5rem' }}>In Variable</td>
                                </tr>
                            </tbody>
                        </table>
                    </GlassCard>

                    {/* Normal vs Arrow */}
                    <GlassCard>
                        <h4>🔹 Normal vs Arrow</h4>
                        <table style={{ width: '100%', marginTop: '0.5rem', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Normal</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Arrow</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '0.5rem' }}>Syntax</td>
                                    <td style={{ padding: '0.5rem' }}>Longer</td>
                                    <td style={{ padding: '0.5rem' }}>Shorter</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.5rem' }}><code>this</code></td>
                                    <td style={{ padding: '0.5rem' }}>Has own</td>
                                    <td style={{ padding: '0.5rem' }}>No own</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.5rem' }}>Hoisting</td>
                                    <td style={{ padding: '0.5rem', color: 'var(--accent-success)' }}>✅ Yes</td>
                                    <td style={{ padding: '0.5rem', color: 'var(--accent-danger)' }}>❌ No</td>
                                </tr>
                            </tbody>
                        </table>
                    </GlassCard>
                </div>


            </section>
        </>
    );
};

export default LogicControl;

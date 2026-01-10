import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const Advanced = () => {
    return (
        <>
            {/* ES6 */}
            <section id="es6" className="content-section">
                <SectionHeader title="ES6+ Features" icon="fas fa-star" difficulty="Intermediate" timeEstimate="30 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is ES6?</h3>
                        </div>
                        <p><strong>ES6</strong> (ECMAScript 2015) is a major update to JavaScript.</p>
                        <p style={{ marginTop: '0.5rem' }}>It introduced modern features to make JavaScript easier to write, easier to read, and more powerful.</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Why ES6?</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Cleaner syntax (Less code)</li>
                            <li>Better performance</li>
                            <li>Modular programming</li>
                            <li>Essential for React/Angular</li>
                        </ul>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Major Features</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ let & const</h3>
                        <CodeBlock>
                            <pre><code>let age = 21;
                                const country = "India";</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>let</code> → value can change</li>
                            <li><code>const</code> → value cannot change</li>
                            <li>Block scoped (inside <code>&#123; &#125;</code>)</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ Arrow Functions</h3>
                        <CodeBlock>
                            <pre><code>const add = (a, b) =&gt; a + b;</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Shorter syntax</li>
                            <li>No <code>function</code> keyword</li>
                            <li>Automatically returns value</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>3️⃣ Template Literals</h3>
                        <CodeBlock>
                            <pre><code>let name = "Janani";
                                let age = 21;
                                console.log(`My name is $&#123;name&#125; and I am $&#123;age&#125;`);</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Uses backticks `</li>
                            <li><code>$&#123;&#125;</code> used to insert variables</li>
                            <li>Cleaner string formatting</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>4️⃣ Default Parameters</h3>
                        <CodeBlock>
                            <pre><code>function greet(name = "Guest") {'{'}
                                console.log(`Hello $&#123;name&#125;`);
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Default value used if argument not passed</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>5️⃣ Destructuring</h3>
                        <CodeBlock>
                            <pre><code>// Array
                                let numbers = [10, 20];
                                let [a, b] = numbers;

                                // Object
                                let user = {'{'} name: "Ajay", age: 22 {'}'};
                                let {'{'} name, age {'}'} = user;</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Extract values easily</li>
                            <li>Reduces repetitive code</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>6️⃣ Spread Operator (...)</h3>
                        <CodeBlock>
                            <pre><code>let arr1 = [1, 2];
                                let arr2 = [...arr1, 3, 4];</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Copies values</li>
                            <li>Used to merge arrays/objects</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>7️⃣ Rest Parameter (...)</h3>
                        <CodeBlock>
                            <pre><code>function sum(...numbers) {'{'}
                                return numbers.reduce((a, b) =&gt; a + b);
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Collects multiple arguments</li>
                            <li>Converts to array</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>8️⃣ Classes</h3>
                        <CodeBlock>
                            <pre><code>class Student {'{'}
                                constructor(name, age) {'{'}
                                this.name = name;
                                this.age = age;
                                {'}'}
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Cleaner syntax for objects</li>
                            <li>Supports OOP concepts</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>9️⃣ Modules</h3>
                        <CodeBlock>
                            <pre><code>export const add = (a, b) =&gt; a + b;

                                import {'{'} add {'}'} from "./math.js";</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Splits code into files</li>
                            <li>Improves maintainability</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>🔟 Promises</h3>
                        <CodeBlock>
                            <pre><code>let promise = new Promise((resolve, reject) =&gt; {'{'}
                                resolve("Success");
                                {'}'});</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Handles async operations</li>
                            <li>Avoids callback hell</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>1️⃣1️⃣ for...of Loop</h3>
                        <CodeBlock>
                            <pre><code>let arr = [1, 2, 3];
                                for (let value of arr) {'{'}
                                console.log(value);
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Loops through values</li>
                            <li>Cleaner than traditional loop</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>1️⃣2️⃣ Enhanced Objects</h3>
                        <CodeBlock>
                            <pre><code>let name = "JS";
                                let obj = {'{'} name {'}'};</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Shorter object syntax</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1rem' }}>
                    <GlassCard>
                        <h3>1️⃣3️⃣ Map</h3>
                        <CodeBlock>
                            <pre><code>let map = new Map();
                                map.set("a", 1);</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>Map</code> → key-value storage</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>1️⃣3️⃣ Set</h3>
                        <CodeBlock>
                            <pre><code>let set = new Set([1, 2, 2, 3]);</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>Set</code> → unique values only</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🆚 ES5 vs ES6</h3>
                        <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>ES5</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>ES6</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Variables</td><td style={{ padding: '0.5rem' }}>var</td><td style={{ padding: '0.5rem' }}>let, const</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Functions</td><td style={{ padding: '0.5rem' }}>function</td><td style={{ padding: '0.5rem' }}>Arrow</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Classes</td><td style={{ padding: '0.5rem' }}>❌</td><td style={{ padding: '0.5rem' }}>✅</td></tr>
                                <tr><td style={{ padding: '0.5rem' }}>Strings</td><td style={{ padding: '0.5rem' }}>+</td><td style={{ padding: '0.5rem' }}>Template</td></tr>
                            </tbody>
                        </table>
                    </GlassCard>
                    <GlassCard>
                        <h3>🌍 Where is ES6 Used?</h3>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                            <li>React</li>
                            <li>Angular</li>
                            <li>Node.js</li>
                            <li>Modern Web Apps</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="alert-box success" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ Final Summary</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>ES6 modernized JavaScript with cleaner syntax, better performance, and essential features for modern frameworks like React.</p>
                </div>
            </section>

            {/* CALLBACKS */}
            <section id="callbacks" className="content-section">
                <SectionHeader title="Callback Functions" icon="fas fa-phone" difficulty="Intermediate" timeEstimate="20 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is a Callback?</h3>
                        </div>
                        <p>A <strong>callback function</strong> is a function passed as an argument to another function and is executed later.</p>
                        <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                            <p><strong>🧠 Simple Definition:</strong><br />A function that runs after another function finishes its work.</p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Why use Callbacks?</h3>
                        <p>JavaScript is <strong>single-threaded</strong>. It can't wait for:</p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Server requests</li>
                            <li>Timers</li>
                            <li>File reading</li>
                        </ul>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Callbacks handle async operations without blocking execution.</p>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Examples</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ Basic Callback</h3>
                        <CodeBlock>
                            <pre><code>function greet(name, callback) {'{'}
                                console.log("Hello " + name);
                                callback();
                                {'}'}

                                function message() {'{'}
                                console.log("Welcome JS");
                                {'}'}

                                greet("Janani", message);</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>message</code> passed as parameter</li>
                            <li>Executed after greeting</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ Calculation Example</h3>
                        <CodeBlock>
                            <pre><code>function calculate(a, b, op) {'{'}
                                return op(a, b);
                                {'}'}

                                function add(x, y) {'{'}
                                return x + y;
                                {'}'}

                                console.log(calculate(5, 3, add));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Reusability & Flexibility</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>3️⃣ Asynchronous Task</h3>
                        <CodeBlock>
                            <pre><code>function fetchData(callback) {'{'}
                                setTimeout(() =&gt; {'{'}
                                callback("Data received");
                                {'}'}, 2000);
                                {'}'}

                                fetchData(res =&gt; console.log(res));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Simulates delay (2s)</li>
                            <li>Runs after task completion</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>🍔 Real-Life Example</h3>
                        <CodeBlock>
                            <pre><code>function orderFood(callback) {'{'}
                                console.log("Order placed");
                                setTimeout(callback, 3000);
                                {'}'}

                                function eatFood() {'{'}
                                console.log("Eating...");
                                {'}'}

                                orderFood(eatFood);</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Food must be prepared first</li>
                            <li>Callback ensures sequence</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>❌ Callback Hell</h3>
                        <CodeBlock>
                            <pre><code>setTimeout(() =&gt; {'{'}
                                console.log("Step 1");
                                setTimeout(() =&gt; {'{'}
                                console.log("Step 2");
                                setTimeout(() =&gt; {'{'}
                                console.log("Step 3");
                                {'}'}, 1000);
                                {'}'}, 1000);
                                {'}'}, 1000);</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: '#ef4444' }}>Problem: Hard to read & maintain.</p>
                        <div style={{ marginTop: '1rem' }}>
                            <strong>👉 Solution:</strong> Promises, Async/Await
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3>🆚 Callback vs Normal</h3>
                        <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse', marginTop: '0.5rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Normal</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Callback</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Execution</td><td style={{ padding: '0.5rem' }}>Immediate</td><td style={{ padding: '0.5rem' }}>Later</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Usage</td><td style={{ padding: '0.5rem' }}>General</td><td style={{ padding: '0.5rem' }}>Async</td></tr>
                                <tr><td style={{ padding: '0.5rem' }}>Flexibility</td><td style={{ padding: '0.5rem' }}>Less</td><td style={{ padding: '0.5rem' }}>More</td></tr>
                            </tbody>
                        </table>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>✅ Advantages</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Controls execution order</li>
                            <li>Handles async operations</li>
                            <li>Makes code reusable</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>❌ Disadvantages</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Callback Hell</li>
                            <li>Difficult error handling</li>
                            <li>Hard to debug</li>
                        </ul>
                    </GlassCard>
                </div>

                <GlassCard className="mt-4">
                    <h3>🌍 Where are Callbacks Used?</h3>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem' }}>Event Handling</span>
                        <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem' }}>Timers</span>
                        <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem' }}>API Calls (Old)</span>
                        <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.85rem' }}>Array Methods</span>
                    </div>
                </GlassCard>

                <div className="alert-box success" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ Final Summary</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Callback is a function passed to another function to control execution order, mainly for async tasks. Overuse can leads to Callback Hell, solvable by Promises.</p>
                </div>
            </section>

            {/* PROMISES */}
            <section id="promises" className="content-section">
                <SectionHeader title="Promises" icon="fas fa-handshake" difficulty="Intermediate" timeEstimate="25 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is a Promise?</h3>
                        </div>
                        <p>A <strong>Promise</strong> is an object representing the eventual completion (or failure) of an asynchronous operation.</p>
                        <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                            <p><strong>🧠 Simple Analogy:</strong><br />It's like a real-life promise: <em>"I promise to give you the result later."</em></p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 States of a Promise</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li><strong>Pending:</strong> Operation is in progress</li>
                            <li><strong>Fulfilled:</strong> Operation completed successfully</li>
                            <li><strong>Rejected:</strong> Operation failed</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    <GlassCard>
                        <h3>🔹 Basic Syntax</h3>
                        <CodeBlock>
                            <pre><code>const promise = new Promise((resolve, reject) =&gt; {'{'}
  // async operation
                                if (success) {'{'}
                                resolve("Success");
                                {'}'} else {'{'}
                                reject("Error");
                                {'}'}
                                {'}'});</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3>🔹 Using .then() & .catch()</h3>
                        <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                            <div><code>.then()</code> → Runs when promise is <strong>Fulfilled</strong></div>
                            <div><code>.catch()</code> → Runs when promise is <strong>Rejected</strong></div>
                        </div>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Examples</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ Simple Example</h3>
                        <CodeBlock>
                            <pre><code>let isInternetAvailable = true;

                                const p = new Promise((resolve, reject) =&gt; {'{'}
                                if (isInternetAvailable) {'{'}
                                resolve("Data loaded successfully");
                                {'}'} else {'{'}
                                reject("Network error");
                                {'}'}
                                {'}'});

                                p.then(res =&gt; console.log(res))
                                .catch(err =&gt; console.log(err));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>resolve()</code> → success</li>
                            <li><code>reject()</code> → failure</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ Real-Life (Simulated API)</h3>
                        <CodeBlock>
                            <pre><code>function getUserData() {'{'}
                                return new Promise((resolve, reject) =&gt; {'{'}
                                setTimeout(() =&gt; {'{'}
                                resolve("User data received");
                                {'}'}, 2000);
                                {'}'});
                                {'}'}

                                getUserData()
                                .then(data =&gt; console.log(data))
                                .catch(err =&gt; console.log(err));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>setTimeout</code> simulates server delay</li>
                            <li>Promise returns data after 2 seconds</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>3️⃣ Chaining Promises</h3>
                        <CodeBlock>
                            <pre><code>new Promise(resolve =&gt; resolve(10))
                                .then(result =&gt; result * 2) // 20
                                .then(result =&gt; result + 5) // 25
                                .then(result =&gt; console.log(result));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Output of one <code>.then()</code> goes to next</li>
                            <li>Avoids nested callbacks</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>4️⃣ Error Handling</h3>
                        <CodeBlock>
                            <pre><code>new Promise((resolve, reject) =&gt; {'{'}
                                reject("Something went wrong");
                                {'}'})
                                .then(result =&gt; console.log(result))
                                .catch(error =&gt; console.log(error));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>.catch()</code> handles all errors</li>
                            <li>Prevents app crash</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🆚 Promise vs Callback</h3>
                        <div className="grid-2" style={{ gap: '1rem' }}>
                            <div>
                                <strong style={{ fontSize: '0.85rem' }}>Callback:</strong>
                                <CodeBlock><pre><code>setTimeout(() =&gt; {'{'}
                                    console.log("Done");
                                    {'}'}, 1000);</code></pre></CodeBlock>
                            </div>
                            <div>
                                <strong style={{ fontSize: '0.85rem' }}>Promise:</strong>
                                <CodeBlock><pre><code>new Promise(res =&gt; {'{'}
                                    setTimeout(() =&gt; res("Done"), 1000);
                                    {'}'}).then(msg =&gt; console.log(msg));</code></pre></CodeBlock>
                            </div>
                        </div>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Promise is more readable and has easier error handling.</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>🌍 Where are Promises Used?</h3>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>API calls</li>
                            <li>File handling</li>
                            <li>Timers</li>
                            <li>Modern Frameworks</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1rem' }}>
                    <GlassCard>
                        <h3>✅ Why Promises are Important?</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Handles async operations</li>
                            <li>Avoids callback hell</li>
                            <li>Improves readability</li>
                            <li>Better error handling</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="alert-box success" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ Final Summary</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Promise represents future value (Pending, Fulfilled, Rejected). It uses <code>.then()</code> and <code>.catch()</code> and is the base concept for async/await.</p>
                </div>
            </section>

            {/* ASYNC */}
            <section id="async" className="content-section">
                <SectionHeader title="Async / Await" icon="fas fa-clock" difficulty="Advanced" timeEstimate="20 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is Async / Await?</h3>
                        </div>
                        <p><strong>Async/Await</strong> is a modern way to handle asynchronous operations in JavaScript.</p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Makes async code look like synchronous code</li>
                            <li>Easier to read and debug</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Important Rules</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li><code>async</code> is used before a function</li>
                            <li><code>await</code> is used inside async functions only</li>
                            <li><code>await</code> pauses execution until promise is resolved</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    <GlassCard>
                        <h3>🔹 Basic Syntax</h3>
                        <CodeBlock>
                            <pre><code>async function functionName() {'{'}
                                const result = await promise;
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3>🔹 Why use it?</h3>
                        <p style={{ fontSize: '0.9rem' }}>Solves <strong>Callback Hell</strong> and messy <strong>.then()</strong> chains.</p>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Examples</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ Simple Example</h3>
                        <CodeBlock>
                            <pre><code>function getData() {'{'}
                                return new Promise(resolve =&gt; {'{'}
                                setTimeout(() =&gt; resolve("Data"), 2000);
                                {'}'});
                                {'}'}

                                async function showData() {'{'}
                                const result = await getData();
                                console.log(result);
                                {'}'}

                                showData();</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Code looks synchronous</li>
                            <li>Waits for 2s delay</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>🍳 Real-Life (Cooking)</h3>
                        <CodeBlock>
                            <pre><code>async function prepareFood() {'{'}
                                console.log(await boilWater());
                                console.log(await cookRice());
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Water boils first, then rice cooks</li>
                            <li>Ensures proper order</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>3️⃣ Multiple Await</h3>
                        <CodeBlock>
                            <pre><code>async function steps() {'{'}
                                await step1();
                                await step2();
                                {'}'}</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Sequential execution.</p>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>4️⃣ Error Handling</h3>
                        <CodeBlock>
                            <pre><code>async function fetchData() {'{'}
                                try {'{'}
                                let data = await Promise.reject("Error");
                                {'}'} catch (error) {'{'}
                                console.log(error);
                                {'}'}
                                {'}'}</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Cleaner than <code>.catch()</code>.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🆚 Async/Await vs Promise</h3>
                        <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse', marginTop: '0.5rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Promise</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Async/Await</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Syntax</td><td style={{ padding: '0.5rem' }}>.then()</td><td style={{ padding: '0.5rem' }}>Sync-like</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Readability</td><td style={{ padding: '0.5rem' }}>Medium</td><td style={{ padding: '0.5rem' }}>High</td></tr>
                                <tr><td style={{ padding: '0.5rem' }}>Error Handling</td><td style={{ padding: '0.5rem' }}>.catch()</td><td style={{ padding: '0.5rem' }}>try/catch</td></tr>
                            </tbody>
                        </table>
                    </GlassCard>

                    <GlassCard>
                        <h3>🌍 Where is it Used?</h3>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>API calls</li>
                            <li>Database Ops</li>
                            <li>File handling</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="alert-box success" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ Final Summary</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Async/await handles async code, built on Promises. It makes code readable/maintainable and uses try...catch for errors.</p>
                </div>
            </section>

            {/* FETCH API */}
            <section id="fetch" className="content-section">
                <SectionHeader title="Fetch API" icon="fas fa-wifi" difficulty="Intermediate" timeEstimate="15 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is Fetch API?</h3>
                        </div>
                        <p>The <strong>Fetch API</strong> is a modern Web API used to make HTTP requests to servers.</p>
                        <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                            <p><strong>🧠 Simply Put:</strong><br />It's the tool used to communicate with the backend (get or send data).</p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Why use Fetch?</h3>
                        <p style={{ marginBottom: '0.5rem' }}>Before Fetch, we used <code>XMLHttpRequest</code> which was complex.</p>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Simple & Cleaner syntax</li>
                            <li>Promise-based</li>
                            <li>Better readability</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    <GlassCard>
                        <h3>🔹 What does it Return?</h3>
                        <p>Fetch always returns a <strong>Promise</strong>.</p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><strong>Resolves:</strong> When response is received</li>
                            <li><strong>Rejects:</strong> Only on network failure</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>🔹 Basic Syntax</h3>
                        <CodeBlock>
                            <pre><code>fetch(url)
                                .then(res =&gt; res.json())
                                .then(data =&gt; console.log(data))
                                .catch(err =&gt; console.log(err));</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Examples</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ Simple GET Request</h3>
                        <CodeBlock>
                            <pre><code>fetch("https://api.com/users")
                                .then(res =&gt; res.json())
                                .then(data =&gt; console.log(data))
                                .catch(err =&gt; console.log(err));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li><code>res.json()</code> converts JSON → JS Object</li>
                            <li>Handles errors with <code>.catch()</code></li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ Async / Await (Recommended)</h3>
                        <CodeBlock>
                            <pre><code>async function getUsers() {'{'}
                                try {'{'}
                                const res = await fetch(url);
                                const data = await res.json();
                                console.log(data);
                                {'}'} catch (err) {'{'}
                                console.log(err);
                                {'}'}
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Cleaner & easier to read</li>
                            <li>Best practice</li>
                        </ul>
                    </GlassCard>

                    <GlassCard className="mt-4" style={{ gridColumn: 'span 2' }}>
                        <h3>🌍 Real-Life Example</h3>
                        <CodeBlock>
                            <pre><code>async function loadUsers() {'{'}
                                const res = await fetch("https://api.com/users");
                                const users = await res.json();

                                users.forEach(user =&gt; {'{'}
                                console.log(user.name);
                                {'}'});
                                {'}'}</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Fetches user list</li>
                            <li>Loops and displays names</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>✅ Advantages</h3>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Modern & Promise-based</li>
                            <li>Cleaner syntax</li>
                            <li>Works great with Async/Await</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>⚠️ Limitations</h3>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Doesn't reject on HTTP 404/500</li>
                            <li>Needs manual error handling</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="alert-box success" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ Final Summary</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Fetch API is the modern way to make network requests. It returns a Promise and is best used with Async/Await for clean, readable code.</p>
                </div>
            </section>

            {/* MODULES */}
            <section id="modules" className="content-section">
                <SectionHeader title="Modules" icon="fas fa-puzzle-piece" difficulty="Intermediate" timeEstimate="10 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is a Module?</h3>
                        </div>
                        <p>A <strong>Module</strong> is a separate file that contains related code (variables, functions, classes).</p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Organizes code</li>
                            <li>Avoids naming conflicts</li>
                            <li>Increases reusability</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 How it Works?</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Code is split into <code>.js</code> files</li>
                            <li><strong>Export:</strong> Makes code available</li>
                            <li><strong>Import:</strong> Uses code in other files</li>
                        </ul>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Types of Exports</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ Named Export</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Export multiple values using their names.</p>
                        <CodeBlock>
                            <pre><code>// math.js
                                export function add(a, b) {'{'}
                                return a + b;
                                {'}'}
                                export function sub(a, b) {'{'}
                                return a - b;
                                {'}'}

// main.js
                                import {'{'} add, sub {'}'} from "./math.js";
                                console.log(add(5, 3));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>Must use <code>{'{'} {'}'}</code> to import</li>
                            <li>Names must match exactly</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ Default Export</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Export only ONE value per file.</p>
                        <CodeBlock>
                            <pre><code>// greet.js
                                export default function greet(name) {'{'}
                                return `Hello $&#123;name&#125;`;
                                {'}'}

// main.js
                                import greet from "./greet.js";
                                console.log(greet("Janani"));</code></pre>
                        </CodeBlock>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <li>No <code>{'{'} {'}'}</code> needed</li>
                            <li>Can use any name when importing</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    <GlassCard>
                        <h3>🔹 Exporting Variables & Classes</h3>
                        <CodeBlock>
                            <pre><code>// Variables
                                export const pi = 3.14;

                                // Classes
                                export default class Student {'{'}
                                constructor(name) {'{'}
                                this.name = name;
                                {'}'}
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3>🔹 Mixing Both</h3>
                        <CodeBlock>
                            <pre><code>// utils.js
                                export const city = "Chennai";
                                export default function welcome() {'{'}...{'}'}

// Import
                                import welcome, {'{'} city {'}'} from "./utils.js";</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🆚 Named vs Default</h3>
                        <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse', marginTop: '0.5rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Named</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Quantity</td><td style={{ padding: '0.5rem' }}>Many</td><td style={{ padding: '0.5rem' }}>One</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.5rem' }}>Import</td><td style={{ padding: '0.5rem' }}>{'{'} { } {'}'}</td><td style={{ padding: '0.5rem' }}>No { }</td></tr>
                                <tr><td style={{ padding: '0.5rem' }}>Naming</td><td style={{ padding: '0.5rem' }}>Exact</td><td style={{ padding: '0.5rem' }}>Flexible</td></tr>
                            </tbody>
                        </table>
                    </GlassCard>

                    <GlassCard>
                        <h3>🌍 Usage in HTML</h3>
                        <p style={{ marginTop: '0.5rem' }}>You must specify <code>type="module"</code>.</p>
                        <CodeBlock>
                            <pre><code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="alert-box success" style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                    <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ Final Summary</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Modules help organize code by splitting it into files. Use <strong>Named Export</strong> for utilities and <strong>Default Export</strong> for main components.</p>
                </div>
            </section>


        </>
    );
};

export default Advanced;

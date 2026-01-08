import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const Advanced = () => {
    return (
        <>
            {/* ES6 */}
            <section id="es6" className="content-section">
                <SectionHeader title="ES6+ Features" icon="fas fa-star" difficulty="Intermediate" timeEstimate="10 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3>Destructuring</h3>
                        <CodeBlock>
                            <pre><code>let [x, y] = [10, 20];
                                let {'{'}name, age{'}'} = user;</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3>Spread</h3>
                        <CodeBlock>
                            <pre><code>let all = [...nums, 3, 4];</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
            </section>

            {/* ASYNC */}
            <section id="async" className="content-section">
                <SectionHeader title="Async / Await" icon="fas fa-clock" difficulty="Advanced" timeEstimate="20 min" />

                <p className="desc">
                    Asynchronous programming allows long-running operations (like I/O) to run without blocking the
                    execution thread.
                </p>

                <GlassCard>
                    <h3><i className="fas fa-handshake"></i> Promise</h3>
                    <p>An object representing the eventual completion or failure of an async operation.</p>
                    <CodeBlock>
                        <pre><code>let myPromise = new Promise(function(resolve, reject) {'{'}
                            setTimeout(function() {'{'}
                            resolve("Success!");
                            {'}'}, 1000);
                            {'}'});

                            myPromise.then(function(value) {'{'}
                            console.log(value);
                            {'}'});</code></pre>
                    </CodeBlock>
                </GlassCard>

                <GlassCard>
                    <h3><i className="fas fa-magic"></i> Async/Await</h3>
                    <p>Syntactic sugar for Promises.</p>
                    <CodeBlock>
                        <pre><code>async function myFunc() {'{'}
                            let response = await myPromise;
                            console.log(response);
                            {'}'}</code></pre>
                    </CodeBlock>
                </GlassCard>

                <GlassCard className="mt-4">
                    <h3><i className="fas fa-layer-group"></i> Parallel Execution</h3>
                    <p>Run multiple promises at the same time.</p>
                    <CodeBlock>
                        <pre><code>let p1 = fetch('/user');
                            let p2 = fetch('/posts');

                            let [user, posts] = await Promise.all([p1, p2]);</code></pre>
                    </CodeBlock>
                </GlassCard>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444' }}>
                    <div className="info-card-header">
                        <i className="fas fa-clock" style={{ color: '#ef4444' }}></i>
                        <h3 style={{ color: '#ef4444' }}>Sync vs Async Analogy</h3>
                    </div>
                    <p>
                        <strong>Sync:</strong> Like standing in a queue at a fast-food joint. You order, wait for food, take it, then the next person orders.<br />
                        <strong>Async:</strong> Like a sit-down restaurant. You order and can talk/play on phone while waiting. When food is ready (Promise Resolved), you eat.
                    </p>
                </div>
            </section>

            {/* FETCH API */}
            <section id="fetch" className="content-section">
                <SectionHeader title="Fetch API" icon="fas fa-wifi" difficulty="Intermediate" timeEstimate="10 min" />

                <GlassCard>
                    <h3><i className="fas fa-download"></i> Making Requests</h3>
                    <CodeBlock>
                        <pre><code>fetch('https://api.example.com/data')
                            .then(response =&gt; response.json())
                            .then(data =&gt; console.log(data))
                            .catch(error =&gt; console.error('Error:', error));</code></pre>
                    </CodeBlock>
                </GlassCard>

                <GlassCard>
                    <h3><i className="fas fa-upload"></i> Async Fetch (POST)</h3>
                    <CodeBlock>
                        <pre><code>async function postData() {'{'}
                            const res = await fetch('url', {'{'}
                            method: 'POST',
                            headers: {'{'} 'Content-Type': 'application/json' {'}'},
                            body: JSON.stringify({'{'} a: 1 {'}'})
                            {'}'});
                            const data = await res.json();
                            {'}'}</code></pre>
                    </CodeBlock>
                </GlassCard>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-pizza-slice" style={{ color: '#3b82f6' }}></i>
                        <h3 style={{ color: '#3b82f6' }}>Real World Example</h3>
                    </div>
                    <p>
                        <strong>Fetch</strong> is like ordering a pizza online.
                        You send a request (Order), wait for the server (Kitchen) to process it, and eventually, you get a response (Pizza) delivered to your door!
                    </p>
                </div>
            </section>

            {/* MODULES */}
            <section id="modules" className="content-section">
                <SectionHeader title="Modules" icon="fas fa-puzzle-piece" difficulty="Intermediate" timeEstimate="8 min" />

                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-file-export"></i> Export</h3>
                        <CodeBlock>
                            <pre><code>// lib.js
                                export const name = "Jesse";
                                export function hello() {'{'}
                                return "Hello";
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3><i className="fas fa-file-import"></i> Import</h3>
                        <CodeBlock>
                            <pre><code>// main.js
                                import {'{'} name, hello {'}'} from "./lib.js";</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b' }}>
                    <div className="info-card-header">
                        <i className="fas fa-cubes" style={{ color: '#f59e0b' }}></i>
                        <h3 style={{ color: '#f59e0b' }}>Modules Analogy</h3>
                    </div>
                    <p>
                        Think of simple code as one giant <strong>LEGO</strong> piece.
                        <strong>Modules</strong> let you break that giant piece into smaller, reusable LEGO bricks. You can build a car, a house, or a robot using the same bricks (functions/variables) in different combinations!
                    </p>
                </div>
            </section>

            {/* ITERATORS */}
            <section id="iterators" className="content-section">
                <SectionHeader title="Iterators & Generators" icon="fas fa-sync-alt" difficulty="Advanced" timeEstimate="15 min" />

                <GlassCard>
                    <h3><i className="fas fa-random"></i> Generators</h3>
                    <p>Functions that can be paused and resumed.</p>
                    <CodeBlock>
                        <pre><code>function* idMaker() {'{'}
                            let index = 0;
                            while (true)
                            yield index++;
                            {'}'}

                            let gen = idMaker();
                            console.log(gen.next().value); // 0
                            console.log(gen.next().value); // 1</code></pre>
                    </CodeBlock>
                </GlassCard>
            </section>

            {/* PROXIES */}
            <section id="proxies" className="content-section">
                <SectionHeader title="Proxies" icon="fas fa-mask" difficulty="Advanced" timeEstimate="15 min" />

                <GlassCard>
                    <h3><i className="fas fa-user-secret"></i> Proxy Object</h3>
                    <p>Wrap an object to intercept operations.</p>
                    <CodeBlock>
                        <pre><code>const handler = {'{'}
                            get: function(obj, prop) {'{'}
                            return prop in obj ? obj[prop] : "Not found";
                            {'}'}
                            {'}'};

                            const p = new Proxy({'{}'}, handler);
                            p.a = 1;
                            console.log(p.a); // 1
                            console.log(p.b); // "Not found"</code></pre>
                    </CodeBlock>
                </GlassCard>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderLeft: '4px solid #8b5cf6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-shield-alt" style={{ color: '#8b5cf6' }}></i>
                        <h3 style={{ color: '#8b5cf6' }}>Proxy Explained</h3>
                    </div>
                    <p>
                        A <strong>Proxy</strong> acts like a <strong>Security Guard</strong>.<br />
                        Before you can access or change anything inside the house (Object), the guard checks if you are allowed or logs your visit (Intercepts).
                    </p>
                </div>
            </section>
        </>
    );
};

export default Advanced;

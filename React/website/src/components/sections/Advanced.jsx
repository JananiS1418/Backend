import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';
import TamilBox from '../common/TamilBox';

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
                    <p>Syntactic sugar for Promises. Makes async code look synchronous.</p>
                    <CodeBlock>
                        <pre><code>async function myFunc() {'{'}
                            let response = await myPromise;
                            console.log(response);
                            {'}'}</code></pre>
                    </CodeBlock>
                </GlassCard>

                <TamilBox>
                    <strong>Sync vs Async:</strong><br />
                    <strong>Sync:</strong> ஓட்டலில் வரிசையில் நின்று பில் கட்டுவது. ஒருவர் முடித்த பின் தான் அடுத்தவர்.<br />
                    <strong>Async:</strong> ஓட்டலில் ஆர்டர் கொடுத்துவிட்டு காத்திருப்பது. ஆர்டர் வரும் வரை நீங்கள் போன் பார்க்கலாம் (வேறு வேலை செய்யலாம்). உணவு தயாரானதும் (Promise Resolved), சாப்பிடலாம்.
                </TamilBox>
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
                    <h3><i className="fas fa-upload"></i> Async Fetch</h3>
                    <CodeBlock>
                        <pre><code>async function getData() {'{'}
                            try {'{'}
                            const response = await fetch('url');
                            const data = await response.json();
                            console.log(data);
                            {'}'} catch (error) {'{'}
                            console.error(error);
                            {'}'}
                            {'}'}</code></pre>
                    </CodeBlock>
                </GlassCard>
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

                <TamilBox>
                    <strong>Proxy:</strong> ஒரு செக்யூரிட்டி கார்டு (Security Guard) போல. வீட்டுக்குள் (Object) யாராவது போகும்போதோ அல்லது எதையாவது எடுக்கும்போதோ, அவர் சோதனை செய்வார் (Intercept).
                </TamilBox>
            </section>
        </>
    );
};

export default Advanced;

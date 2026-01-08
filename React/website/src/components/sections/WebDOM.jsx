import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const WebDOM = () => {
    return (
        <>
            {/* DOM */}
            <section id="dom" className="content-section">
                <SectionHeader title="DOM Deep Dive" icon="fas fa-code" difficulty="Intermediate" timeEstimate="20 min" />
                <p className="desc">
                    The Document Object Model (DOM) is an interface to change the content, style, and structure of the
                    document.
                </p>

                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-bullseye"></i> Selecting Elements</h3>
                        <CodeBlock>
                            <pre><code>// By ID
                                let el = document.getElementById("demo");

                                // By Query - CSS Selector
                                let els = document.querySelectorAll(".myClass");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-edit"></i> Changing Content</h3>
                        <CodeBlock>
                            <pre><code>// Change HTML
                                el.innerHTML = "Hello &lt;b&gt;World&lt;/b&gt;";

                                // Change Style
                                el.style.color = "red";
                                el.style.display = "none";</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard className="mt-4">
                        <h3><i className="fas fa-plus-square"></i> Create & Remove</h3>
                        <CodeBlock>
                            <pre><code>// Create
                                let btn = document.createElement("button");
                                btn.innerText = "Click Me";
                                document.body.appendChild(btn);

                                // Remove
                                btn.remove();</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard className="mt-4">
                        <h3><i className="fas fa-list"></i> Class List</h3>
                        <CodeBlock>
                            <pre><code>el.classList.add("active");
                                el.classList.remove("hidden");
                                el.classList.toggle("dark-mode");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-sitemap" style={{ color: '#3b82f6' }}></i>
                        <h3 style={{ color: '#3b82f6' }}>What is the DOM?</h3>
                    </div>
                    <p>
                        Think of the DOM as the <strong>Blueprint</strong> of your house (website).<br />
                        JavaScript is the <strong>Engineer</strong> who can use the blueprint to move walls (Layout), change colors (Styles), or build new rooms (Elements) dynamically.
                    </p>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-check-double" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Pro Tip: Cache Your Selectors</h3>
                    </div>
                    <p>
                        Searching the DOM (e.g., <code>document.getElementById</code>) is "expensive" for the browser.
                        If you need to use an element multiple times, save it in a variable once and reuse it!
                    </p>
                </div>
            </section>

            {/* EVENTS */}
            <section id="events" className="content-section">
                <SectionHeader title="Events" icon="fas fa-mouse-pointer" difficulty="Beginner" timeEstimate="10 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-bolt"></i> Event Listeners</h3>
                        <p>React to user actions like clicks, mouse moves, keys.</p>
                        <CodeBlock>
                            <pre><code>let btn = document.getElementById("myBtn");

                                btn.addEventListener("click", function(e) {'{'}
                                console.log(e.target); // The element clicked
                                e.preventDefault();    // Stop default action
                                {'}'});</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-layer-group"></i> Propagation</h3>
                        <p>Bubbling vs Capturing</p>
                        <CodeBlock>
                            <pre><code>// Bubbling (Default)
                                // Inner -&gt; Outer
                                p.addEventListener("click", fn, false);

                                // Capturing
                                // Outer -&gt; Inner
                                div.addEventListener("click", fn, true);

                                // Stop
                                e.stopPropagation();</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem' }}>
                    <div className="info-card-header">
                        <i className="fas fa-info-circle"></i>
                        <h3>Event Analogy</h3>
                    </div>
                    <p>
                        <strong>Events:</strong> Waiting for a signal.<br />
                        Like a doorbell: When someone presses it (Event: Click), the bell rings (Function Execution).
                    </p>
                </div>
            </section>

            {/* STORAGE */}
            <section id="storage" className="content-section">
                <SectionHeader title="Web Storage" icon="fas fa-database" difficulty="Beginner" timeEstimate="8 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-hdd"></i> Local Storage</h3>
                        <p>Persists even after browser closes</p>
                        <CodeBlock>
                            <pre><code>localStorage.setItem("name", "John");
                                let n = localStorage.getItem("name");
                                localStorage.removeItem("name");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-memory"></i> Session Storage</h3>
                        <p>Lost when tab is closed</p>
                        <CodeBlock>
                            <pre><code>sessionStorage.setItem("id", "123");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-database" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Storage Comparison</h3>
                    </div>
                    <p>
                        <strong>Local Storage:</strong> Like writing in a <strong>hardcover notebook</strong>. It stays on your desk until you explicitly throw it away.<br />
                        <strong>Session Storage:</strong> Like writing on a <strong>whiteboard</strong>. It is wiped clean the moment you leave the room (or close the browser tab).<br />
                        <strong>Cookies:</strong> Like a <strong>sticky note</strong> attached to every letter you send. The server reads it every time you make a request.
                    </p>
                </div>
            </section>

            {/* APIS */}
            <section id="apis" className="content-section">
                <SectionHeader title="Web APIs" icon="fas fa-plug" difficulty="Intermediate" timeEstimate="10 min" />

                <p className="desc">
                    Application Programming Interfaces provided by the browser.
                </p>

                <GlassCard>
                    <h3><i className="fas fa-map-marker-alt"></i> Geolocation Example</h3>
                    <CodeBlock>
                        <pre><code>navigator.geolocation.getCurrentPosition(pos =&gt; {'{'}
                            let lat = pos.coords.latitude;
                            let long = pos.coords.longitude;
                            {'}'});</code></pre>
                    </CodeBlock>
                </GlassCard>
            </section>

            {/* COOKIES */}
            <section id="cookies" className="content-section">
                <SectionHeader title="Cookies" icon="fas fa-cookie" difficulty="Intermediate" timeEstimate="5 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-cookie-bite"></i> Basic Cookies</h3>
                        <CodeBlock>
                            <pre><code>// Create
                                document.cookie = "user=John";

                                // Read
                                let x = document.cookie;

                                // Delete (Expire it)
                                document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-shield-alt"></i> Attributes</h3>
                        <CodeBlock>
                            <pre><code>// Secure (HTTPS only)
                                document.cookie = "user=John; Secure";

                                // Expires (Time)
                                document.cookie = "user=John; max-age=3600";

                                // Path (Scope)
                                document.cookie = "user=John; path=/";</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1rem' }}>
                    <GlassCard>
                        <h3><i className="fas fa-lock"></i> Security Flags</h3>
                        <p>Critical for protecting user data.</p>
                        <ul>
                            <li><strong>HttpOnly:</strong> Server-side only. JavaScript cannot access it (Prevents XSS).</li>
                            <li><strong>SameSite:</strong> Strict/Lax. Prevents CSRF attacks.</li>
                            <li><strong>Secure:</strong> Only sent over encrypted (HTTPS) connections.</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="far fa-id-badge"></i> Use Cases</h3>
                        <ul>
                            <li><strong>Session Management:</strong> Logins, shopping carts.</li>
                            <li><strong>Personalization:</strong> User themes, preferences.</li>
                            <li><strong>Tracking:</strong> Analytics, ad behavior.</li>
                        </ul>
                    </GlassCard>
                </div>
            </section>
        </>
    );
};

export default WebDOM;

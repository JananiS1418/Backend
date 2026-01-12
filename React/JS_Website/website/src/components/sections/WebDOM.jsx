import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const WebDOM = () => {
    return (
        <>
            {/* DOM */}
            <section id="dom" className="content-section">
                <SectionHeader title="DOM Deep Dive" icon="fas fa-code" difficulty="Intermediate" timeEstimate="25 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is DOM?</h3>
                        </div>
                        <p><strong>DOM</strong> stands for <strong>Document Object Model</strong>.</p>
                        <p style={{ marginTop: '0.5rem' }}>It is a programming interface that represents HTML as a tree structure, where each element is an object.</p>

                        <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                            <p><strong>🧠 Simple Definition:</strong><br />DOM is the bridge between HTML and JavaScript.</p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Why DOM is Important?</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Change text dynamically</li>
                            <li>Apply styles using JavaScript</li>
                            <li>Handle button clicks</li>
                            <li>Create interactive web pages</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '2rem' }}>
                    <div className="info-card-header">
                        <i className="fas fa-sitemap"></i>
                        <h3>How DOM Works</h3>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>Browser loads HTML ➝ Converts it into a DOM tree ➝ JavaScript accesses elements ➝ Page updates without reloading.</li>
                    </ul>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 DOM Selectors</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ getElementById()</h3>
                        <p>Selects one element by ID.</p>
                        <CodeBlock>
                            <pre><code>let el = document.getElementById("title");</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ getElementsByClassName()</h3>
                        <p>Returns a collection of elements.</p>
                        <CodeBlock>
                            <pre><code>let els = document.getElementsByClassName("text");
                                console.log(els[0]); // Access via index</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>3️⃣ getElementsByTagName()</h3>
                        <p>Selects elements by tag name (e.g., "p").</p>
                        <CodeBlock>
                            <pre><code>let paragraphs = document.getElementsByTagName("p");</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>4️⃣ querySelector()</h3>
                        <p>Selects the <strong>first</strong> matching element.</p>
                        <CodeBlock>
                            <pre><code>let el = document.querySelector(".text");</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard className="mt-4">
                        <h3>5️⃣ querySelectorAll()</h3>
                        <p>Returns all matching elements (NodeList).</p>
                        <CodeBlock>
                            <pre><code>let els = document.querySelectorAll(".text");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 DOM Properties</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>📝 innerText vs innerHTML</h3>
                        <CodeBlock>
                            <pre><code>// innerText (Visible text)
                                el.innerText = "Welcome";

                                // innerHTML (Inserts HTML)
                                el.innerHTML = "&lt;b&gt;Hello&lt;/b&gt;";</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3>🎨 Style & Classes</h3>
                        <CodeBlock>
                            <pre><code>// Style
                                el.style.color = "blue";

                                // Classes
                                el.classList.add("active");
                                el.classList.toggle("dark");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard className="mt-4">
                        <h3>🔤 Value (Inputs)</h3>
                        <CodeBlock>
                            <pre><code>let val = document.getElementById("in").value;</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

            </section>

            {/* EVENTS */}
            <section id="events" className="content-section">
                <SectionHeader title="Events" icon="fas fa-mouse-pointer" difficulty="Intermediate" timeEstimate="15 min" />

                <p className="desc">An event is an action performed by the user (Click, Input, Submit, etc.).</p>

                <div className="grid-2">
                    <GlassCard>
                        <h3>🔹 Event Listener (Recommended)</h3>
                        <p>Listens for an event and runs a function.</p>
                        <CodeBlock>
                            <pre><code>element.addEventListener("event", function);</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3>❌ Inline (Not Recommended)</h3>
                        <CodeBlock>
                            <pre><code>&lt;button onclick="alert('Hi')"&gt;Click&lt;/button&gt;</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Not scalable for large projects.</p>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Examples</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>🖱️ Click Event</h3>
                        <CodeBlock>
                            <pre><code>let btn = document.getElementById("btn");

                                btn.addEventListener("click", function () {'{'}
                                alert("Button clicked");
                                {'}'});</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3>⌨️ Input Event</h3>
                        <CodeBlock>
                            <pre><code>let input = document.getElementById("myInput");

                                input.addEventListener("input", function (e) {'{'}
                                console.log(e.target.value);
                                {'}'});</code></pre>
                        </CodeBlock>
                        <div className="card-footer">
                            <span className="tip"><code>e.target.value</code> gives the current text.</span>
                        </div>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-check-double" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Listener vs Handler</h3>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Event Listener:</strong> Can attach multiple events, standard modern approach.</li>
                        <li><strong>Event Handler (onclick):</strong> Only one event allowed, older method.</li>
                    </ul>
                </div>

            </section>

            {/* STORAGE */}
            <section id="storage" className="content-section">
                <SectionHeader title="Web Storage" icon="fas fa-database" difficulty="Beginner" timeEstimate="20 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is Web Storage?</h3>
                        </div>
                        <p>Web Storage allows web applications to store data in the browser <strong>permanently</strong> or for a <strong>session</strong>.</p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Save user preferences</li>
                            <li>Store login/session data</li>
                            <li>Reduce server requests</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Types of Storage</h3>
                        <ul style={{ paddingLeft: '1.2rem' }}>
                            <li><strong>Local Storage:</strong> Permanent</li>
                            <li><strong>Session Storage:</strong> Tab-based</li>
                            <li><strong>Cookies:</strong> Server-based</li>
                        </ul>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 1️⃣ Local Storage</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>✅ Properties</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li>Stores data <strong>permanently</strong>.</li>
                            <li>Capacity: ~5-10 MB.</li>
                            <li>Not sent to server.</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>💻 Methods</h3>
                        <CodeBlock>
                            <pre><code>// Store
                                localStorage.setItem("name", "Janani");

                                // Get
                                let name = localStorage.getItem("name");

                                // Remove
                                localStorage.removeItem("name");

                                // Clear All
                                localStorage.clear();</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 2️⃣ Session Storage</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>✅ Properties</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li>Stores data for <strong>one session</strong>.</li>
                            <li>Deleted when tab/window is closed.</li>
                            <li>Capacity: ~5 MB.</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>💻 Methods</h3>
                        <CodeBlock>
                            <pre><code>// Same syntax as localStorage
                                sessionStorage.setItem("user", "Ajay");

                                let user = sessionStorage.getItem("user");

                                sessionStorage.removeItem("user");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 3️⃣ Cookies</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>✅ Properties</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li>Sent to server with every request.</li>
                            <li>Has expiry date and size limit (~4KB).</li>
                            <li>Used for Authentication.</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>💻 Usage</h3>
                        <CodeBlock>
                            <pre><code>// Create
                                document.cookie = "user=Janani; expires=Fri, 31 Dec 2026 UTC";

                                // Read
                                console.log(document.cookie);</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-lightbulb" style={{ color: '#3b82f6' }}></i>
                        <h3 style={{ color: '#3b82f6' }}>When to Use What?</h3>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Local Storage:</strong> Theme settings, Language preference.</li>
                        <li><strong>Session Storage:</strong> Form data, OTP flows.</li>
                        <li><strong>Cookies:</strong> Authentication tokens.</li>
                    </ul>
                </div>

                <div className="alert-box warning" style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                    <p style={{ color: '#f59e0b', fontWeight: 'bold' }}>⚠️ Important:</p>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Web Storage stores only strings. To store objects, use <code>JSON.stringify()</code> and <code>JSON.parse()</code>.</p>
                </div>

            </section>

            {/* APIS */}
            <section id="apis" className="content-section">
                <SectionHeader title="Web APIs" icon="fas fa-plug" difficulty="Intermediate" timeEstimate="25 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is a Web API?</h3>
                        </div>
                        <p><strong>API</strong> stands for <strong>Application Programming Interface</strong>.</p>
                        <p style={{ marginTop: '0.5rem' }}>It allows two applications to communicate with each other over the internet.</p>
                        <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                            <p><strong>🧠 Simple Definition:</strong><br />A Web API helps a website send data to a server and receive data back.</p>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3>🏧 Real-World Example</h3>
                        <p><strong>Think of an ATM machine:</strong></p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <li>You insert card → <strong>Request</strong></li>
                            <li>Bank server processes → <strong>Response</strong></li>
                            <li>ATM shows balance.</li>
                        </ul>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>The API is the communication channel between the ATM and the Bank Server.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🔹 Why are they Important?</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Connect Frontend and Backend.</li>
                            <li>Share data between systems.</li>
                            <li>Enable mobile & web apps to use same data.</li>
                            <li>Integrate third-party services (e.g., Maps, Payments).</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>🔹 Where are they Used?</h3>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Login & Registration</li>
                            <li>Product Listings (E-commerce)</li>
                            <li>Payment Gateways</li>
                            <li>Weather Apps</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '2rem' }}>
                    <div className="info-card-header">
                        <i className="fas fa-project-diagram"></i>
                        <h3>How it Works (Step-by-Step)</h3>
                    </div>
                    <ol style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li><strong>Client</strong> (Browser/App) sends a <strong>Request</strong>.</li>
                        <li><strong>Web API</strong> receives the request.</li>
                        <li><strong>Server</strong> processes the request.</li>
                        <li><strong>Server</strong> sends a <strong>Response</strong> back.</li>
                        <li><strong>Client</strong> displays the data.</li>
                    </ol>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 API Components</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>📦 Request Components</h3>
                        <table style={{ width: '100%', fontSize: '0.85rem', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.25rem' }}><strong>Endpoint</strong></td><td style={{ padding: '0.25rem' }}>URL of the API</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.25rem' }}><strong>Method</strong></td><td style={{ padding: '0.25rem' }}>Action (GET, POST...)</td></tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}><td style={{ padding: '0.25rem' }}><strong>Headers</strong></td><td style={{ padding: '0.25rem' }}>Meta info (Auth, Type)</td></tr>
                                <tr><td style={{ padding: '0.25rem' }}><strong>Body</strong></td><td style={{ padding: '0.25rem' }}>Data sent to server</td></tr>
                            </tbody>
                        </table>
                    </GlassCard>
                    <GlassCard>
                        <h3>📄 Response (JSON)</h3>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>APIs usually return JSON data.</p>
                        <CodeBlock>
                            <pre><code>{`{
  "status": "success",
  "message": "User created"
}`}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Methods & Status Codes</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>📡 HTTP Methods</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li><span style={{ color: 'var(--accent-success)', fontWeight: 'bold' }}>GET</span> → Get data</li>
                            <li><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>POST</span> → Send data</li>
                            <li><span style={{ color: '#f59e0b', fontWeight: 'bold' }}>PUT</span> → Update full data</li>
                            <li><span style={{ color: '#f59e0b', fontWeight: 'bold' }}>PATCH</span> → Update partial data</li>
                            <li><span style={{ color: '#ef4444', fontWeight: 'bold' }}>DELETE</span> → Remove data</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>🚦 Status Codes</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li><span style={{ color: 'var(--accent-success)' }}>200</span> → Success</li>
                            <li><span style={{ color: 'var(--accent-success)' }}>201</span> → Created</li>
                            <li><span style={{ color: '#f59e0b' }}>400</span> → Bad Request</li>
                            <li><span style={{ color: '#ef4444' }}>401</span> → Unauthorized</li>
                            <li><span style={{ color: '#ef4444' }}>404</span> → Not Found</li>
                            <li><span style={{ color: '#ef4444' }}>500</span> → Server Error</li>
                        </ul>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Types of Web APIs</h3>
                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ REST API</h3>
                        <p style={{ fontSize: '0.85rem' }}>Most Common. Uses HTTP, URLs, JSON, Stateless.</p>
                        <CodeBlock><pre><code>/users
                            /products/1</code></pre></CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3>2️⃣ SOAP API</h3>
                        <p style={{ fontSize: '0.85rem' }}>Uses XML. Strict & Secure. Used in Banking.</p>
                    </GlassCard>
                    <GlassCard className="mt-4">
                        <h3>3️⃣ Public APIs</h3>
                        <p style={{ fontSize: '0.85rem' }}>Third-party services like Google Maps, Weather, Payment Gateways.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🆚 API vs Website</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li><strong>API:</strong> Returns Data (JSON). Used by Apps.</li>
                            <li><strong>Website:</strong> Returns HTML. Used by Users.</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3>🆚 API vs Library</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li><strong>API:</strong> Built-in / External Service. (DOM API)</li>
                            <li><strong>Library:</strong> Framework based code. (React)</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3 style={{ color: 'var(--accent-success)' }}>✅ Advantages</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li>Platform Independent</li>
                            <li>Scalable & Reusable</li>
                            <li>Faster Development</li>
                        </ul>
                    </GlassCard>
                    <GlassCard>
                        <h3 style={{ color: '#ef4444' }}>❌ Disadvantages</h3>
                        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                            <li>Network Dependency</li>
                            <li>Security Risks</li>
                            <li>Requires Error Handling</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-user-lock" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Real-Time Use Case: Login</h3>
                    </div>
                    <ol style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                        <li>App sends <strong>username & password</strong>.</li>
                        <li><strong>Web API</strong> validates credentials against database.</li>
                        <li>API sends <strong>success/failure</strong> response.</li>
                        <li>App navigates user to Dashboard (if success).</li>
                    </ol>
                </div>



            </section>
        </>
    );
};

export default WebDOM;

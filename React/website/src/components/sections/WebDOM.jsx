import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';
import TamilBox from '../common/TamilBox';

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
                </div>
                <TamilBox>
                    <strong>DOM:</strong> ஒரு வீட்டின் வரைபடம் (Plan) போல. இந்த Plan-ஐ வைத்து சுவரை இடிக்கலாம் (Change Content), பெயிண்ட் அடிக்கலாம் (Style), அல்லது புது அறை கட்டலாம் (Create Element). எல்லாம் JavaScript என்ற இன்ஜினியர் கையில்!
                </TamilBox>
            </section>

            {/* EVENTS */}
            <section id="events" className="content-section">
                <SectionHeader title="Events" icon="fas fa-mouse-pointer" difficulty="Beginner" timeEstimate="10 min" />
                <GlassCard>
                    <h3><i className="fas fa-bolt"></i> Event Listeners</h3>
                    <p>React to user actions like clicks, mouse moves, keys.</p>
                    <CodeBlock>
                        <pre><code>let btn = document.getElementById("myBtn");

                            btn.addEventListener("click", function() {'{'}
                            alert("Button Clicked!");
                            {'}'});</code></pre>
                    </CodeBlock>
                </GlassCard>
                <TamilBox>
                    <strong>Events:</strong> காத்துக்கொண்டிருத்தல். "வாசல் மணி அடித்தால் கதவை திற" என்பது போல. Button-ஐ Click செய்தால் (மணி அடித்தால்), Function வேலை செய்யும் (கதவு திறக்கும்).
                </TamilBox>
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
                <TamilBox>
                    <strong>Local Storage:</strong> பையில் போட்டு வைப்பது போல. நாம் எடுக்கும் வரை அங்கேயே இருக்கும்.<br />
                    <strong>Session Storage:</strong> கையில் வைத்திருப்பது போல. கையை கழுவினால் (Tab Close) போய்விடும்.
                </TamilBox>
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
                <GlassCard>
                    <h3><i className="fas fa-cookie-bite"></i> Managing Cookies</h3>
                    <CodeBlock>
                        <pre><code>// Set Cookie
                            document.cookie = "username=John; expires=Thu, 18 Dec 2024 12:00:00 UTC";

                            // Read Cookie
                            let x = document.cookie;</code></pre>
                    </CodeBlock>
                </GlassCard>
            </section>
        </>
    );
};

export default WebDOM;

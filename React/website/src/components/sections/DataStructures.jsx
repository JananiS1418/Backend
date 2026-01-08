import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const DataStructures = () => {
    return (
        <>
            {/* ARRAYS */}
            <section id="arrays" className="content-section">
                <SectionHeader title="Arrays & Methods" icon="fas fa-list" difficulty="Intermediate" timeEstimate="20 min" />
                <div className="grid-3">
                    <GlassCard>
                        <h3><i className="fas fa-plus-circle"></i> Add/Remove</h3>
                        <CodeBlock>
                            <pre><code>// End
                                arr.push(4);    // Add to end
                                arr.pop();      // Remove end

                                // Start
                                arr.unshift(0); // Add to start
                                arr.shift();    // Remove start

                                // Middle
                                arr.splice(1, 0, "a"); // Add at index 1</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-search"></i> Searching</h3>
                        <CodeBlock>
                            <pre><code>arr.includes(2);       // true/false
                                arr.indexOf(2);        // index or -1
                                arr.find(x =&gt; x &gt; 5);  // first item
                                arr.findIndex(x =&gt; x &gt; 5);

                                // Check
                                arr.some(x =&gt; x &gt; 0);  // true if any
                                arr.every(x =&gt; x &gt; 0); // true if all</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-sync-alt"></i> Transform</h3>
                        <CodeBlock>
                            <pre><code>// New Array
                                arr.map(x =&gt; x * 2);

                                // Filter
                                arr.filter(x =&gt; x &gt; 18);

                                // Combine
                                arr.reduce((acc, cur) =&gt; acc + cur);

                                // Sort
                                arr.sort();
                                arr.reverse();</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard className="mt-4">
                        <h3><i className="fas fa-cut"></i> Slicing</h3>
                        <CodeBlock>
                            <pre><code>// Slice (No Modify)
                                arr.slice(1, 3);

                                // Concat
                                arr.concat([4, 5]);

                                // Join
                                arr.join(" - ");</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-info-circle" style={{ color: '#3b82f6' }}></i>
                        <h3 style={{ color: '#3b82f6' }}>Array Methods Explained</h3>
                    </div>
                    <p>
                        <strong>Array:</strong> Like a shopping list.<br />
                        <strong>Map:</strong> Transform every item (e.g., dicing all potatoes).<br />
                        <strong>Filter:</strong> Select specific items (e.g., buying only organic).<br />
                        <strong>Reduce:</strong> Combine everything into one (e.g., calculating total bill).
                    </p>
                </div>
            </section>

            {/* STRINGS */}
            <section id="strings" className="content-section">
                <SectionHeader title="Strings" icon="fas fa-font" difficulty="Beginner" timeEstimate="10 min" />
                <div className="grid-3">
                    <GlassCard>
                        <h3><i className="fas fa-search"></i> Extract/Search</h3>
                        <CodeBlock>
                            <pre><code>// Char
                                str.charAt(0);

                                // Search
                                str.indexOf("a");
                                str.includes("world");
                                str.startsWith("Hello");
                                str.endsWith("!");

                                // Extract
                                str.slice(0, 5);
                                str.substring(0, 5);</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-edit"></i> Modify</h3>
                        <CodeBlock>
                            <pre><code>// Case
                                str.toUpperCase();
                                str.toLowerCase();

                                // Clean
                                str.trim();

                                // Replace
                                str.replace("a", "b");
                                str.replaceAll("a", "b");

                                // Split
                                str.split(" "); // to Array</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-pencil-alt"></i> Format</h3>
                        <CodeBlock>
                            <pre><code>// Template
                                `Hello ${`{name}`}`;

                                // Pad
                                "5".padStart(2, "0");
                                "5".padEnd(2, "0");

                                // Repeat
                                "Ha".repeat(3);</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
            </section>

            {/* OBJECTS */}
            <section id="objects" className="content-section">
                <SectionHeader title="Objects" icon="fas fa-cube" difficulty="Intermediate" timeEstimate="15 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-sitemap"></i> Structure</h3>
                        <CodeBlock>
                            <pre><code>const car = {'{'}
                                type: "Fiat",
                                start: function() {'{'}...{'}'}
                                {'}'};</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-tools"></i> Static Methods</h3>
                        <CodeBlock>
                            <pre><code>Object.keys(car);   // ["type", "start"]
                                Object.values(car); // ["Fiat", f]
                                Object.entries(car); // [["type", "Fiat"]...]
                                Object.freeze(car); // Prevent changes</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem' }}>
                    <div className="info-card-header">
                        <i className="fas fa-lightbulb"></i>
                        <h3>Object Analogy</h3>
                    </div>
                    <p>
                        Think of an Object as a <strong>person</strong>.<br />
                        <strong>Properties:</strong> Name, Age, Height (Data).<br />
                        <strong>Methods:</strong> Walk, Talk, Eat (Actions).
                    </p>
                </div>
            </section>

            {/* CLASSES */}
            <section id="classes" className="content-section">
                <SectionHeader title="Classes (OOP)" icon="fas fa-shapes" difficulty="Advanced" timeEstimate="15 min" />
                <GlassCard>
                    <h3><i className="fas fa-drafting-compass"></i> Syntax</h3>
                    <CodeBlock>
                        <pre><code>class Car {'{'}
                            constructor(name) {'{'} this.brand = name; {'}'}
                            {'}'}</code></pre>
                    </CodeBlock>
                </GlassCard>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-drafting-compass" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Class vs Object</h3>
                    </div>
                    <p>
                        <strong>Class:</strong> The Blueprint or Mold (e.g., "Car Design").<br />
                        <strong>Object:</strong> The actual thing created from the blueprint (e.g., "That Red Toyota").
                    </p>
                </div>
            </section>

            {/* MAP & SET */}
            <section id="mapsets" className="content-section">
                <SectionHeader title="Map & Set" icon="fas fa-map" difficulty="Intermediate" timeEstimate="10 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-map-marked-alt"></i> Map</h3>
                        <p>Key-Value pairs (Keys can be any type)</p>
                        <CodeBlock>
                            <pre><code>const map = new Map();
                                map.set("a", 1);
                                map.get("a"); // 1
                                map.has("a"); // true
                                map.delete("a");
                                map.size;     // 0</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-layer-group"></i> Set</h3>
                        <p>Unique values only</p>
                        <CodeBlock>
                            <pre><code>const set = new Set();
                                set.add(1);
                                set.add(1); // Ignored
                                set.has(1); // true
                                set.delete(1);
                                set.clear();</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderLeft: '4px solid #8b5cf6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-balance-scale" style={{ color: '#8b5cf6' }}></i>
                        <h3 style={{ color: '#8b5cf6' }}>Set vs Array</h3>
                    </div>
                    <p>
                        <strong>Array:</strong> A bookshelf where you can have duplicate books. (You can have two copies of "Harry Potter").<br />
                        <strong>Set:</strong> A library catalog where every entry must be unique. (You can't list "Harry Potter" twice).
                    </p>
                </div>
            </section>

            {/* JSON */}
            <section id="json" className="content-section">
                <SectionHeader title="JSON" icon="fas fa-code" difficulty="Beginner" timeEstimate="5 min" />
                <GlassCard>
                    <h3><i className="fas fa-exchange-alt"></i> Handling JSON</h3>
                    <CodeBlock>
                        <pre><code>let text = '{'{'} "name":"John", "age":30 {'}'}';
                            // Parse TO Object
                            let obj = JSON.parse(text);

                            // Stringify TO String
                            let str = JSON.stringify(obj);</code></pre>
                    </CodeBlock>
                </GlassCard>
            </section>
        </>
    );
};

export default DataStructures;

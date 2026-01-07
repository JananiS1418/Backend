import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';
import TamilBox from '../common/TamilBox';

const DataStructures = () => {
    return (
        <>
            {/* ARRAYS */}
            <section id="arrays" className="content-section">
                <SectionHeader title="Arrays & Methods" icon="fas fa-list" difficulty="Intermediate" timeEstimate="20 min" />
                <div className="grid-3">
                    <GlassCard>
                        <h3><i className="fas fa-plus-circle"></i> Basic</h3>
                        <CodeBlock>
                            <pre><code>fruits.push("Orange");
                                fruits.pop();
                                fruits.shift();</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-filter"></i> High Order</h3>
                        <CodeBlock>
                            <pre><code>ages.filter(a =&gt; a &gt; 18);
                                ages.map(a =&gt; a * 2);</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-compress-arrows-alt"></i> Reduce</h3>
                        <CodeBlock>
                            <pre><code>nums.reduce((t,n) =&gt; t+n);</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
                <TamilBox>
                    <strong>Array:</strong> ஒரு ரயிலின் பெட்டிகள் போல.<br />
                    <strong>Map:</strong> பெயிண்ட் அடிப்பது போல.<br />
                    <strong>Filter:</strong> டிக்கெட் இல்லாதவர்களை இறக்குவது போல.<br />
                    <strong>Reduce:</strong> மொத்த எடையையும் கூட்டுவது போல.
                </TamilBox>
            </section>

            {/* STRINGS */}
            <section id="strings" className="content-section">
                <SectionHeader title="Strings" icon="fas fa-font" difficulty="Beginner" timeEstimate="10 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-cut"></i> Methods</h3>
                        <CodeBlock>
                            <pre><code>str.length; // 11
                                str.toUpperCase();
                                str.slice(0, 5);</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-pencil-alt"></i> Templates</h3>
                        <CodeBlock>
                            <pre><code>`Hello ${'{'}name{'}'}!`</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
            </section>

            {/* OBJECTS */}
            <section id="objects" className="content-section">
                <SectionHeader title="Objects" icon="fas fa-cube" difficulty="Intermediate" timeEstimate="15 min" />
                <GlassCard>
                    <h3><i className="fas fa-sitemap"></i> Structure</h3>
                    <CodeBlock>
                        <pre><code>const car = {'{'}
                            type: "Fiat",
                            start: function() {'{'}...{'}'}
                            {'}'};</code></pre>
                    </CodeBlock>
                </GlassCard>
                <TamilBox>
                    <strong>Object:</strong> ஒரு மனிதன் போல. பெயர் (property), வயது (property), பேச முடியும் (method).
                </TamilBox>
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
                <TamilBox>
                    <strong>Class:</strong> இது ஒரு "அச்சு" (Mold) அல்லது "வரைபடம்". இதை வைத்து எத்தனை இட்லி (Object) வேண்டுமானாலும் சுடலாம்.
                </TamilBox>
            </section>

            {/* MAP & SET */}
            <section id="mapsets" className="content-section">
                <SectionHeader title="Map & Set" icon="fas fa-map" difficulty="Intermediate" timeEstimate="10 min" />
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-map-marked-alt"></i> Map</h3>
                        <p>Key-Value pairs (Keys can be any type)</p>
                        <CodeBlock>
                            <pre><code>const fruits = new Map();
                                fruits.set("apples", 500);
                                fruits.set("bananas", 300);

                                fruits.get("apples"); // 500</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-layer-group"></i> Set</h3>
                        <p>Unique values only</p>
                        <CodeBlock>
                            <pre><code>const letters = new Set();
                                letters.add("a");
                                letters.add("b");
                                letters.add("a"); // Ignored

// Size is 2</code></pre>
                        </CodeBlock>
                    </GlassCard>
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

import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';
import TamilBox from '../common/TamilBox';

const LogicControl = () => {
    return (
        <>
            {/* CONDITIONS */}
            <section id="conditions" className="content-section">
                <SectionHeader title="Conditions" icon="fas fa-code-branch" difficulty="Beginner" timeEstimate="15 min" />
                <p className="desc">Control flow based on different conditions.</p>

                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-code-branch"></i> If / Else</h3>
                        <p>Execute if true</p>
                        <CodeBlock>
                            <pre><code>if (hour &lt; 12) {'{'}
                                console.log("Good morning");
                                {'}'} else {'{'}
                                console.log("Good day");
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-toggle-on"></i> Switch</h3>
                        <p>Select one of many blocks</p>
                        <CodeBlock>
                            <pre><code>switch (day) {'{'}
                                case 0: text = "Sun"; break;
                                default: text = "Day";
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <GlassCard>
                    <h3><i className="fas fa-question-circle"></i> Ternary Operator</h3>
                    <p>Short hand for if/else</p>
                    <CodeBlock>
                        <pre><code>let status = (age &gt;= 18) ? "Adult" : "Minor";</code></pre>
                    </CodeBlock>
                </GlassCard>

                <TamilBox>
                    <strong>If/Else:</strong> "மழை பெய்தால் குடை எடு, இல்லையென்றால் சும்மா போ" போன்றது.<br />
                    <strong>Switch:</strong> டிவி ரிமோட் போல - 1 அழுத்தினால் Sun TV, 2 அழுத்தினால் KTV.<br />
                    <strong>Ternary:</strong> ஒரே வரி if/else. "பாஸ் அல்லது ஃபெயில்?" என்பதை ஒரே வரியில் சொல்லலாம்.
                </TamilBox>
            </section>

            {/* LOOPS */}
            <section id="loops" className="content-section">
                <SectionHeader title="Loops" icon="fas fa-redo" difficulty="Beginner" timeEstimate="12 min" />
                <p className="desc">Execute a block of code a number of times.</p>

                <div className="grid-3">
                    <GlassCard>
                        <h3><i className="fas fa-sync"></i> For Loop</h3>
                        <CodeBlock>
                            <pre><code>for (let i = 0; i &lt; 5; i++) {'{'}
                                console.log(i);
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-circle-notch"></i> While Loop</h3>
                        <CodeBlock>
                            <pre><code>while (i &lt; 10) {'{'}
                                i++;
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-list-ol"></i> For...of</h3>
                        <CodeBlock>
                            <pre><code>for (let car of cars) {'{'}
                                console.log(car);
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
                <TamilBox>
                    <strong>For Loop:</strong> "5 முறை தோப்புக்கரணம் போடு" என்று சொல்வது போல.<br />
                    <strong>While Loop:</strong> "மழை நிற்கும் வரை காத்திரு" - எப்போது நிற்கும் என்று தெரியாது.
                </TamilBox>
            </section>

            {/* FUNCTIONS */}
            <section id="functions" className="content-section">
                <SectionHeader title="Functions" icon="fas fa-cogs" difficulty="Beginner" timeEstimate="15 min" />
                <p className="desc">A block of code designed to perform a particular task.</p>
                <div className="grid-2">
                    <GlassCard>
                        <h3><i className="fas fa-scroll"></i> Declaration</h3>
                        <CodeBlock>
                            <pre><code>function add(a, b) {'{'}
                                return a + b;
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-location-arrow"></i> Arrow Function</h3>
                        <CodeBlock>
                            <pre><code>const add = (a, b) =&gt; a + b;</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>
                <TamilBox>
                    <strong>Function:</strong> ஒரு மிக்ஸி போல. உள்ளே எதையாவது போட்டால் (Input), அது அரைத்து ஜூஸாக (Output) தரும்.<br />
                    <strong>Arrow Function:</strong> இது ஒரு "Short-cut".
                </TamilBox>
            </section>
        </>
    );
};

export default LogicControl;

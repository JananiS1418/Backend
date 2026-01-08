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
                <SectionHeader title="Loops" icon="fas fa-redo" difficulty="Beginner" timeEstimate="12 min" />
                <p className="desc">Loops can execute a block of code a number of times.</p>

                <div className="grid-3">
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-sync"></i> For Loop</h3>
                        </div>
                        <p>Loop a specific number of times</p>
                        <CodeBlock>
                            <pre><code>for (let i = 0; i &lt; 5; i++) {'{'}
                                console.log(i);
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-circle-notch"></i> While Loop</h3>
                        </div>
                        <p>Loop while a condition is true</p>
                        <CodeBlock>
                            <pre><code>while (i &lt; 10) {'{'}
                                console.log(i);
                                i++;
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <div className="card-header">
                            <h3><i className="fas fa-list-ol"></i> For...of</h3>
                        </div>
                        <p>Loop through values of an iterable</p>
                        <CodeBlock>
                            <pre><code>let cars = ["BMW", "Volvo"];
                                for (let car of cars) {'{'}
                                console.log(car);
                                {'}'}</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card warning-card" style={{ marginTop: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '4px solid #f59e0b' }}>
                    <div className="info-card-header">
                        <i className="fas fa-lightbulb" style={{ color: '#f59e0b' }}></i>
                        <h3 style={{ color: '#f59e0b' }}>Analogies</h3>
                    </div>
                    <p>
                        <strong>For Loop:</strong> "Do 10 pushups" (Exact count known).<br />
                        <strong>While Loop:</strong> "Run until tired" (Condition based, unknown duration).<br />
                        <strong>For...of:</strong> "Read every book on the shelf" (Iterate through a collection).
                    </p>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981' }}>
                    <div className="info-card-header">
                        <i className="fas fa-check-circle" style={{ color: '#10b981' }}></i>
                        <h3 style={{ color: '#10b981' }}>Best Practice</h3>
                    </div>
                    <p>Always ensure your loops have a clear <strong>exit condition</strong>. An infinite loop (one that never stops) can crash your browser tab!</p>
                </div>
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

                <div className="grid-2" style={{ marginTop: '1rem' }}>
                    <GlassCard>
                        <h3><i className="fas fa-sliders-h"></i> Default Params</h3>
                        <CodeBlock>
                            <pre><code>function greet(name = "User") {'{'}
                                return "Hello " + name;
                                {'}'}
                                // greet() -&gt; "Hello User"</code></pre>
                        </CodeBlock>
                    </GlassCard>
                    <GlassCard>
                        <h3><i className="fas fa-ellipsis-h"></i> Rest Params</h3>
                        <CodeBlock>
                            <pre><code>function sum(...nums) {'{'}
                                return nums.reduce((a, b) =&gt; a + b);
                                {'}'}
                                // sum(1, 2, 3) -&gt; 6</code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="info-card" style={{ marginTop: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderLeft: '4px solid #8b5cf6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-robot" style={{ color: '#8b5cf6' }}></i>
                        <h3 style={{ color: '#8b5cf6' }}>The Function Machine</h3>
                    </div>
                    <p>
                        Think of a function like a <strong>Blender</strong>.<br />
                        <strong>Input (Arguments):</strong> Fruit, Milk.<br />
                        <strong>Processing (Code):</strong> Blending.<br />
                        <strong>Output (Return):</strong> Smoothie.
                    </p>
                </div>
            </section>
        </>
    );
};

export default LogicControl;

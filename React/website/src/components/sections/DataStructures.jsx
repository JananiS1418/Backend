import React from 'react';
import SectionHeader from '../common/SectionHeader';
import GlassCard from '../common/GlassCard';
import CodeBlock from '../common/CodeBlock';

const DataStructures = () => {
    return (
        <>
            {/* ARRAYS */}
            <section id="arrays" className="content-section">
                <SectionHeader title="Arrays & Methods" icon="fas fa-list" difficulty="Intermediate" timeEstimate="30 min" />

                {/* INTRO */}
                <GlassCard className="intro-card" style={{ marginBottom: '2rem' }}>
                    <h3>✅ What is an Array?</h3>
                    <p>An array is a data structure used to store multiple values in a single variable.</p>
                    <CodeBlock>
                        <pre><code>let numbers = [10, 20, 30, 40];</code></pre>
                    </CodeBlock>
                </GlassCard>

                <h3 style={{ marginBottom: '1rem' }}>✅ Types of Array Methods</h3>
                <p className="desc" style={{ marginBottom: '2rem' }}>JavaScript array methods are mainly divided into two types: <strong>Normal (Basic)</strong> and <strong>Higher-Order</strong>.</p>

                {/* 1. NORMAL METHODS */}
                <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>1️⃣ Normal (Basic) Array Methods</h3>
                <div className="grid-2">
                    {/* push */}
                    <GlassCard>
                        <h4>🔸 1. push()</h4>
                        <p>Add element at <strong>end</strong>.</p>
                        <CodeBlock>
                            <pre><code>
                                let fruits = ["apple", "banana"];{'\n'}
                                fruits.push("orange");{'\n'}
                                console.log(fruits);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Modifies original array.</p>
                    </GlassCard>
                    {/* pop */}
                    <GlassCard>
                        <h4>🔸 2. pop()</h4>
                        <p>Remove element from <strong>end</strong>.</p>
                        <CodeBlock>
                            <pre><code>
                                let fruits = ["apple", "banana", "orange"];{'\n'}
                                fruits.pop();{'\n'}
                                console.log(fruits);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns removed element.</p>
                    </GlassCard>
                    {/* unshift */}
                    <GlassCard>
                        <h4>🔸 3. unshift()</h4>
                        <p>Add element at <strong>beginning</strong>.</p>
                        <CodeBlock>
                            <pre><code>
                                let fruits = ["banana", "orange"];{'\n'}
                                fruits.unshift("apple");{'\n'}
                                console.log(fruits);
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                    {/* shift */}
                    <GlassCard>
                        <h4>🔸 4. shift()</h4>
                        <p>Remove element from <strong>beginning</strong>.</p>
                        <CodeBlock>
                            <pre><code>
                                let fruits = ["apple", "banana", "orange"];{'\n'}
                                fruits.shift();{'\n'}
                                console.log(fruits);
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                    {/* length */}
                    <GlassCard>
                        <h4>🔸 5. length</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [1, 2, 3, 4];{'\n'}
                                console.log(nums.length);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Count of elements.</p>
                    </GlassCard>
                    {/* indexOf */}
                    <GlassCard>
                        <h4>🔸 6. indexOf()</h4>
                        <CodeBlock>
                            <pre><code>
                                let colors = ["red", "blue"];{'\n'}
                                console.log(colors.indexOf("blue"));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns index or -1.</p>
                    </GlassCard>
                    {/* includes */}
                    <GlassCard>
                        <h4>🔸 7. includes()</h4>
                        <CodeBlock>
                            <pre><code>
                                let colors = ["red", "blue"];{'\n'}
                                console.log(colors.includes("red"));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns true/false.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* slice */}
                    <GlassCard>
                        <h4>🔸 8. slice()</h4>
                        <p>Extracts elements. <span style={{ color: 'var(--accent-success)' }}>No Modify</span>.</p>
                        <CodeBlock>
                            <pre><code>
                                let nums = [1, 2, 3, 4, 5];{'\n'}
                                let result = nums.slice(1, 4);{'\n'}
                                console.log(result);
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                    {/* splice */}
                    <GlassCard>
                        <h4>🔸 9. splice()</h4>
                        <p>Add/Remove elements. <span style={{ color: 'var(--accent-danger)' }}>Modifies</span>.</p>
                        <CodeBlock>
                            <pre><code>
                                let nums = [1, 2, 3, 4];{'\n'}
                                nums.splice(1, 2, 99, 100);{'\n'}
                                console.log(nums);
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    {/* join */}
                    <GlassCard>
                        <h4>🔸 10. join()</h4>
                        <CodeBlock>
                            <pre><code>
                                let words = ["Hello", "World"];{'\n'}
                                console.log(words.join(" "));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Converts array to string.</p>
                    </GlassCard>
                </div>


                {/* 2. HIGHER ORDER METHODS */}
                <h3 style={{ margin: '2rem 0 1rem', color: 'var(--accent-primary)' }}>2️⃣ Higher-Order Array Methods</h3>
                <p style={{ marginBottom: '1rem' }}>These methods take a function as an argument.</p>

                <div className="grid-2">
                    {/* forEach */}
                    <GlassCard>
                        <h4>🔹 1. forEach()</h4>
                        <p>Loop through elements.</p>
                        <CodeBlock>
                            <pre><code>
                                let nums = [1, 2, 3];{'\n'}
                                nums.forEach(function(num) {'{'}{'\n'}
                                console.log(num * 2);{'\n'}
                                {'}'});
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>❌ Does NOT return new array.</p>
                    </GlassCard>
                    {/* map */}
                    <GlassCard>
                        <h4>🔹 2. map()</h4>
                        <p>Transform and return new array.</p>
                        <CodeBlock>
                            <pre><code>
                                let nums = [1, 2, 3];{'\n'}
                                let doubled = nums.map(function(num) {'{'}{'\n'}
                                return num * 2;{'\n'}
                                {'}'});{'\n'}
                                console.log(doubled);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>✅ Returns new array.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* filter */}
                    <GlassCard>
                        <h4>🔹 3. filter()</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [10, 20, 5, 8];{'\n'}
                                let result = nums.filter(num =&gt; num &gt; 10);{'\n'}
                                console.log(result);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns elements that match condition.</p>
                    </GlassCard>
                    {/* reduce */}
                    <GlassCard>
                        <h4>🔹 4. reduce()</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [10, 20, 30];{'\n'}
                                let sum = nums.reduce((acc, curr) =&gt; acc + curr, 0);{'\n'}
                                console.log(sum);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Reduces to single value.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* find */}
                    <GlassCard>
                        <h4>🔹 5. find()</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [10, 20, 30];{'\n'}
                                let result = nums.find(num =&gt; num &gt; 15);{'\n'}
                                console.log(result);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns FIRST match.</p>
                    </GlassCard>
                    {/* findIndex */}
                    <GlassCard>
                        <h4>🔹 6. findIndex()</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [10, 20, 30];{'\n'}
                                console.log(nums.findIndex(num =&gt; num &gt; 15));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns INDEX of first match.</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* some */}
                    <GlassCard>
                        <h4>🔹 7. some()</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [5, 10, 20];{'\n'}
                                console.log(nums.some(num =&gt; num &gt; 15));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>True if ANY match.</p>
                    </GlassCard>
                    {/* every */}
                    <GlassCard>
                        <h4>🔹 8. every()</h4>
                        <CodeBlock>
                            <pre><code>
                                let nums = [10, 20, 30];{'\n'}
                                console.log(nums.every(num =&gt; num &gt; 5));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>True if ALL match.</p>
                    </GlassCard>
                </div>

                {/* Comparison Table */}
                <GlassCard style={{ marginTop: '2rem' }}>
                    <h3>🔍 Difference: forEach() vs map()</h3>
                    <table style={{ width: '100%', marginTop: '0.5rem', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>forEach</th>
                                <th style={{ textAlign: 'left', padding: '0.5rem' }}>map</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Returns new array</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-danger)' }}>❌ No</td>
                                <td style={{ padding: '0.5rem', color: 'var(--accent-success)' }}>✅ Yes</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Used for</td>
                                <td style={{ padding: '0.5rem' }}>Side effects</td>
                                <td style={{ padding: '0.5rem' }}>Transformation</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.5rem' }}>Original array</td>
                                <td style={{ padding: '0.5rem' }}>Unchanged</td>
                                <td style={{ padding: '0.5rem' }}>Unchanged</td>
                            </tr>
                        </tbody>
                    </table>
                </GlassCard>
            </section>

            {/* STRINGS */}
            <section id="strings" className="content-section">
                <SectionHeader title="Strings & Methods" icon="fas fa-font" difficulty="Beginner" timeEstimate="25 min" />

                {/* INTRO */}
                <GlassCard className="intro-card" style={{ marginBottom: '2rem' }}>
                    <h3>✅ What is a String?</h3>
                    <p>A string is a sequence of characters used to store text data.</p>
                    <CodeBlock>
                        <pre><code>let name = "JavaScript";</code></pre>
                    </CodeBlock>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        ⚠️ Strings in JavaScript are <strong>immutable</strong>. This means the original string cannot be changed; methods return a new string.
                    </p>
                </GlassCard>

                <h3 style={{ marginBottom: '1rem' }}>✅ Common String Methods</h3>

                <div className="grid-3">
                    {/* 1. length */}
                    <GlassCard>
                        <h4>🔹 1. length</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "Hello";{'\n'}
                                console.log(text.length);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Output: 5</p>
                    </GlassCard>
                    {/* 2. toUpperCase */}
                    <GlassCard>
                        <h4>🔹 2. toUpperCase()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "hello";{'\n'}
                                console.log(text.toUpperCase());
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>"HELLO"</p>
                    </GlassCard>
                    {/* 3. toLowerCase */}
                    <GlassCard>
                        <h4>🔹 3. toLowerCase()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "HELLO";{'\n'}
                                console.log(text.toLowerCase());
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>"hello"</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* 4. trim */}
                    <GlassCard>
                        <h4>🔹 4. trim()</h4>
                        <p>Removes spaces from start & end.</p>
                        <CodeBlock>
                            <pre><code>
                                let text = "  Hello World  ";{'\n'}
                                console.log(text.trim());
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                    {/* 5. trimStart/End */}
                    <GlassCard>
                        <h4>🔹 5. trimStart() / trimEnd()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "  Hello  ";{'\n'}
                                console.log(text.trimStart());{'\n'}
                                console.log(text.trimEnd());
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                    {/* 6. includes */}
                    <GlassCard>
                        <h4>🔹 6. includes()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "JS is easy";{'\n'}
                                console.log(text.includes("easy"));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>True/False</p>
                    </GlassCard>
                    {/* 7. indexOf */}
                    <GlassCard>
                        <h4>🔹 7. indexOf()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "JavaScript";{'\n'}
                                console.log(text.indexOf("S"));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Pos of first match.</p>
                    </GlassCard>
                    {/* 8. lastIndexOf */}
                    <GlassCard>
                        <h4>🔹 8. lastIndexOf()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "hello hello";{'\n'}
                                console.log(text.lastIndexOf("hello"));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Pos of last match.</p>
                    </GlassCard>
                </div>

                <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                    {/* 9. slice */}
                    <GlassCard>
                        <h4>🔹 9. slice(start, end)</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "JavaScript";{'\n'}
                                console.log(text.slice(0, 4));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>"Java" (Standard way)</p>
                    </GlassCard>
                    {/* 10. substring */}
                    <GlassCard>
                        <h4>🔹 10. substring()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "JavaScript";{'\n'}
                                console.log(text.substring(4, 10));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>No negative values.</p>
                    </GlassCard>
                    {/* 11. substr */}
                    <GlassCard>
                        <h4>🔹 11. substr()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "JavaScript";{'\n'}
                                console.log(text.substr(4, 6));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', color: 'var(--accent-warning)' }}>⚠️ Deprecated</p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* 12. replace */}
                    <GlassCard>
                        <h4>🔹 12. replace()</h4>
                        <p>Replaces <strong>first</strong> match only.</p>
                        <CodeBlock>
                            <pre><code>
                                let text = "I like JS";{'\n'}
                                console.log(text.replace("JS", "JavaScript"));
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                    {/* 13. replaceAll */}
                    <GlassCard>
                        <h4>🔹 13. replaceAll()</h4>
                        <p>Replaces <strong>all</strong> matches.</p>
                        <CodeBlock>
                            <pre><code>
                                let text = "JS is JS";{'\n'}
                                console.log(text.replaceAll("JS", "JavaScript"));
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                    {/* 14. split */}
                    <GlassCard>
                        <h4>🔹 14. split()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "a,b,c";{'\n'}
                                console.log(text.split(","));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Returns Array.</p>
                    </GlassCard>
                    {/* 15. charAt */}
                    <GlassCard>
                        <h4>🔹 15. charAt()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "Hello";{'\n'}
                                console.log(text.charAt(1));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>"e"</p>
                    </GlassCard>
                    {/* 16. charCodeAt */}
                    <GlassCard>
                        <h4>🔹 16. charCodeAt()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "A";{'\n'}
                                console.log(text.charCodeAt(0));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>65 (Unicode)</p>
                    </GlassCard>
                </div>

                <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                    {/* 17. startsWith */}
                    <GlassCard>
                        <h4>🔹 17. startsWith()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "JavaScript";{'\n'}
                                console.log(text.startsWith("Java"));
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                    {/* 18. endsWith */}
                    <GlassCard>
                        <h4>🔹 18. endsWith()</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "file.txt";{'\n'}
                                console.log(text.endsWith(".txt"));
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                    {/* 19. concat */}
                    <GlassCard>
                        <h4>🔹 19. concat()</h4>
                        <CodeBlock>
                            <pre><code>
                                let a = "Hello";{'\n'}
                                let b = "World";{'\n'}
                                console.log(a.concat(" ", b));
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '1.5rem' }}>
                    {/* 20. Template Literals */}
                    <GlassCard className="highlight-card">
                        <h4 style={{ color: 'var(--accent-primary)' }}>🔹 20. Template Literals (Important)</h4>
                        <CodeBlock>
                            <pre><code>
                                let name = "Janani";{'\n'}
                                let age = 21;{'\n'}
                                {'\n'}
                                console.log(`My name is ${`{name}`} and I am ${`{age}`}`);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.9rem' }}>Uses backticks (`). <code>${`{}`}</code> for variables.</p>
                    </GlassCard>

                    {/* Immutability */}
                    <GlassCard style={{ borderColor: 'var(--accent-warning)' }}>
                        <h4 style={{ color: 'var(--accent-warning)' }}>⚠️ String Immutability Example</h4>
                        <CodeBlock>
                            <pre><code>
                                let text = "hello";{'\n'}
                                text.toUpperCase();{'\n'}
                                {'\n'}
                                console.log(text); // "hello"
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.9rem' }}>Original string remains unchanged.</p>
                    </GlassCard>
                </div>

            </section>

            {/* OBJECTS */}
            <section id="objects" className="content-section">
                <SectionHeader title="Objects" icon="fas fa-cube" difficulty="Beginner" timeEstimate="20 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>What is an Object?</h3>
                        </div>
                        <p>An object is a collection of key–value pairs.</p>
                        <p style={{ marginTop: '0.5rem' }}>👉 Objects are used to store related data and functionality together.</p>

                        <div style={{ marginTop: '1rem' }}>
                            <h5>Example:</h5>
                            <CodeBlock>
                                <pre><code><span className="kwd">let</span> student = {'{'}{'\n'}
                                    name: "Janani",{'\n'}
                                    age: 21,{'\n'}
                                    city: "Chennai"{'\n'}
                                    {'}'};</code></pre>
                            </CodeBlock>
                        </div>

                        <div className="card-footer" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <p><strong>Explanation:</strong></p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                                <li><code>name, age, city</code> → keys (properties)</li>
                                <li><code>"Janani", 21, "Chennai"</code> → values</li>
                            </ul>
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ Why use Objects?</h3>
                        </div>
                        <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem', lineHeight: '2' }}>
                            <li>Store structured data</li>
                            <li>Represent real-world entities</li>
                            <li>Used heavily in APIs, React, and backend</li>
                        </ul>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>✅ Accessing Object Properties</h3>

                        <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Dot notation</h4>
                        <CodeBlock>
                            <pre><code>console.log(student.name);</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Explanation: Dot notation → common</p>

                        <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', margin: '1rem 0 0.5rem' }}>Bracket notation</h4>
                        <CodeBlock>
                            <pre><code>console.log(student["age"]);</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Explanation: Bracket notation → useful for dynamic keys</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>✅ Adding & Updating Properties</h3>
                        <CodeBlock>
                            <pre><code>
                                student.gender = "Female";{'\n'}
                                student.age = 22;
                            </code></pre>
                        </CodeBlock>
                        <div style={{ marginTop: '0.5rem' }}>
                            <p><strong>Explanation:</strong></p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                                <li>New properties can be added anytime</li>
                                <li>Existing values can be updated</li>
                            </ul>
                        </div>

                        <h3 style={{ marginTop: '1.5rem' }}>✅ Deleting a Property</h3>
                        <CodeBlock>
                            <pre><code><span className="kwd">delete</span> student.city;</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem' }}>Explanation: Removes property permanently</p>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Object Methods in JavaScript</h3>
                <p className="desc" style={{ marginBottom: '2rem' }}>Object methods are built-in functions used to work with objects.</p>

                <div className="grid-2">
                    <GlassCard>
                        <h3>1️⃣ Object.keys()</h3>
                        <p>Returns array of object keys.</p>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> user = {'{'} name: "Ajay", age: 25 {'}'};{'\n'}
                                {'\n'}
                                console.log(Object.keys(user));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                            <strong>Explanation:</strong> Output → ["name", "age"]<br />
                            Useful for looping
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>2️⃣ Object.values()</h3>
                        <p>Returns array of object values.</p>
                        <CodeBlock>
                            <pre><code>console.log(Object.values(user));</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> Output → ["Ajay", 25]</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>3️⃣ Object.entries()</h3>
                        <p>Returns array of key-value pairs.</p>
                        <CodeBlock>
                            <pre><code>console.log(Object.entries(user));</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                            <strong>Explanation:</strong> Output → [["name","Ajay"], ["age",25]]<br />
                            Used in loops and transformations
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>4️⃣ Object.assign()</h3>
                        <p>Copies properties from one object to another.</p>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> obj1 = {'{'} a: 1 {'}'};{'\n'}
                                <span className="kwd">let</span> obj2 = {'{'} b: 2 {'}'};{'\n'}
                                {'\n'}
                                <span className="kwd">let</span> result = Object.assign({ }, obj1, obj2);{'\n'}
                                console.log(result);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                            <strong>Explanation:</strong> Combines objects<br />
                            Does not modify original objects
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>5️⃣ Spread Operator {'{...}'} (Modern Way)</h3>
                        <CodeBlock>
                            <pre><code><span className="kwd">let</span> result = {'{'} ...obj1, ...obj2 {'}'};</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
                            <strong>Explanation:</strong> Cleaner ES6 syntax<br />
                            Most commonly used in React
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>6️⃣ Object.freeze()</h3>
                        <p>Prevents changes to object.</p>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> settings = {'{'} theme: "dark" {'}'};{'\n'}
                                Object.freeze(settings);{'\n'}
                                {'\n'}
                                settings.theme = "light"; <span className="com">// ❌ not allowed</span>
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> Object becomes read-only</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>7️⃣ Object.seal()</h3>
                        <p>Allows update but prevents add/delete.</p>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> data = {'{'} name: "JS" {'}'};{'\n'}
                                Object.seal(data);{'\n'}
                                {'\n'}
                                data.name = "JavaScript"; <span className="com">// allowed</span>{'\n'}
                                data.version = 6;        <span className="com">// ❌ not allowed</span>
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3>8️⃣ hasOwnProperty()</h3>
                        <p>Checks if property exists.</p>
                        <CodeBlock>
                            <pre><code>console.log(user.hasOwnProperty("age"));</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> Returns true or false</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>9️⃣ in Operator</h3>
                        <CodeBlock>
                            <pre><code>console.log("name" <span className="kwd">in</span> user);</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> Checks property including inherited ones</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔟 Object.create()</h3>
                        <p>Creates a new object from existing object.</p>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> person = {'{'} role: "admin" {'}'};{'\n'}
                                <span className="kwd">let</span> user1 = Object.create(person);{'\n'}
                                {'\n'}
                                console.log(user1.role);
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3>1️⃣1️⃣ Object.getPrototypeOf()</h3>
                        <CodeBlock>
                            <pre><code>console.log(Object.getPrototypeOf(user1));</code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> Returns prototype object</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>1️⃣2️⃣ Object.setPrototypeOf()</h3>
                        <CodeBlock>
                            <pre><code>Object.setPrototypeOf(user1, {'{'} type: "employee" {'}'});</code></pre>
                        </CodeBlock>
                    </GlassCard>

                    <GlassCard>
                        <h3>1️⃣3️⃣ Object.is()</h3>
                        <p>Compares two values.</p>
                        <CodeBlock>
                            <pre><code>
                                console.log(Object.is(10, 10));  <span className="com">// true</span>{'\n'}
                                console.log(Object.is(NaN, NaN)); <span className="com">// true</span>
                            </code></pre>
                        </CodeBlock>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> More accurate than === in some cases</p>
                    </GlassCard>

                    <GlassCard>
                        <h3>1️⃣4️⃣ Looping through Objects</h3>
                        <p>Using for...in</p>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">for</span> (<span className="kwd">let</span> key <span className="kwd">in</span> student) {'{'}{'\n'}
                                console.log(key, student[key]);{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                    </GlassCard>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem' }}>🔹 Object Methods (Functions inside Objects)</h3>
                    <GlassCard>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> person = {'{'}{'\n'}
                                name: "Janani",{'\n'}
                                greet() {'{'}{'\n'}
                                console.log("Hello " + <span className="kwd">this</span>.name);{'\n'}
                                {'}'}{'\n'}
                                {'}'};{'\n'}
                                {'\n'}
                                person.greet();
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <strong>Explanation:</strong><br />
                            Function inside object = method<br />
                            <code>this</code> refers to current object
                        </p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🔍 Difference: Object vs Array</h3>
                        <table style={{ width: '100%', marginTop: '0.5rem', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Feature</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Object</th>
                                    <th style={{ textAlign: 'left', padding: '0.5rem' }}>Array</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '0.5rem' }}>Data</td>
                                    <td style={{ padding: '0.5rem' }}>Key-value</td>
                                    <td style={{ padding: '0.5rem' }}>Indexed</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <td style={{ padding: '0.5rem' }}>Order</td>
                                    <td style={{ padding: '0.5rem' }}>No fixed order</td>
                                    <td style={{ padding: '0.5rem' }}>Ordered</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '0.5rem' }}>Use</td>
                                    <td style={{ padding: '0.5rem' }}>Real-world data</td>
                                    <td style={{ padding: '0.5rem' }}>List of items</td>
                                </tr>
                            </tbody>
                        </table>
                    </GlassCard>

                    <GlassCard>
                        <h3>⚠️ Shallow Copy vs Deep Copy</h3>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4>Shallow Copy</h4>
                            <CodeBlock>
                                <pre><code><span className="kwd">let</span> copy = {'{'} ...user {'}'};</code></pre>
                            </CodeBlock>
                        </div>
                        <div>
                            <h4>Deep Copy</h4>
                            <CodeBlock>
                                <pre><code><span className="kwd">let</span> deep = JSON.parse(JSON.stringify(user));</code></pre>
                            </CodeBlock>
                        </div>
                    </GlassCard>
                </div>

            </section>

            {/* CLASSES */}
            <section id="classes" className="content-section">
                <SectionHeader title="Classes (OOP)" icon="fas fa-shapes" difficulty="Intermediate" timeEstimate="25 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is a Class?</h3>
                        </div>
                        <p>A class is a blueprint (template) used to create multiple objects with similar properties and methods.</p>
                        <div className="card-footer">
                            <span className="tip"><i className="fas fa-info-circle"></i> Classes were introduced in ES6 (2015).</span>
                        </div>
                    </GlassCard>

                    <div className="info-card" style={{ background: 'rgba(99, 102, 241, 0.1)', borderLeft: '4px solid #6366f1' }}>
                        <div className="info-card-header">
                            <i className="fas fa-brain" style={{ color: '#6366f1' }}></i>
                            <h3 style={{ color: '#6366f1' }}>Real-life Example</h3>
                        </div>
                        <p><strong>Think of a class as a form:</strong></p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                            <li>The form has fields (name, age)</li>
                            <li>Each filled form is an object</li>
                        </ul>
                    </div>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>✅ Why do we use Classes?</h3>
                        <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <li>To write clean and organized code</li>
                            <li>To reuse code</li>
                            <li>To create multiple objects easily</li>
                            <li>To follow Object-Oriented Programming (OOP)</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Syntax of a Class</h3>
                        <CodeBlock>
                            <pre><code>
                                class Student {'{'}{'\n'}
                                constructor(name, age) {'{'}{'\n'}
                                this.name = name;{'\n'}
                                this.age = age;{'\n'}
                                {'}'}{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <div style={{ marginTop: '1rem' }}>
                            <p><strong>Explanation:</strong></p>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '1.2rem' }}>
                                <li><code>class Student</code> → class name (Capitalized)</li>
                                <li><code>constructor()</code> → runs automatically</li>
                                <li><code>this</code> → refers to current object</li>
                                <li><code>name, age</code> → properties</li>
                            </ul>
                        </div>
                    </GlassCard>
                </div>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 Working with Classes</h3>

                <div className="grid-2">
                    <GlassCard>
                        <h3>✅ Creating Objects from a Class</h3>
                        <CodeBlock>
                            <pre><code>
                                <span className="kwd">let</span> student1 = <span className="kwd">new</span> Student("Janani", 21);{'\n'}
                                <span className="kwd">let</span> student2 = <span className="kwd">new</span> Student("Ajay", 22);
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <strong>Explanation:</strong><br />
                            <code>new</code> keyword creates a new object.<br />
                            student1 and student2 are objects.<br />
                            Both share same structure but different values.
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Adding Methods to a Class</h3>
                        <CodeBlock>
                            <pre><code>
                                class Student {'{'}{'\n'}
                                constructor(name, age) {'{'}{'\n'}
                                this.name = name;{'\n'}
                                this.age = age;{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                greet() {'{'}{'\n'}
                                console.log(`Hello, my name is ${`{this.name}`}`);{'\n'}
                                {'}'}{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                <span className="com">// Usage</span>{'\n'}
                                student1.greet();
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <code>greet()</code> is a method.<br />
                            Accessed using object name.<br />
                            <code>this.name</code> refers to object's name.
                        </p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🔹 Multiple Methods Example</h3>
                        <CodeBlock>
                            <pre><code>
                                class BankAccount {'{'}{'\n'}
                                constructor(holder, balance) {'{'}{'\n'}
                                this.holder = holder;{'\n'}
                                this.balance = balance;{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                deposit(amount) {'{'}{'\n'}
                                this.balance += amount;{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                withdraw(amount) {'{'}{'\n'}
                                this.balance -= amount;{'\n'}
                                {'}'}{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <code>deposit()</code> adds money.<br />
                            <code>withdraw()</code> removes money.<br />
                            Methods update object state.
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Class Inheritance (extends)</h3>
                        <p>Inheritance allows one class to reuse another class.</p>
                        <CodeBlock>
                            <pre><code>
                                class Person {'{'}{'\n'}
                                constructor(name) {'{'} this.name = name; {'}'}{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                class Employee extends Person {'{'}{'\n'}
                                constructor(name, id) {'{'}{'\n'}
                                super(name);{'\n'}
                                this.id = id;{'\n'}
                                {'}'}{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <code>extends</code> → inherits parent class.<br />
                            <code>super()</code> → calls parent constructor.<br />
                            Avoids code duplication.
                        </p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🔹 Method Overriding</h3>
                        <CodeBlock>
                            <pre><code>
                                class Animal {'{'}{'\n'}
                                speak() {'{'} console.log("Animal sound"); {'}'}{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                class Dog extends Animal {'{'}{'\n'}
                                speak() {'{'} console.log("Bark"); {'}'}{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            Child class replaces parent method.<br />
                            Same method name, different behavior.
                        </p>
                    </GlassCard>

                    <GlassCard>
                        <h3>🔹 Getters and Setters</h3>
                        <CodeBlock>
                            <pre><code>
                                class User {'{'}{'\n'}
                                constructor(name) {'{'} this._name = name; {'}'}{'\n'}
                                {'\n'}
                                get name() {'{'} return this._name; {'}'}{'\n'}
                                set name(value) {'{'} this._name = value; {'}'}{'\n'}
                                {'}'}
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            <code>get</code> → read property.<br />
                            <code>set</code> → update property safely.<br />
                            Used for validation and control.
                        </p>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <GlassCard>
                        <h3>🔹 Static Methods</h3>
                        <CodeBlock>
                            <pre><code>
                                class MathUtil {'{'}{'\n'}
                                static add(a, b) {'{'} return a + b; {'}'}{'\n'}
                                {'}'}{'\n'}
                                {'\n'}
                                console.log(MathUtil.add(5, 3));
                            </code></pre>
                        </CodeBlock>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            Static methods belong to class.<br />
                            Cannot be called using object.
                        </p>
                    </GlassCard>
                </div>
            </section>

            {/* JSON */}
            <section id="json" className="content-section">
                <SectionHeader title="JSON" icon="fas fa-code" difficulty="Beginner" timeEstimate="20 min" />

                <div className="grid-2">
                    <GlassCard>
                        <div className="card-header">
                            <h3>✅ What is JSON?</h3>
                        </div>
                        <p><strong>JSON</strong> stands for <strong>JavaScript Object Notation</strong>.</p>
                        <p style={{ marginTop: '0.5rem' }}>It is a text-based data format used to store and exchange data between:</p>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                            <li>Frontend ↔ Backend</li>
                            <li>Browser ↔ Server</li>
                            <li>APIs ↔ Applications</li>
                        </ul>
                    </GlassCard>

                    <GlassCard>
                        <div className="card-header">
                            <h3>🔹 Why JSON?</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                            <li>Easy to read and write</li>
                            <li>Lightweight</li>
                            <li>Language independent (works with Python, Java, etc.)</li>
                            <li>Works naturally with JavaScript</li>
                        </ul>
                        <div className="card-footer" style={{ marginTop: '1rem' }}>
                            <span className="tip"><i className="fas fa-check-circle"></i> Most APIs use JSON</span>
                        </div>
                    </GlassCard>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem' }}>
                    <div className="info-card" style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444' }}>
                        <div className="info-card-header">
                            <i className="fas fa-exclamation-triangle" style={{ color: '#ef4444' }}></i>
                            <h3 style={{ color: '#ef4444' }}>Important Rules</h3>
                        </div>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                            <li>❌ <strong>No Single Quotes:</strong> Keys & Strings must use double quotes <code>" "</code>.</li>
                            <li>❌ <strong>No Functions:</strong> JSON cannot store functions.</li>
                            <li>❌ <strong>No Comments:</strong> Comments are not allowed.</li>
                            <li>✅ <strong>Data Only:</strong> Only data, no logic.</li>
                        </ul>
                    </div>

                    <GlassCard>
                        <h3>🔹 Types of Data in JSON</h3>
                        <table style={{ width: '100%', fontSize: '0.9rem', borderCollapse: 'collapse', marginTop: '0.5rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.25rem' }}>Type</th>
                                    <th style={{ textAlign: 'left', padding: '0.25rem' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{ padding: '0.25rem' }}>String</td><td style={{ padding: '0.25rem' }}><code>"Hello"</code></td></tr>
                                <tr><td style={{ padding: '0.25rem' }}>Number</td><td style={{ padding: '0.25rem' }}><code>25</code></td></tr>
                                <tr><td style={{ padding: '0.25rem' }}>Boolean</td><td style={{ padding: '0.25rem' }}><code>true</code></td></tr>
                                <tr><td style={{ padding: '0.25rem' }}>Array</td><td style={{ padding: '0.25rem' }}><code>["JS", "React"]</code></td></tr>
                                <tr><td style={{ padding: '0.25rem' }}>Object</td><td style={{ padding: '0.25rem' }}><code>{`{"a": 1}`}</code></td></tr>
                                <tr><td style={{ padding: '0.25rem' }}>Null</td><td style={{ padding: '0.25rem' }}><code>null</code></td></tr>
                            </tbody>
                        </table>
                    </GlassCard>
                </div>

                <GlassCard style={{ marginTop: '2rem' }}>
                    <h3>✅ Valid JSON Example</h3>
                    <CodeBlock>
                        <pre><code>{`{
  "name": "Janani",
  "age": 21,
  "isStudent": true,
  "skills": ["JS", "React"],
  "address": { "city": "Chennai" },
  "result": null
}`}</code></pre>
                    </CodeBlock>
                </GlassCard>

                <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>🔹 JSON Methods</h3>

                <div className="grid-2">
                    {/* JSON.parse() */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>1️⃣ JSON.parse()</h3>
                            <span className="badge" style={{ background: 'var(--accent-success)', color: '#fff' }}>Receive</span>
                        </div>
                        <p>Converts a <strong>JSON string</strong> into a <strong>JavaScript Object</strong>.</p>
                        <CodeBlock>
                            <pre><code>let json = '{`{"name":"Janani","age":21}`}';
                                let obj = JSON.parse(json);

                                console.log(obj.name); // "Janani"</code></pre>
                        </CodeBlock>

                        <div style={{ marginTop: '1rem' }}>
                            <h4>🧪 Array Example</h4>
                            <CodeBlock>
                                <pre><code>let jsonArr = '[{`{"id":1}`}, {`{"id":2}`}]';
                                    let res = JSON.parse(jsonArr);
                                    console.log(res[0].id); // 1</code></pre>
                            </CodeBlock>
                        </div>

                        <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444' }}>
                            <p style={{ fontSize: '0.85rem' }}><strong>❌ Error:</strong> If keys aren't double-quoted (e.g., <code>{`{name:'Ajay'}`}</code>), parsing fails.</p>
                        </div>
                    </GlassCard>

                    {/* JSON.stringify() */}
                    <GlassCard>
                        <div className="card-header">
                            <h3>2️⃣ JSON.stringify()</h3>
                            <span className="badge" style={{ background: 'var(--accent-primary)', color: '#fff' }}>Send</span>
                        </div>
                        <p>Converts a <strong>JavaScript Object</strong> into a <strong>JSON string</strong>.</p>
                        <CodeBlock>
                            <pre><code>let user = {`{ name: "Ajay", age: 22 }`};
                                let str = JSON.stringify(user);
// Result: '{`{"name":"Ajay","age":22}`}'</code></pre>
                        </CodeBlock>

                        <div style={{ marginTop: '1rem' }}>
                            <h4>🧪 Array Example</h4>
                            <CodeBlock>
                                <pre><code>let arr = [{`{id:1, item:"Pen"}`}];
                                    console.log(JSON.stringify(arr));
// '[{`{"id":1,"item":"Pen"}`}]'</code></pre>
                            </CodeBlock>
                        </div>

                        <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(245, 158, 11, 0.1)', borderLeft: '3px solid #f59e0b' }}>
                            <p style={{ fontSize: '0.85rem' }}><strong>⚠️ Ignores:</strong> Functions and <code>undefined</code> are removed during stringify.</p>
                        </div>
                    </GlassCard>
                </div>

                <GlassCard style={{ marginTop: '2rem' }}>
                    <h3>✅ Quick Comparison</h3>
                    <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <th style={{ textAlign: 'left', padding: '0.75rem' }}>Feature</th>
                                <th style={{ textAlign: 'left', padding: '0.75rem' }}>JSON.parse()</th>
                                <th style={{ textAlign: 'left', padding: '0.75rem' }}>JSON.stringify()</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '0.75rem' }}>Action</td>
                                <td style={{ padding: '0.75rem' }}>JSON String → JS Object</td>
                                <td style={{ padding: '0.75rem' }}>JS Object → JSON String</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                <td style={{ padding: '0.75rem' }}>Input</td>
                                <td style={{ padding: '0.75rem' }}>String</td>
                                <td style={{ padding: '0.75rem' }}>Object</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '0.75rem' }}>Use Case</td>
                                <td style={{ padding: '0.75rem', color: 'var(--accent-success)' }}>Receiving Data</td>
                                <td style={{ padding: '0.75rem', color: 'var(--accent-primary)' }}>Sending Data</td>
                            </tr>
                        </tbody>
                    </table>
                </GlassCard>

                <div className="info-card" style={{ marginTop: '2rem', background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6' }}>
                    <div className="info-card-header">
                        <i className="fas fa-network-wired" style={{ color: '#3b82f6' }}></i>
                        <h3 style={{ color: '#3b82f6' }}>Real-Time Example (API Flow)</h3>
                    </div>
                    <CodeBlock>
                        <pre><code>{`// 1. Sending Data (Client -> Server)
let data = { name: "Janani", age: 21 };
fetch("/api/user", {
  method: "POST",
  body: JSON.stringify(data) // Convert JS Object -> JSON String
});

// 2. Receiving Data (Server -> Client)
fetch("/api/user")
  .then(res => res.json()) // Internal uses JSON.parse()
  .then(data => console.log(data)); // Data is now a JS Object`}</code></pre>
                    </CodeBlock>
                </div>


            </section>
        </>
    );
};

export default DataStructures;

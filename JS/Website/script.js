// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
    const darkModeBtn = document.getElementById('darkModeBtn');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Update toggle state
    if (themeToggle) {
        themeToggle.checked = savedTheme === 'dark';
        themeLabel.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }

    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Update UI
        if (themeToggle) {
            themeToggle.checked = newTheme === 'dark';
            themeLabel.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }

        // Update dark mode button icon
        if (darkModeBtn) {
            const icon = darkModeBtn.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    }

    // Event listeners
    if (themeToggle) {
        themeToggle.addEventListener('change', toggleTheme);
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleTheme);
    }
}

// Sidebar Collapse Functionality
function initSidebar() {
    const collapseBtn = document.getElementById('collapseBtn');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (collapseBtn && sidebar) {
        collapseBtn.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');

            // Update icon
            const icon = collapseBtn.querySelector('i');
            if (icon) {
                icon.className = sidebar.classList.contains('collapsed')
                    ? 'fas fa-chevron-right'
                    : 'fas fa-chevron-left';
            }
        });
    }

    // Mobile sidebar toggle
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.cssText = `
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        width: 48px;
        height: 48px;
        background: var(--accent-primary);
        color: white;
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1001;
        box-shadow: var(--shadow-lg);
        display: none;
    `;

    document.body.appendChild(mobileMenuBtn);

    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileMenuBtn.innerHTML = sidebar.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    // Show/hide mobile menu button based on screen size
    function updateMobileMenuVisibility() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'flex';
            sidebar.classList.remove('collapsed');
            mainContent.classList.remove('expanded');
        } else {
            mobileMenuBtn.style.display = 'none';
            sidebar.classList.remove('active');
        }
    }

    updateMobileMenuVisibility();
    window.addEventListener('resize', updateMobileMenuVisibility);

    // Close sidebar when clicking on a link (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Navigation and Active State Management
function initNavigation() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const currentSectionElement = document.getElementById('currentSection');
    const currentTopicElement = document.getElementById('currentTopic');

    // Function to update active nav link
    function updateActiveNav() {
        let currentSection = '';
        let currentTopic = '';

        // Find current section based on scroll position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = sectionId;

                // Find the section title
                const titleElement = section.querySelector('.section-title');
                if (titleElement) {
                    // Remove icon from title text
                    const titleText = titleElement.textContent.trim();
                    currentTopic = titleText.replace(/⚡|📦|🧬|➗|🚦|🔄|🍳|📚|🔡|🧊|🕸️|🚀|⏳|🎯/g, '').trim();
                }
            }
        });

        // Update breadcrumb
        if (currentSectionElement && currentTopicElement) {
            const sectionName = currentSection ? currentSection.charAt(0).toUpperCase() + currentSection.slice(1) : 'Introduction';
            currentSectionElement.textContent = sectionName;
            currentTopicElement.textContent = currentTopic || 'Getting Started';
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');

                // Update parent nav group
                const navGroup = link.closest('.nav-group');
                if (navGroup) {
                    document.querySelectorAll('.nav-group').forEach(group => {
                        group.classList.remove('active');
                    });
                    navGroup.classList.add('active');
                }
            }
        });

        // Update learning progress
        updateLearningProgress();
    }

    // Initial update
    updateActiveNav();

    // Update on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 100;
                    const elementPosition = targetElement.offsetTop;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Learning Progress Tracking
function initLearningProgress() {
    const progressFill = document.getElementById('learningProgress');
    const progressText = document.querySelector('.progress-text');
    const sections = document.querySelectorAll('.content-section');
    const completionBadge = document.querySelector('.completion-badge');

    let completedSections = [];
    try {
        completedSections = JSON.parse(localStorage.getItem('completedSections')) || [];
    } catch (e) {
        completedSections = [];
    }

    function updateLearningProgress() {
        const totalSections = sections.length;
        const completedCount = completedSections.length;
        const progressPercentage = Math.round((completedCount / totalSections) * 100);

        // Update progress bar
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }

        // Update progress text
        if (progressText) {
            progressText.textContent = `${progressPercentage}% Complete`;
        }

        // Update completion badge text
        if (completionBadge) {
            const currentSectionId = window.location.hash.replace('#', '') || 'intro';
            const isCompleted = completedSections.includes(currentSectionId);

            const badgeText = completionBadge.querySelector('span');
            const badgeIcon = completionBadge.querySelector('i');

            if (isCompleted) {
                badgeText.textContent = 'Completed';
                badgeIcon.className = 'fas fa-check-circle';
                badgeIcon.style.color = 'var(--accent-success)';
            } else {
                badgeText.textContent = 'Mark as Complete';
                badgeIcon.className = 'far fa-check-circle';
                badgeIcon.style.color = '';
            }
        }
    }

    // Mark section as complete
    if (completionBadge) {
        completionBadge.addEventListener('click', () => {
            const currentSectionId = window.location.hash.replace('#', '') || 'intro';
            const index = completedSections.indexOf(currentSectionId);

            if (index === -1) {
                // Mark as completed
                completedSections.push(currentSectionId);

                // Show success animation
                completionBadge.style.backgroundColor = 'var(--accent-success)';
                completionBadge.style.color = 'white';

                setTimeout(() => {
                    completionBadge.style.backgroundColor = '';
                    completionBadge.style.color = '';
                }, 1000);
            } else {
                // Remove from completed
                completedSections.splice(index, 1);
            }

            // Save to localStorage
            localStorage.setItem('completedSections', JSON.stringify(completedSections));

            // Update progress
            updateLearningProgress();
        });
    }

    // Initialize progress
    updateLearningProgress();
}

// Interactive Code Examples
function initInteractiveExamples() {
    // Variable example
    const runVarBtn = document.getElementById('runVarExample');
    const varOutput = document.getElementById('varOutput');

    if (runVarBtn && varOutput) {
        runVarBtn.addEventListener('click', () => {
            const outputContent = varOutput.querySelector('.output-content');

            try {
                // Clear previous output
                outputContent.innerHTML = '';

                // Execute the example code
                const code = `let count = 5;
const multiplier = 2;
let result = count * multiplier;

console.log(\`Count: \${count}\`);
console.log(\`Result: \${result}\`);

// The line below would cause an error if uncommented
// multiplier = 3; // ❌ This will cause an error`;

                // Capture console.log output
                const originalLog = console.log;
                let logs = [];

                console.log = function (...args) {
                    logs.push(args.join(' '));
                    originalLog.apply(console, args);
                };

                // Execute the code
                eval(code);

                // Restore console.log
                console.log = originalLog;

                // Display output
                logs.forEach(log => {
                    const logElement = document.createElement('div');
                    logElement.textContent = log;
                    logElement.style.marginBottom = '0.5rem';
                    logElement.style.fontFamily = "'Fira Code', monospace";
                    logElement.style.color = 'var(--text-primary)';
                    outputContent.appendChild(logElement);
                });

                // Add explanation
                const explanation = document.createElement('div');
                explanation.innerHTML = `
                    <div style="margin-top: 1rem; padding: 1rem; background: rgba(59, 130, 246, 0.1); border-radius: 8px;">
                        <strong>Explanation:</strong> The <code>const</code> variable <code>multiplier</code> cannot be reassigned.
                        Try uncommenting the last line in the code to see the error.
                    </div>
                `;
                outputContent.appendChild(explanation);

            } catch (error) {
                outputContent.innerHTML = `
                    <div style="color: var(--accent-danger); font-family: 'Fira Code', monospace;">
                        <strong>Error:</strong> ${error.message}
                    </div>
                `;
            }
        });
    }

    // Type checking demo
    const typeCheckDemo = document.createElement('div');
    typeCheckDemo.className = 'interactive-box';
    typeCheckDemo.innerHTML = `
        <h3><i class="fas fa-flask"></i> Type Checking Interactive Demo</h3>
        <p>Enter any JavaScript value to check its type:</p>
        <div style="display: flex; gap: 1rem; margin: 1rem 0;">
            <input type="text" id="typeInput" placeholder="Enter value (e.g., 42, 'hello', true)" style="flex: 1; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-primary); color: var(--text-primary);">
            <button id="checkTypeBtn" class="run-btn">
                <i class="fas fa-search"></i> Check Type
            </button>
        </div>
        <div id="typeOutput" class="output-display">
            <div class="output-header">Type Result:</div>
            <div class="output-content">Enter a value above and click "Check Type"</div>
        </div>
    `;

    // Insert after the type-check-demo section
    const typeCheckSection = document.querySelector('.type-check-demo');
    if (typeCheckSection) {
        typeCheckSection.appendChild(typeCheckDemo);

        // Add functionality
        const checkTypeBtn = document.getElementById('checkTypeBtn');
        const typeInput = document.getElementById('typeInput');
        const typeOutput = document.getElementById('typeOutput');

        checkTypeBtn.addEventListener('click', () => {
            const inputValue = typeInput.value.trim();
            const outputContent = typeOutput.querySelector('.output-content');

            if (!inputValue) {
                outputContent.innerHTML = '<span style="color: var(--accent-warning)">Please enter a value</span>';
                return;
            }

            try {
                // Parse the input value
                let value;
                if (inputValue === 'null') {
                    value = null;
                } else if (inputValue === 'undefined') {
                    value = undefined;
                } else if (inputValue === 'true') {
                    value = true;
                } else if (inputValue === 'false') {
                    value = false;
                } else if (!isNaN(inputValue) && inputValue !== '') {
                    // Check if it's a number
                    value = Number(inputValue);
                    // Check if it's actually NaN
                    if (isNaN(value)) {
                        value = inputValue;
                    }
                } else if (inputValue.startsWith('[') && inputValue.endsWith(']')) {
                    // Try to parse as array
                    try {
                        value = JSON.parse(inputValue);
                    } catch {
                        value = inputValue;
                    }
                } else if (inputValue.startsWith('{') && inputValue.endsWith('}')) {
                    // Try to parse as object
                    try {
                        value = JSON.parse(inputValue);
                    } catch {
                        value = inputValue;
                    }
                } else {
                    // Check if it's a string (remove quotes if present)
                    if ((inputValue.startsWith("'") && inputValue.endsWith("'")) ||
                        (inputValue.startsWith('"') && inputValue.endsWith('"'))) {
                        value = inputValue.slice(1, -1);
                    } else {
                        value = inputValue;
                    }
                }

                // Get the type
                const type = typeof value;
                let additionalInfo = '';

                // Special cases
                if (value === null) {
                    additionalInfo = ' (Note: typeof null returns "object" due to historical bug in JavaScript)';
                } else if (Array.isArray(value)) {
                    additionalInfo = ' (Note: Arrays are objects in JavaScript)';
                }

                // Display result
                outputContent.innerHTML = `
                    <div style="margin-bottom: 1rem;">
                        <strong>Input:</strong> <code>${JSON.stringify(value)}</code>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <strong>Type:</strong> <span style="color: var(--accent-primary); font-weight: bold;">${type}</span>
                    </div>
                    <div>
                        <strong>typeof result:</strong> <code>typeof ${JSON.stringify(value)} === "${type}"</code>
                        ${additionalInfo ? `<div style="margin-top: 0.5rem; color: var(--accent-warning);">${additionalInfo}</div>` : ''}
                    </div>
                `;

            } catch (error) {
                outputContent.innerHTML = `
                    <div style="color: var(--accent-danger);">
                        <strong>Error:</strong> ${error.message}
                    </div>
                `;
            }
        });

        // Allow Enter key to trigger check
        typeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkTypeBtn.click();
            }
        });
    }
}



// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (!backToTopBtn) return;

    function toggleBackToTop() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Initial check
    toggleBackToTop();

    // Update on scroll
    window.addEventListener('scroll', toggleBackToTop);

    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Practice Exercises
function initPracticeExercises() {
    const checkButtons = document.querySelectorAll('.check-btn');

    checkButtons.forEach(button => {
        button.addEventListener('click', function () {
            const exercise = this.closest('.exercise');
            const codeInput = exercise.querySelector('.code-input');
            const solution = getExerciseSolution(exercise);

            if (!codeInput || !solution) return;

            const userCode = codeInput.value.trim();
            const result = checkSolution(userCode, solution);

            // Show result
            showExerciseResult(exercise, result);
        });
    });
}

function getExerciseSolution(exercise) {
    const title = exercise.querySelector('h3')?.textContent || '';

    if (title.includes('Variable Swapping')) {
        return {
            test: (code) => {
                try {
                    // Test the code
                    let a = 5, b = 10;
                    eval(`${code}\nif (a === 10 && b === 5) return true;`);
                    return false;
                } catch {
                    return false;
                }
            },
            solution: `// Solution 1: Using a temporary variable
let temp = a;
a = b;
b = temp;

// Solution 2: Using destructuring
[a, b] = [b, a];

// Solution 3: Using arithmetic
a = a + b;
b = a - b;
a = a - b;`
        };
    }

    return null;
}

function checkSolution(userCode, solution) {
    if (!userCode) {
        return {
            success: false,
            message: 'Please write some code first!'
        };
    }

    try {
        const isValid = solution.test(userCode);

        return {
            success: isValid,
            message: isValid
                ? '🎉 Correct! Well done!'
                : '❌ Not quite right. Try again!',
            solution: solution.solution
        };
    } catch (error) {
        return {
            success: false,
            message: `Error: ${error.message}`
        };
    }
}

function showExerciseResult(exercise, result) {
    // Remove existing result
    const existingResult = exercise.querySelector('.exercise-result');
    if (existingResult) {
        existingResult.remove();
    }

    // Create result element
    const resultElement = document.createElement('div');
    resultElement.className = 'exercise-result';
    resultElement.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        background-color: ${result.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
        border: 1px solid ${result.success ? 'var(--accent-success)' : 'var(--accent-danger)'};
    `;

    resultElement.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <i class="fas ${result.success ? 'fa-check-circle' : 'fa-times-circle'}" 
               style="color: ${result.success ? 'var(--accent-success)' : 'var(--accent-danger)'}"></i>
            <strong>${result.message}</strong>
        </div>
        ${!result.success && result.solution ? `
            <details style="margin-top: 0.5rem;">
                <summary style="cursor: pointer; color: var(--accent-primary); font-size: 0.875rem;">
                    Show solution
                </summary>
                <pre style="margin-top: 0.5rem; padding: 0.5rem; background: var(--bg-primary); border-radius: 4px; font-size: 0.75rem;">${result.solution}</pre>
            </details>
        ` : ''}
    `;

    exercise.appendChild(resultElement);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initThemeToggle();
    initSidebar();
    initNavigation();
    initLearningProgress();
    initInteractiveExamples();

    initBackToTop();
    initPracticeExercises();

    // Add keyboard shortcuts


    // Add loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'loadingOverlay';
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--bg-primary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.3s ease;
    `;
    loadingOverlay.innerHTML = `
        <div style="text-align: center;">
            <i class="fab fa-js-square" style="font-size: 4rem; color: var(--accent-primary); margin-bottom: 1rem;"></i>
            <h2 style="font-family: 'Poppins', sans-serif; margin-bottom: 0.5rem;">Loading JavaScript Ultimate Manual</h2>
            <p style="color: var(--text-secondary);">Preparing your learning experience...</p>
            <div style="width: 200px; height: 4px; background: var(--bg-secondary); border-radius: 2px; margin-top: 2rem; overflow: hidden;">
                <div id="loadingProgress" style="height: 100%; background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); width: 0%; transition: width 0.3s ease;"></div>
            </div>
        </div>
    `;

    document.body.appendChild(loadingOverlay);

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        const progressBar = document.getElementById('loadingProgress');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.remove();
                }, 300);
            }, 300);
        }
    }, 50);

    // Add animation to cards when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all glass cards and sections
    document.querySelectorAll('.glass-card, .content-section').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });

    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--bg-primary);
                color: var(--text-primary);
                padding: 0.5rem 0.75rem;
                border-radius: 4px;
                font-size: 0.75rem;
                white-space: nowrap;
                z-index: 1000;
                box-shadow: var(--shadow-lg);
                border: 1px solid var(--border-color);
            `;

            document.body.appendChild(tooltip);

            const rect = this.getBoundingClientRect();
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;

            this._tooltip = tooltip;
        });

        element.addEventListener('mouseleave', function () {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });

    // Add copy code functionality
    document.querySelectorAll('pre').forEach(pre => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '<i class="far fa-copy"></i>';
        copyButton.title = 'Copy code';
        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: 4px;
            padding: 0.25rem 0.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.2s ease;
        `;

        copyButton.addEventListener('mouseenter', () => {
            copyButton.style.color = 'var(--accent-primary)';
            copyButton.style.borderColor = 'var(--accent-primary)';
        });

        copyButton.addEventListener('mouseleave', () => {
            copyButton.style.color = 'var(--text-secondary)';
            copyButton.style.borderColor = 'var(--border-color)';
        });

        copyButton.addEventListener('click', async () => {
            const code = pre.textContent;
            try {
                await navigator.clipboard.writeText(code);

                // Show success feedback
                const originalHTML = copyButton.innerHTML;
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                copyButton.style.color = 'var(--accent-success)';
                copyButton.style.borderColor = 'var(--accent-success)';

                setTimeout(() => {
                    copyButton.innerHTML = originalHTML;
                    copyButton.style.color = 'var(--text-secondary)';
                    copyButton.style.borderColor = 'var(--border-color)';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
            }
        });

        pre.style.position = 'relative';
        pre.appendChild(copyButton);
    });

    // Add current year to footer
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement && yearElement.textContent.includes('2023')) {
        yearElement.textContent = yearElement.textContent.replace('2023', new Date().getFullYear());
    }

    console.log('JavaScript Ultimate Manual initialized successfully! 🚀');
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initThemeToggle,
        initSidebar,
        initNavigation,
        initLearningProgress,
        initInteractiveExamples,
        initSearch,
        initBackToTop,
        initPracticeExercises
    };
}
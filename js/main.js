document.addEventListener('DOMContentLoaded', function() {
    const tools = [
        // Image Tools
        { name: 'Image to PNG Converter', category: 'Image Tools', file: 'image-to-png.html', icon: 'bi-image' },
        { name: 'Image to JPG Converter', category: 'Image Tools', file: 'image-to-jpg.html', icon: 'bi-image' },
        { name: 'Image Resizer', category: 'Image Tools', file: 'image-resizer.html', icon: 'bi-arrows-fullscreen' },
        { name: 'Image Compressor', category: 'Image Tools', file: 'image-compressor.html', icon: 'bi-file-earmark-zip' },
        { name: 'Image Cropper', category: 'Image Tools', file: 'image-cropper.html', icon: 'bi-crop' },
        { name: 'Convert Image to Base64', category: 'Image Tools', file: 'image-to-base64.html', icon: 'bi-file-earmark-binary' },
        { name: 'Convert WebP to PNG', category: 'Image Tools', file: 'webp-to-png.html', icon: 'bi-file-earmark-image' },
        { name: 'GIF Maker', category: 'Image Tools', file: 'gif-maker.html', icon: 'bi-file-earmark-play' },
        { name: 'QR Code Generator', category: 'Image Tools', file: 'qr-code-generator.html', icon: 'bi-qr-code' },
        { name: 'Screenshot to PDF Converter', category: 'Image Tools', file: 'screenshot-to-pdf.html', icon: 'bi-file-earmark-pdf' },

        // SEO Tools
        { name: 'Meta Tag Generator', category: 'SEO Tools', file: 'meta-tag-generator.html', icon: 'bi-tags' },
        { name: 'Keyword Density Checker', category: 'SEO Tools', file: 'keyword-density-checker.html', icon: 'bi-search' },
        { name: 'Sitemap Generator', category: 'SEO Tools', file: 'sitemap-generator.html', icon: 'bi-diagram-3' },
        { name: 'Robots.txt Generator', category: 'SEO Tools', file: 'robots-txt-generator.html', icon: 'bi-robot' },
        { name: 'Google Index Checker', category: 'SEO Tools', file: 'google-index-checker.html', icon: 'bi-google' },
        { name: 'Domain Authority Checker', category: 'SEO Tools', file: 'domain-authority-checker.html', icon: 'bi-shield-check' },
        { name: 'Backlink Checker', category: 'SEO Tools', file: 'backlink-checker.html', icon: 'bi-link-45deg' },
        { name: 'Page Speed Checker', category: 'SEO Tools', file: 'page-speed-checker.html', icon: 'bi-speedometer2' },
        { name: 'XML Sitemap Validator', category: 'SEO Tools', file: 'xml-sitemap-validator.html', icon: 'bi-file-earmark-code' },
        { name: 'Mobile-Friendly Test', category: 'SEO Tools', file: 'mobile-friendly-test.html', icon: 'bi-phone' },

        // Text Tools
        { name: 'Word Counter', category: 'Text Tools', file: 'word-counter.html', icon: 'bi-fonts' },
        { name: 'Character Counter', category: 'Text Tools', file: 'character-counter.html', icon: 'bi-type' },
        { name: 'Case Converter', category: 'Text Tools', file: 'case-converter.html', icon: 'bi-text-paragraph' },
        { name: 'Plagiarism Checker', category: 'Text Tools', file: 'plagiarism-checker.html', icon: 'bi-journal-check' },
        { name: 'Grammar Checker', category: 'Text Tools', file: 'grammar-checker.html', icon: 'bi-spellcheck' },
        { name: 'Text-to-Speech', category: 'Text Tools', file: 'text-to-speech.html', icon: 'bi-megaphone' },
        { name: 'Speech-to-Text', category: 'Text Tools', file: 'speech-to-text.html', icon: 'bi-mic' },
        { name: 'URL Encoder & Decoder', category: 'Text Tools', file: 'url-encoder-decoder.html', icon: 'bi-link' },
        { name: 'Fancy Text Generator', category: 'Text Tools', file: 'fancy-text-generator.html', icon: 'bi-type-italic' },
        { name: 'Random Text Generator', category: 'Text Tools', file: 'random-text-generator.html', icon: 'bi-shuffle' },

        // Developer Tools
        { name: 'JSON Formatter', category: 'Developer Tools', file: 'json-formatter.html', icon: 'bi-braces' },
        { name: 'HTML to Markdown Converter', category: 'Developer Tools', file: 'html-to-markdown.html', icon: 'bi-filetype-html' },
        { name: 'CSS Minifier', category: 'Developer Tools', file: 'css-minifier.html', icon: 'bi-filetype-css' },
        { name: 'JavaScript Minifier', category: 'Developer Tools', file: 'javascript-minifier.html', icon: 'bi-filetype-js' },
        { name: 'SQL Formatter', category: 'Developer Tools', file: 'sql-formatter.html', icon: 'bi-database' },
        { name: 'HTACCESS Redirect Generator', category: 'Developer Tools', file: 'htaccess-redirect-generator.html', icon: 'bi-arrow-right-square' },
        { name: 'Markdown to HTML Converter', category: 'Developer Tools', file: 'markdown-to-html.html', icon: 'bi-markdown' },
        { name: 'Color Code Picker', category: 'Developer Tools', file: 'color-code-picker.html', icon: 'bi-palette' },
        { name: 'Base64 Encoder & Decoder', category: 'Developer Tools', file: 'base64-encoder-decoder.html', icon: 'bi-file-earmark-binary' },
        { name: 'IP Address Lookup', category: 'Developer Tools', file: 'ip-address-lookup.html', icon: 'bi-geo-alt' },

        // Math & Calculators
        { name: 'Percentage Calculator', category: 'Math & Calculators', file: 'percentage-calculator.html', icon: 'bi-percent' },
        { name: 'Age Calculator', category: 'Math & Calculators', file: 'age-calculator.html', icon: 'bi-calendar-date' },
        { name: 'BMI Calculator', category: 'Math & Calculators', file: 'bmi-calculator.html', icon: 'bi-calculator' },
        { name: 'Loan EMI Calculator', category: 'Math & Calculators', file: 'loan-emi-calculator.html', icon: 'bi-cash-stack' },
        { name: 'Scientific Calculator', category: 'Math & Calculators', file: 'scientific-calculator.html', icon: 'bi-calculator' },
        { name: 'Discount Calculator', category: 'Math & Calculators', file: 'discount-calculator.html', icon: 'bi-tag' },
        { name: 'Currency Converter', category: 'Math & Calculators', file: 'currency-converter.html', icon: 'bi-currency-exchange' },
        { name: 'Time Zone Converter', category: 'Math & Calculators', file: 'time-zone-converter.html', icon: 'bi-clock' },
        { name: 'Binary to Decimal Converter', category: 'Math & Calculators', file: 'binary-to-decimal.html', icon: 'bi-calculator' },
        { name: 'Tip Calculator', category: 'Math & Calculators', file: 'tip-calculator.html', icon: 'bi-cash' },

        // Unit Converters
        { name: 'Length Converter', category: 'Unit Converters', file: 'length-converter.html', icon: 'bi-rulers' },
        { name: 'Weight Converter', category: 'Unit Converters', file: 'weight-converter.html', icon: 'bi-weight' },
        { name: 'Speed Converter', category: 'Unit Converters', file: 'speed-converter.html', icon: 'bi-speedometer' },
        { name: 'Temperature Converter', category: 'Unit Converters', file: 'temperature-converter.html', icon: 'bi-thermometer-half' },
        { name: 'Volume Converter', category: 'Unit Converters', file: 'volume-converter.html', icon: 'bi-box' },
        { name: 'Data Storage Converter', category: 'Unit Converters', file: 'data-storage-converter.html', icon: 'bi-hdd' },
        { name: 'Energy Converter', category: 'Unit Converters', file: 'energy-converter.html', icon: 'bi-lightning' },
        { name: 'Pressure Converter', category: 'Unit Converters', file: 'pressure-converter.html', icon: 'bi-gauge' },
        { name: 'Fuel Efficiency Converter', category: 'Unit Converters', file: 'fuel-efficiency-converter.html', icon: 'bi-fuel-pump' },
        { name: 'Angle Converter', category: 'Unit Converters', file: 'angle-converter.html', icon: 'bi-compass' },

        // Security & Encryption Tools
        { name: 'MD5 Hash Generator', category: 'Security & Encryption Tools', file: 'md5-hash-generator.html', icon: 'bi-hash' },
        { name: 'SHA256 Hash Generator', category: 'Security & Encryption Tools', file: 'sha256-hash-generator.html', icon: 'bi-hash' },
        { name: 'Password Generator', category: 'Security & Encryption Tools', file: 'password-generator.html', icon: 'bi-key' },
        { name: 'Random String Generator', category: 'Security & Encryption Tools', file: 'random-string-generator.html', icon: 'bi-shuffle' },
        { name: 'URL Shortener', category: 'Security & Encryption Tools', file: 'url-shortener.html', icon: 'bi-link-45deg' },
        { name: 'IP Geolocation Finder', category: 'Security & Encryption Tools', file: 'ip-geolocation-finder.html', icon: 'bi-geo-alt' },
        { name: 'SSL Certificate Checker', category: 'Security & Encryption Tools', file: 'ssl-certificate-checker.html', icon: 'bi-lock' },
        { name: 'Whois Lookup', category: 'Security & Encryption Tools', file: 'whois-lookup.html', icon: 'bi-person-bounding-box' },
        { name: 'HTTP Headers Checker', category: 'Security & Encryption Tools', file: 'http-headers-checker.html', icon: 'bi-file-earmark-text' },
        { name: 'Privacy Policy Generator', category: 'Security & Encryption Tools', file: 'privacy-policy-generator.html', icon: 'bi-file-earmark-lock' },

        // Social Media Tools
        { name: 'YouTube Thumbnail Downloader', category: 'Social Media Tools', file: 'youtube-thumbnail-downloader.html', icon: 'bi-youtube' },
        { name: 'Instagram Photo Downloader', category: 'Social Media Tools', file: 'instagram-photo-downloader.html', icon: 'bi-instagram' },
        { name: 'Twitter Video Downloader', category: 'Social Media Tools', file: 'twitter-video-downloader.html', icon: 'bi-twitter' },
        { name: 'Facebook Video Downloader', category: 'Social Media Tools', file: 'facebook-video-downloader.html', icon: 'bi-facebook' },
        { name: 'TikTok Video Downloader', category: 'Social Media Tools', file: 'tiktok-video-downloader.html', icon: 'bi-tiktok' },
        { name: 'YouTube Tags Extractor', category: 'Social Media Tools', file: 'youtube-tags-extractor.html', icon: 'bi-youtube' },
        { name: 'Hashtag Generator', category: 'Social Media Tools', file: 'hashtag-generator.html', icon: 'bi-hash' },
        { name: 'Social Media Post Generator', category: 'Social Media Tools', file: 'social-media-post-generator.html', icon: 'bi-share' },
        { name: 'Emoji Keyboard', category: 'Social Media Tools', file: 'emoji-keyboard.html', icon: 'bi-emoji-smile' },
        { name: 'Twitter Character Counter', category: 'Social Media Tools', file: 'twitter-character-counter.html', icon: 'bi-twitter' },

        // Miscellaneous Tools
        { name: 'Barcode Generator', category: 'Miscellaneous Tools', file: 'barcode-generator.html', icon: 'bi-barcode' },
        { name: 'Meme Generator', category: 'Miscellaneous Tools', file: 'meme-generator.html', icon: 'bi-image' },
        { name: 'Resume Builder', category: 'Miscellaneous Tools', file: 'resume-builder.html', icon: 'bi-file-earmark-person' },
        { name: 'Invoice Generator', category: 'Miscellaneous Tools', file: 'invoice-generator.html', icon: 'bi-receipt' },
        { name: 'Business Name Generator', category: 'Miscellaneous Tools', file: 'business-name-generator.html', icon: 'bi-building' },
        { name: 'Lottery Number Generator', category: 'Miscellaneous Tools', file: 'lottery-number-generator.html', icon: 'bi-ticket' },
        { name: 'Flip a Coin Simulator', category: 'Miscellaneous Tools', file: 'flip-a-coin-simulator.html', icon: 'bi-coin' },
        { name: 'Random Number Generator', category: 'Miscellaneous Tools', file: 'random-number-generator.html', icon: 'bi-dice-5' },
        { name: 'Dice Roller Simulator', category: 'Miscellaneous Tools', file: 'dice-roller-simulator.html', icon: 'bi-dice-3' },
        { name: 'Internet Speed Test', category: 'Miscellaneous Tools', file: 'internet-speed-test.html', icon: 'bi-speedometer' },
        { name: 'Daily Planner Creator', category: 'Miscellaneous Tools', file: 'daily-planner-creator.html', icon: 'bi-calendar-check' },
        { name: 'Wedding Invitation Generator', category: 'Miscellaneous Tools', file: 'wedding-invitation-generator.html', icon: 'bi-heart' },
        { name: 'Story Plot Generator', category: 'Miscellaneous Tools', file: 'story-plot-generator.html', icon: 'bi-book' },
        { name: 'E-book Creator', category: 'Miscellaneous Tools', file: 'e-book-creator.html', icon: 'bi-book' },
        { name: 'AI Chatbot Demo', category: 'Miscellaneous Tools', file: 'ai-chatbot-demo.html', icon: 'bi-chat-dots' },
        { name: 'IP Address Tracker', category: 'Miscellaneous Tools', file: 'ip-address-tracker.html', icon: 'bi-geo-alt' },
        { name: 'Fake Address Generator', category: 'Miscellaneous Tools', file: 'fake-address-generator.html', icon: 'bi-person-badge' },
        { name: 'Calculator for Electric Bills', category: 'Miscellaneous Tools', file: 'calculator-electric-bills.html', icon: 'bi-lightbulb' },
        { name: 'Leap Year Checker', category: 'Miscellaneous Tools', file: 'leap-year-checker.html', icon: 'bi-calendar' },
        { name: 'Name to Numerology Calculator', category: 'Miscellaneous Tools', file: 'name-to-numerology-calculator.html', icon: 'bi-hash' }
    ];

    const toolsListDiv = document.getElementById('tools-list');
    const toolSearchInput = document.getElementById('toolSearch');

    function displayTools(filter = '') {
        toolsListDiv.innerHTML = '';
        const filteredTools = tools.filter(tool => 
            tool.name.toLowerCase().includes(filter.toLowerCase())
        );

        const categorizedTools = filteredTools.reduce((acc, tool) => {
            (acc[tool.category] = acc[tool.category] || []).push(tool);
            return acc;
        }, {});

        for (const category in categorizedTools) {
            const categorySection = document.createElement('div');
            categorySection.className = 'col-12 mb-4';
            categorySection.innerHTML = `<h2>${category}</h2><hr>`;
            toolsListDiv.appendChild(categorySection);

            categorizedTools[category].forEach(tool => {
                const toolCard = `
                    <div class="col">
                        <div class="card tool-card">
                            <div class="card-body">
                                <h5 class="card-title"><i class="bi ${tool.icon} me-2"></i>${tool.name}</h5>
                                <p class="card-text">${tool.category} tool.</p>
                            </div>
                            <div class="card-footer">
                                <a href="tools/${tool.file}" class="btn btn-primary">Use Tool</a>
                            </div>
                        </div>
                    </div>
                `;
                toolsListDiv.innerHTML += toolCard;
            });
        }
    }

    toolSearchInput.addEventListener('keyup', (e) => {
        console.log('Search input:', e.target.value);
        displayTools(e.target.value);
    });

    // Initial display of all tools
    displayTools();

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    function observeToolCards() {
        document.querySelectorAll('.tool-card').forEach(card => {
            observer.observe(card);
        });
    }

    // Observe tool cards after they are displayed
    setTimeout(observeToolCards, 100); // Small delay to ensure cards are rendered
});
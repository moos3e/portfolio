import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <a
                href="https://www.linkedin.com/in/mmsaid/"
                target="_blank"
                rel="noopener noreferrer"
                id="mustafaSaid" // This ID should match the CSS selector
            >
                <strong>©MustafaSaid</strong>
            </a>
        </div>
    );
};

export default Footer;
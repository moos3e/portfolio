import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="footer py-6 text-center w-full bg-transparent">
            <a
                href="https://www.linkedin.com/in/mmsaid/"
                target="_blank"
                rel="noopener noreferrer"
                id="mustafaSaid"
                className="font-dynapuff text-xs md:text-sm text-white opacity-90 mx-2 animate-bounce inline-block cursor-pointer transition-all duration-300 hover:opacity-100 hover:text-white hover:shadow-lg"
            >
                <strong>©MustafaSaid</strong>
            </a>
        </div>
    );
};

export default Footer;
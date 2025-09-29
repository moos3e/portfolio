import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <div className="container max-w-2xl w-full mx-auto px-4">
            <div className="hello text-center py-10 md:py-8 sm:py-4">
                <hgroup className="flex flex-col items-center justify-center text-center w-full h-[60vh] md:h-[40vh] sm:h-auto">
                    <h3 className="solo2 text-white text-lg md:text-base sm:text-sm">Hello, I'm</h3>
                    <h1 className="color-transition text-4xl md:text-3xl sm:text-2xl font-bold">
                        <a
                            href="https://www.linkedin.com/in/mmsaid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Mustafa Said
                        </a>
                    </h1>
                    <h3 className="solo2 text-white text-lg md:text-base sm:text-sm">but you can call me moose</h3>
                </hgroup>
            </div>
        </div>
    );
};

export default Header;
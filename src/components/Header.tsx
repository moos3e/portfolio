import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <div className="container">
            <div className="hello">
                <hgroup>
                    <h3 className="solo2">Hello, I'm</h3>
                    <h1 className="color-transition">
                        <a
                            href="https://www.linkedin.com/in/mmsaid/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Mustafa Said
                        </a>
                    </h1>
                    <h3 className="solo2">but you can call me moose</h3>
                </hgroup>
            </div>
        </div>
    );
};

export default Header;
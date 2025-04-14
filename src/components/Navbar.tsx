import React from 'react';

const Navbar: React.FC = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        const element = document.getElementById(targetId || '');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul className="jumping-letters">
                    <li><a href="#header" onClick={handleClick}>Home</a></li>
                    <li><a href="#experience" onClick={handleClick}>Experience</a></li>
                    <li><a href="#projects" onClick={handleClick}>Projects</a></li>
                    <li><a href="#education" onClick={handleClick}>Education</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
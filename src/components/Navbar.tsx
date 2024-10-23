import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul className="jumping-letters"> {/* Add the jumping-letters class here */}
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
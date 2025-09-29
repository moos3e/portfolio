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
        <div className="navbar-container w-full flex justify-center items-center mt-5 fixed top-0 left-0 z-[1000]">
            <div className="navbar flex justify-center items-center font-mono text-xs md:text-sm px-4 py-2 bg-transparent rounded-lg">
                <ul className="jumping-letters flex justify-center items-center uppercase font-semibold list-none p-0 m-0 gap-4 md:gap-6">
                    <li><a href="#header" onClick={handleClick} className="px-3 py-1 rounded-full text-white transition-all duration-300 hover:text-green-700 hover:-translate-y-0.5 hover:shadow-lg">Home</a></li>
                    <li><a href="#experience" onClick={handleClick} className="px-3 py-1 rounded-full text-white transition-all duration-300 hover:text-green-700 hover:-translate-y-0.5 hover:shadow-lg">Experience</a></li>
                    <li><a href="#projects" onClick={handleClick} className="px-3 py-1 rounded-full text-white transition-all duration-300 hover:text-green-700 hover:-translate-y-0.5 hover:shadow-lg">Projects</a></li>
                    <li><a href="#education" onClick={handleClick} className="px-3 py-1 rounded-full text-white transition-all duration-300 hover:text-green-700 hover:-translate-y-0.5 hover:shadow-lg">Education</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
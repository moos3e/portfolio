import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="container">
            <div className="hello">
                <hgroup>
                    <h3 className="solo2">Hello, I'm</h3>
                    <h1 className="color-transition">Mustafa Said</h1>
                    <h3 className="solo2">but you can call me moose</h3>
                </hgroup>
            </div>
        </div>
    );
};

export default Header;
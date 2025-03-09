import React, { useState } from 'react';
import '../styles/Navbar.css';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <button className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#techstack" onClick={toggleMenu}>Tech Stack</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navColor, setNavColor] = useState('transparent');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('hero');
            const techStackSection = document.getElementById('tech-stack');
            const experienceSection = document.getElementById('experience');

            if (heroSection && window.scrollY < heroSection.offsetHeight) {
                setNavColor('transparent');
            } else if (techStackSection && window.scrollY >= techStackSection.offsetTop) {
                setNavColor('purple');
            } else if (experienceSection && window.scrollY >= experienceSection.offsetTop) {
                setNavColor('purple');
            } else {
                setNavColor('transparent');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${navColor}`}>
            <div className="navbar-container">
                <button className="hamburger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#tech-stack" onClick={toggleMenu}>Tech Stack</a></li>
                    <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
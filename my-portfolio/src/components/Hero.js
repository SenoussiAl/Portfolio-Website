import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <h1>Senoussi Al-Nadjib</h1>
            <p>Software Engineer | Ottawa, Ontario, Canada</p>
            <a href="/resume.pdf" download className="resume-download">Download Resume</a>
        </section>
    );
};

export default Hero;
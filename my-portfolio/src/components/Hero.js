import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-container">
                <div className="hero-image">
                <img src="/Profile.jpg" alt="Senoussi Al-Nadjib" />
                </div>
                <div className="hero-content">
                    <h1>Senoussi Al-Nadjib</h1>
                    <p>
                        I am a Software Engineering student at the University of Ottawa with a passion for building scalable and efficient software solutions. I have experience in full-stack development, database design, and cloud technologies.
                    </p>
                    <a href="/resume.pdf" download className="resume-download">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

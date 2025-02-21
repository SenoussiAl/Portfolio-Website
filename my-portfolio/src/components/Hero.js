import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-image">
                    <img 
                        src="public/Profile.jpg" // Replace with your image path
                        alt="Senoussi Al-Nadjib"
                    />
                </div>
                <div className="hero-content">
                    <h1>Senoussi Al-Nadjib</h1>
                    <p>
                        I am a Software Engineering student at the University of Ottawa with a passion for building scalable and efficient software solutions. I have experience in full-stack development, database design, and cloud technologies. I am fluent in both French and English and enjoy working in collaborative environments.
                    </p>
                    <a href="/resume.pdf" download className="resume-download">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
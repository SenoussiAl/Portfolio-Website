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
                        Developer specialized in Java/Spring Boot, JavaScript, and React.js with experience in web application development, CI/CD, and microservices architecture. Experienced working in Agile environments, conducting code reviews, and implementing automated testing.
                    </p>
                    <a href="/resume.pdf" download className="resume-download">Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

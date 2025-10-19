// TechStack.js
import React from 'react';
import '../styles/TechStack.css';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiPostgresql, SiTypescript, SiJavascript, SiDotnet, SiCsharp } from 'react-icons/si';

const TechStack = () => {
    const techStackData = [
        { name: 'C++', icon: <SiCplusplus className="tech-stack-icon" /> },
        { name: 'Java', icon: <FaJava className="tech-stack-icon" /> },
        { name: 'Python', icon: <FaPython className="tech-stack-icon" /> },
        { name: 'C#', icon: <SiCsharp className="tech-stack-icon" /> },
        { name: 'ASP.NET', icon: <SiDotnet className="tech-stack-icon" /> },
        { name: 'JavaScript', icon: <SiJavascript className="tech-stack-icon" /> },
        { name: 'HTML', icon: <FaHtml5 className="tech-stack-icon" /> },
        { name: 'CSS', icon: <FaCss3Alt className="tech-stack-icon" /> },
        { name: 'SQL', icon: <SiPostgresql className="tech-stack-icon" /> },
        { name: 'TypeScript', icon: <SiTypescript className="tech-stack-icon" /> },
        { name: 'React.js', icon: <FaReact className="tech-stack-icon" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="tech-stack-icon" /> },
        { name: 'Git', icon: <FaGitAlt className="tech-stack-icon" /> },
    ];

    return (
        <section id="techstack">
            <div className="tech-stack-container">
                <h2 className="tech-stack-title">Tech Stack</h2>
                <div className="tech-stack-grid">
                    {techStackData.map((tech, index) => (
                        <div key={index} className="tech-stack-item">
                            <div className="tech-stack-item-inner">
                                {tech.icon}
                                {/* <span className="tech-stack-name">{tech.name}</span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

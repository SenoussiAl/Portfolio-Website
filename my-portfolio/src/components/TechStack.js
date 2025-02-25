// TechStack.js
import React from 'react';
import '../styles/TechStack.css';
import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiSpringboot, SiPostman, SiPostgresql, SiTypescript, SiJavascript, } from 'react-icons/si';


const TechStack = () => {
    const techStackData = [
        { name: 'C++', icon: <SiCplusplus className="tech-stack-icon" /> },
        { name: 'Java', icon: <FaJava className="tech-stack-icon" /> },
        { name: 'Python', icon: <FaPython className="tech-stack-icon" /> },
        { name: 'JavaScript', icon: <SiJavascript className="tech-stack-icon" /> },
        { name: 'HTML', icon: <FaHtml5 className="tech-stack-icon" /> },
        { name: 'CSS', icon: <FaCss3Alt className="tech-stack-icon" /> },
        { name: 'SQL', icon: <SiPostgresql className="tech-stack-icon" /> },
        { name: 'TypeScript', icon: <SiTypescript className="tech-stack-icon" /> },
        { name: 'React.js', icon: <FaReact className="tech-stack-icon" /> },
        { name: 'Node.js', icon: <FaNodeJs className="tech-stack-icon" /> },
        { name: 'SpringBoot', icon: <SiSpringboot className="tech-stack-icon" /> },
        { name: 'Postman', icon: <SiPostman className="tech-stack-icon" /> },
        { name: 'Git', icon: <FaGitAlt className="tech-stack-icon" /> },
    ];

    return (
        <section id="techstack">
        <h1 className="section-title">Aboutk</h1>
        <p className="section-subtitle">Hello, My name is Senoussi Al-Nadjib. I am a Software Engineer from Ottawa, Canada.

I love working on a variety of technologies including backend and frontend development.I've been close to a computer since an early age, and been passionate about it ever since.
 My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.</p>
        <div className="tech-stack-container">
            <h2 className="tech-stack-title">Tech Stack</h2>
            <div className="tech-stack-grid">
                {techStackData.map((tech, index) => (
                    <div key={index} className="tech-stack-item">
                        <div className="tech-stack-item-inner">
                            {tech.icon}
                          {/*  <span className="tech-stack-name">{tech.name}</span>
                        */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default TechStack;
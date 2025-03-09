import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('experience');
    const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1 });
    const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1 });

    const experiences = [
        {
            title: "Configuration Management",
            organization: "Shared Services Canada",
            date: "May 2024 - August 2024",
            description: "Optimized configuration processes by mapping thousands of servers to applications.",
            position: "left"
        },
        {
            title: "Front-end Developer",
            organization: "Service Canada",
            date: "September 2022 - December 2022",
            description: "Developed dynamic, data-driven web pages using React.js, Node.js, and TypeScript.",
            position: "right"
        },
        {
            title: "Techincal Analyst",
            organization: "Royal Canadian Mounted Police",
            date: "January 2022 - July 2022",
            description: "Developed and maintained Python and C programs to support internal applications.",
            position: "left"
        },
    ];

    const educations = [
        {
            degree: "Bachelor of Software Engineering",
            institution: "University of Ottawa",
            date: "2020 - 2024",
            description: "Relevant courses: Data Structures, Algorithms, Web Development",
            position: "left"
        },
    ];

    return (
        <section id="experience" ref={sectionRef} className={sectionInView ? 'visible' : ''}>
            <div className="tabs">
                <button 
                    className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                    onClick={() => setActiveTab('experience')}
                ><h2>
                    Experience
                    </h2>
                </button>
                <button 
                    className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
                    onClick={() => setActiveTab('education')}
                ><h2>
                    Education
                    </h2>
                </button>
            </div>
            
            
            <div className="timeline" ref={timelineRef}>
                {(activeTab === 'experience' ? experiences : educations).map((item, index) => (
                    <div 
                        key={index}
                        className={`container ${item.position} ${timelineInView ? 'animate' : ''}`}
                        style={{ '--delay': `${index * 0.2}s` }}
                    >
                        <div className="content">
                            <h3>{item.title || item.degree}</h3>
                            <h4>{item.organization || item.institution} | {item.date}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
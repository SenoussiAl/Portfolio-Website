import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('experience');
    const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1 });
    const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1 });

    const experiences = [
        {
            title: "Software Engineer",
            organization: "Trolet",
            date: "January 2026 - Present",
            description: "Refactored a Java Spring Boot + DynamoDB backend, built Next.js frontend features, automated data entry via the Gemini API, and developed an end-to-end audit logging system.",
            position: "left"
        },
        {
            title: "Software Configuration Manager",
            organization: "Shared Services Canada",
            date: "May 2024 - August 2024",
            description: "Maintained application-to-server relationships in the CMDB, gathered technical requirements across teams, and contributed to a 95% on-time delivery rate.",
            position: "right"
        },
        {
            title: "Software Engineer",
            organization: "Employment and Social Development Canada",
            date: "September 2022 - December 2022",
            description: "Built a Java Spring Boot web application, developed real-time analytics dashboards, and contributed to Docker and CI/CD pipeline improvements on Google Cloud.",
            position: "left"
        },
    ];

    const educations = [
        {
            degree: "Bachelor of Applied Science in Software Engineering",
            institution: "University of Ottawa",
            date: "2020 - 2025",
            description: "Relevant courses: Data Structures, Algorithms, Web Development, Software Design, CI/CD, and Agile Methodology.",
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

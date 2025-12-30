import React from 'react';
import '../styles/Projects.css'; 


const Projects = () => {
    
    const projects = [
        {
            name: "Business Communication Platform",
            summary: "Integrated Twilio’s SMS gateway for bulk messaging, scheduled notifications, and customer response tracking.",
            technologies: "Java, Spring Boot, React.js, TypeScript, MongoDB, PostgreSQL, Twilio",
        },
        {
            name: "Hotel Room Booking",
            summary: "Created a platform enabling online room searches, reservations, and secure payments.",
            technologies: "ASP.NET, React.js, JavaScript, C#, Docker, PostgreSQL",
        },
        {
            name: "Online Marketplace",
            summary: "Developed an online marketplace website that allows users to browse, buy and resell shoes.",
            technologies: " ASP.NET, C#, JavaScript, React.js, Docker, PostgreSQL, JWT",
        },
        {
            name: "Social Media Mobile App",
            summary: "Developed a mobile social platform allowing users to post images, like and comment on content, and message friends.",
            technologies: "React Native, TypeScript, Java, Spring Boot, PostgreSQL, WebSockets",
        },
        {
            name: "Browser Ad Blocker Extension",
            summary: "Extension to block ads on web pages using filter lists.",
            technologies: "JavaScript, Manifest V3",
        },
        {
            name: "Space Shooter Game",
            summary: "Developed a game with player-controlled spaceship shooting at enemies.",
            technologies: "C++, SFML",
        },
    ];

    return (

        <section id="projects">
        <div className="projects-container">
            <h2>My Projects</h2>
            <p className="projects-description">What I have worked on.</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-summary">{project.summary}</p>
                        <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;

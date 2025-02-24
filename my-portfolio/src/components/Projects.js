import React from 'react';
import '../styles/Projects.css'; 

import GitHubIcon from '@mui/icons-material/GitHub'; 

const Projects = () => {
    const projects = [
        {
            name: "Customer Relation Management",
            image: "https://via.placeholder.com/300",
            summary: "Integrated Twilio’s SMS gateway for bulk messaging, scheduled notifications, and customer response tracking.",
            githubLink: "https://github.com/your-repo-link",
            technologies: "Java, Spring Boot, React.js, TypeScript, MongoDB, PostgreSQL, Twilio, Docker, Azure Active Directory",
        },
        {
            name: "Hotel Room Booking Website",
            image: "https://via.placeholder.com/300",
            summary: "Created a platform enabling online room searches, reservations, and secure payments.",
            githubLink: "https://github.com/your-repo-link",
            technologies: "Spring Boot, React.js, TypeScript, Java, Docker, PostgreSQL, WebSocket",
        },
        {
            name: "Basketball Match Predictor",
            image: "https://via.placeholder.com/300", 
            summary: "Developed a web application that predicts a basketball match's results for an upcoming game based on historical data and current conditions.",
            githubLink: "https://github.com/your-repo-link",
            technologies: "Python, TensorFlow, Scikit-Learn, Django, React.js, Pandas",
        },
    ];

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <p className="projects-description">What I have worked on.</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.name} className="project-image" />
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-summary">{project.summary}</p>
                        <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                            <GitHubIcon className="github-icon" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
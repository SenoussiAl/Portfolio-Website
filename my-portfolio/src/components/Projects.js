import React from 'react';
import '../styles/Projects.css'; 


const Projects = () => {
    
    const projects = [
        {
            name: "Business Communication",
            summary: "Integrated Twilio’s SMS gateway for bulk messaging, scheduled notifications, and customer response tracking.",
            technologies: "Java, Spring Boot, React.js, TypeScript, MongoDB, PostgreSQL, Twilio",
        },
        {
            name: "Hotel Room Booking",
            summary: "Created a platform enabling online room searches, reservations, and secure payments.",
            technologies: "ASP.NET, React.js, JavaScript, C#, Docker, PostgreSQL",
        },
        {
            name: "Basketball Match Predictor",
            summary: "Developed a web application that predicts a basketball match's results for an upcoming game based on historical data and current conditions.",
            technologies: "Python, TensorFlow, Scikit-Learn, Django, React.js, Pandas",
        },
        {
            name: "AI-Powered Movie Recommender",
            summary: "Developed a web application Users rate movies, AI recommends based on preferences.",
            technologies: "Python, TensorFlow, Scikit-Learn, Django, React.js, Pandas",
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

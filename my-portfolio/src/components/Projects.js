import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                <h3>Customer Relation Management</h3>
                <p>Java, Spring Boot, React.js, TypeScript, MongoDB, PostgreSQL, Twilio, Docker, Azure Active Directory</p>
                <ul>
                    <li>Integrated Twilio’s SMS gateway for bulk messaging and customer response tracking.</li>
                    <li>Built secure real-time chat with encrypted component interactions.</li>
                    <li>Designed modular microservices architecture for high availability and scalability.</li>
                </ul>
            </div>
            <div>
                <h3>Hotel Room Booking Website</h3>
                <p>Spring Boot, React.js, TypeScript, Java, Docker, PostgreSQL, WebSocket</p>
                <ul>
                    <li>Created a platform enabling online room searches, reservations, and secure payments.</li>
                    <li>Implemented Spring Boot backend for reservation processing and payment integration.</li>
                    <li>Optimized PostgreSQL for fast data retrieval and booking history tracking.</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
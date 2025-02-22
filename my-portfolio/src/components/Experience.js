import React from 'react';
import '../styles/Experience.css'; // Import the CSS file

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="timeline">
                <div className="container left">
                    <div className="content">
                        <h3>Configuration Management</h3>
                        <h4>Shared Services Canada | May 2024 - August 2024</h4>
                        <p>Optimized configuration processes by mapping thousands of servers to applications.</p>
                    </div>
                </div>

                <div className="container right">
                <div className="content">
                        <h3>Frontend Developer</h3>
                        <h4>Royal Canadian Mounted Police | January 2022 - July 2022</h4>
                        <p>Optimized configuration processes by mapping thousands of servers to applications.</p>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                        <h3>Technical Analyst</h3>
                        <h4>Royal Canadian Mounted Police | January 2022 - July 2022</h4>
                        <p>Optimized configuration processes by mapping thousands of servers to applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
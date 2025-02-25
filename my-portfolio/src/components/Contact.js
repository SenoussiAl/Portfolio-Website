import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out!');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                {/* Left Side: Contact Information with Icons */}
                <div className="contact-info">
                    <h2>Contact Me</h2>
                    <p><strong>Location:</strong> Ottawa, Ontario, Canada (Open to Relocation)</p>
                    <div className="contact-icons">
                        <a href="mailto:senoussi08@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/senoussi-al-nadjib/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                        <a href="https://github.com/senoussial" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import emailjs from 'emailjs-com';
import '../styles/Contact.css'; 

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

        emailjs.send(
            'service_itjsnhm',
            'template_s1u8ahc',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            'ND7Bt7kmhjwt2dMsx'
        )
        .then((response) => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            alert('Failed to send message. Please try again.');
            console.error('EmailJS Error:', error);
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Reach out to me!</h2>
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

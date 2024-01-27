/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'

import './contact.styles.css'

export default function Contact() {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="contact-container">
            <div className="title">
                Let's Get Connected
             </div>
            <div className="intro-container">
                <div className="description">
                Thank you for reaching out. I appreciate your interest and am open to receiving your feedback, questions, or suggestions. For specific inquiries, please email me directly at <a href={`mailto:jeanyhuynhtn@gmail.com`}>jeanyhuynhtn@gmail.com</a> . I strive to respond to all messages within 24 hours, though it may take a bit longer during busy periods. Alternatively, you can use the contact form on my website by filling out the required fields, and I will get back to you promptly. Once again, thank you for your interest, and I look forward to hearing from you!
                </div>
            </div>
            <form action="" className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required className="input-field" onChange={event => setName(event.target.value)} />

            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" required className="input-field" onChange={event => setContact(event.target.value)} />

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required className="input-field" onChange={event => setEmail(event.target.value)} />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required className="textarea-field" onChange={event => setMessage(event.target.value)} />

            <button type="submit" className="submit-button" onClick={handleSubmitResume}>Submit</button>
            </form>
        </div>
    )

    function handleSubmitResume() {
        const queryString = `?name=${encodeURIComponent(name)}&contact=${encodeURIComponent(contact)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`;

        // Update the URL
        window.history.pushState({}, '', queryString);

        handleUpdateStates();
    }

    function handleUpdateStates() {
        setName('');
        setContact('');
        setEmail('');
        setMessage('');
    }
}

/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

import './about.styles.css'

export default function AboutMe() {
    return (
        <div className="about-container">
            <img className='logo' src="../../assets/logo.png" alt="logo" />
            <div className="title">
                Hi all, Welcome to My Digital Domain!
             </div>
            <div className="intro-container">
                <div className="description">
                Greetings and thank you for stepping into my digital realm. I am thrilled to invite you on a journey through my professional universe. As a goal-oriented Software Engineering Technology student specializing in Artificial Intelligence, this space is a curated showcase of my skills, experiences, and passion for innovation. Whether you're a fellow enthusiast, a potential collaborator, or a prospective employer, I encourage you to explore the dynamic tapestry of my capabilities, ranging from programming prowess to effective communication and adaptability within high-paced environments. Join me on this virtual adventure where technology meets creativity, and let's navigate the exciting landscape of software engineering together. Welcome, and enjoy the exploration!
                <Link to="/about"> About Me</Link>
                </div>
                <img className="image" src="../../assets/profile.jpeg" alt="profile image" />
            </div>
        </div>
    )
}
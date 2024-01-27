/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

import './styles.css'

export default function Home() {
    return (
        <div className="home-container">
            <img className='logo' src="../../assets/logo.png" alt="logo" />
            <div className="title">
                Hi all, I'm Jeany Thanh Nhi Huynh
                <br />
                Aspiring Software Developer
             </div>
            <div className="intro-container">
                <div className="description">
                    Step into the dynamic world of a goal-oriented Software Engineering Technology student, specializing in Artificial Intelligence.
                    The Home page is your gateway to a professional journey marked by motivation, flexibility, and an unwavering commitment to excellence within high-paced environments. As you explore this page, you'll witness a diverse skill set that spans the entire software development life cycle (SDLC) and includes proficiency in Python, C#, Java, Javascript, HTML/CSS, and database management with Oracle, SQL, and Microsoft Visio. Engage with the visual representation of my abilities, from data gathering and analysis to effective communication with diverse stakeholders. Welcome to a space where agility and Scrum development methodologies are not just concepts but integral parts of my professional ethos. This page encapsulates the essence of my technical prowess and adaptability, setting the stage for a deeper dive into my professional narrative.
                    <Link to="/about"> About Me</Link>
                </div>
                <img className="image" src="../../assets/profile.jpeg" alt="profile image" />
            </div>
        </div>
    )
}
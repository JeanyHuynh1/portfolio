/* eslint-disable react/no-unescaped-entities */
import './about.styles.css'

export default function AboutMe() {
    return (
        <div className="about-container">
            <img className='logo' src="../../assets/logo.png" alt="logo" />
            <div className="title">
                My name is Thanh Nhi Huynh
             </div>
            <div className="intro-container">
                <div className="description-container">
                    <div className="description">
                    As a highly motivated and flexible professional, my story unfolds through experiences that have honed my ability to gather data, analyze information, and prepare comprehensive reports. Beyond the technical realm, discover a communicator adept at fostering strong relationships with diverse stakeholders. Fluent in English and Vietnamese, with conversational abilities in Cantonese, Mandarin, and Japanese, I am equipped to navigate global landscapes. This page delves into the intricacies of my understanding of Agile/Scrum development, offering insights into my collaborative approach and how I navigate the challenges of the software development life cycle. From programming proficiency to tool mastery, this is a narrative of a technologically adept individual poised to make a meaningful impact in the ever-evolving world of software engineering.
                    </div>
                <button onClick={handleResumeClick}>
                        See my resume
                </button>
                </div>
                <img className="image" src="../../assets/profile.jpeg" alt="profile image" />
            </div>
        </div>
    )

    function handleResumeClick() {
        var resumeUrl = '../../assets/resume.pdf';

        // Open the resume in a new tab
        window.open(resumeUrl, '_blank');
    }
}
/* eslint-disable react/no-unescaped-entities */

import INFO from '../../data/info'
import Project from './components/Project'
import './projects.styles.css'

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="title">
                Things I’ve made trying to put my dent in the universe.
             </div>
            <div className="intro-container">
                <div className="description">
                Welcome to my Projects page, a curated showcase of my diverse skills and accomplishments. Explore the dynamic intersection of creativity and technology with the "Real Estate Showcase Website," a user-oriented platform crafted using C#, HTML, XML, and CSS3. Dive into the world of database development through the "Database Management System - SQL Implementation," where I demonstrate my proficiency in QBE grid, SQL queries, normalization, and robust database security. For a glimpse into my strategic planning abilities, explore the "Recipe Generator Mobile App - Software Requirements Specification," a collaborative endeavor outlining the blueprint for a unique mobile app generating recipes for home cooks based on on-hand ingredients. Each project represents a chapter in my journey, highlighting technical finesse, innovation, and a commitment to excellence. Join me on this virtual tour, and let the projects speak to the depth of my skills and passion for transformative solutions.
                </div>
            </div>
            <div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
        </div>
    )
}
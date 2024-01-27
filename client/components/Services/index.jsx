/* eslint-disable react/no-unescaped-entities */

import INFO from '../../data/info'
import Service from './components/Service'
import './services.styles.css'

export default function Services() {
    return (
        <div className="services-container">
            <img className='logo' src="../../assets/logo.png" alt="logo" />
            <div className="title">
                Innovative Solutions for Modern Success
             </div>
            <div className="intro-container">
                <div className="description">
                Explore a spectrum of services tailored to elevate your projects and drive business success. From AI-driven software development to meticulous data analysis, stakeholder communication, and agile consulting — our offerings are designed to meet the dynamic needs of the modern business landscape. Unleash the potential of multilingual support, full-stack development, and optimized database solutions. Your journey towards excellence begins here.
                </div>
            </div>
            <div className="all-projects-container">
			{INFO.services.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Service
						logo={project.logo}
						title={project.title}
						description={project.description}
					/>
				</div>
			))}
		</div>
        </div>
    )
}
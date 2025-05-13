import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"

const LandingSection = () => {
    return (
        <section className="avatar-container">
            <img 
                src="/GE_Professional_Anime.png" 
                alt="George Avatar" 
                className="avatar" 
            />
            <div className="about-text-container">
                <h1 className="section-heading">Hello! I’m George Elengikal</h1>
                <h2 className="section-subheading">Judges a book by its cover..</h2>
                <p className="section-text">Because if the cover doesn't impress you, what else can?</p>
                <p className="section-text">I’m a Junior studying Computer Science at the University of Michigan!<span className="blinking-cursor">|</span></p>
            </div>
        </section>
    );
};


const WorkExperience = () => {
    const experiences = [
        { title: 'MapReduce Framework', description: 'Scalable data processing for distributed systems' },
        { title: 'Instagram Clone', description: 'Dynamic client-side web app with real-time updates' },
        { title: 'Theta Takes', description: 'Modular social media website for student community' },
        { title: 'Cloud Benchmark Research', description: 'IaC evaluation with Terraform and AWS' },
    ];
    return (
        <section>
            <h2 className="section-heading">Work Experience</h2>
            <p className="about-text">
                I’m a Junior studying Computer Science at the University of Michigan. I enjoy building scalable systems, experimenting with machine learning, and crafting intuitive web apps.
            </p>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div key={index} className="card-wrapper">
                        <div className="card">
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const projects = [
    {
        title: 'Search Engine',
        description: 'A scalable, high-performance search engine with tf-idf and PageRank algorithms.',
        image: '/project1.png',
        featured: true,
    },
    {
        title: 'MapReduce Framework',
        description: 'Distributed data processing framework inspired by Google’s MapReduce.',
        image: '/project2.png',
        featured: false,
    },
    {
        title: 'Instagram Clone',
        description: 'A full-stack social media clone with real-time chat and image uploads.',
        image: '/project3.png',
        featured: false,
    },
    {
        title: 'Theta Takes',
        description: 'A community-driven media site for students to share their stories.',
        image: '/project4.png',
        featured: true,
    },
];

const ProjectsSection = () => {
    return (
        <section className="projects-section">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`project-item ${isEven ? 'project-left' : 'project-right'}`}>
                            {!isEven && <img src={project.image} alt={project.title} className="project-image" />}
                            <div className="project-details">
                                {project.featured && <span className="featured-tag">Featured Project</span>}
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                            {isEven && <img src={project.image} alt={project.title} className="project-image" />}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};


export default function HomePage() {
    return (
        <>
            {/* Navbar */}
            <header className="navbar">
                <div className="navbar-brand">George Elengikal</div>
                <nav className="navbar-links">
                    <a href="#experiences">Experiences</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact Me</a>
                </nav>
            </header>

            {/* Main Content */}
            <main>
                <LandingSection />
                <WorkExperience />
                <ProjectsSection />
            </main>
        </>
    );
}

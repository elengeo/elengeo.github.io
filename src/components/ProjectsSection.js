// src/components/projects.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"

const projects = [
    {
        title: 'Search Engine',
        description: 'A scalable, high-performance search engine with tf-idf and PageRank algorithms.',
        image: '/Ask485.png',
        featured: true,
    },
    {
        title: 'Theta Takes',
        description: 'Developed a social media website for our Theta Tau chapter on campus with Next.js and Supabase',
        image: '/ThetaTakesLogin.png',
        featured: true,
    },
    {
        title: 'Instagram Clone',
        description: 'A full-stack social media clone with real-time updates and image uploads.',
        image: '/Insta485.png',
        featured: false,
    },

];

export default function ProjectsSection() {
    return (
        <section id="projects" className="projects-section">
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
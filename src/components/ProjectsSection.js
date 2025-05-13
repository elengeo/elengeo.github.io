// src/components/projects.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"

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
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"

const LandingSection = () => {
    return (
        <section className="avatar-glow">
            <img 
                src="/avatar.png" 
                alt="George Avatar" 
                className="w-40 h-40 rounded-full border-4" 
            />
            <h1 className="section-heading">Hello! I’m George Elengikal</h1>
            <h2 className="section-heading" style={{ backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, var(--maroon-light), var(--maroon-hover))' }}>
                Judges a book by its cover..
            </h2>
            <p className="section-text">Because if the cover doesn't impress you, what else can?</p>
            <p className="section-text">I’m a Junior studying Computer Science at the University of Michigan!<span className="blinking-cursor">|</span></p>
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

export default function HomePage() {
    return (
        <main>
            <LandingSection />
            <WorkExperience />
        </main>
    );
}
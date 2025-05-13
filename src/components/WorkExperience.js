// src/components/experiences.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"


const experiences = [
    { title: 'MapReduce Framework', description: 'Scalable data processing for distributed systems' },
    { title: 'Instagram Clone', description: 'Dynamic client-side web app with real-time updates' },
    { title: 'Theta Takes', description: 'Modular social media website for student community' },
    { title: 'Cloud Benchmark Research', description: 'IaC evaluation with Terraform and AWS' },
];
  
export default function WorkExperience() {
    const experiences = [
        { title: 'MapReduce Framework', description: 'Scalable data processing for distributed systems' },
        { title: 'Instagram Clone', description: 'Dynamic client-side web app with real-time updates' },
        { title: 'Theta Takes', description: 'Modular social media website for student community' },
        { title: 'Cloud Benchmark Research', description: 'IaC evaluation with Terraform and AWS' },
    ];
    return (
        <section id="experiences">
            <h2 className="section-heading">Work Experience</h2>
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
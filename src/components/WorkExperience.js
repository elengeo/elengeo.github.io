// src/components/experiences.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"


const experiences = [
    { 
        title: 'Platform Engineer Intern', 
        description: 'Enhancing existing data pipelines (ETL/ELT) and creating new features for Scout' 
    },
    { 
        title: 'IaC Student Researcher', 
        description: 'IaC evaluation with AWS, Terraform, and Rego policy' 
    },
    { 
        title: 'Coding Instructor', 
        description: 'Mentored students on various Python projects utilizing the pygame library' 
    },
];
  
export default function WorkExperience() {
    return (
        <section id="experiences">
            <h2 className="section-heading">Work Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div key={index} className="card-wrapper">
                        <div className="card">
                            <h3>{exp.title}</h3>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
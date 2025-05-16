import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"


export default function LandingSection () {
    return (
        <section id="landing" className="avatar-container">
            <img 
                src="./GE_Professional_Anime.png" 
                alt="George Avatar" 
                className="avatar" 
            />
            <div className="about-text-container">
                <h1 className="section-heading">Hello! I&apos;m George Elengikal</h1>
                <h2 className="section-subheading">I&apos;m a Junior studying Computer Science at the University of Michigan!</h2>
                <p className="section-text">I&apos;m particularly interested in Cloud Engineering and am currently a Software Engineering Intern at Scout Motors where I&apos;m working on their Platform team.</p>
                <p className="section-text">On campus, I&apos;m involved in the Engineering Honors Program, Engineering Global Leadership Honor Society, Theta Tau Professional Engineering Organzation, and the Graham Sustainability Scholars Program</p>
                <p className="section-text">Outside of school, I have a passion for food and engaging with new cultures! <span className="blinking-cursor">|</span></p>
            </div>
        </section>
    );
};
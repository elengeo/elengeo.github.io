import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { motion } from "motion/react"


export default function LandingSection () {
    return (
        <section id="landing" className="avatar-container">
            <img 
                src="/GE_Professional_Anime.png" 
                alt="George Avatar" 
                className="avatar" 
            />
            <div className="about-text-container">
                <h1 className="section-heading">Hello! I’m George Elengikal</h1>
                <h2 className="section-subheading">I’m a Junior studying Computer Science at the University of Michigan!</h2>
                <p className="section-text">what else is there to sayyyyyyyoooooooooooomaaaaaaama</p>
                <p className="section-text">should i talk about my campus involvments orrrr<span className="blinking-cursor">|</span></p>
            </div>
        </section>
    );
};
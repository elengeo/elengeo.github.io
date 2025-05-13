// src/app/page.js
import React from 'react';
import Navbar from '../components/Navbar';
import LandingSection from '../components/LandingSection';
import WorkExperience from '../components/WorkExperience';
import ProjectsSection from '../components/ProjectsSection';
import ContactMe from '../components/ContactMe';

import '../styles/globals.css';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <LandingSection />
                <WorkExperience />
                <ProjectsSection />
                <ContactMe />
            </main>
        </>
    );
}
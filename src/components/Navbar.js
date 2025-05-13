// src/components/Navbar.js
"use client";

import React from 'react';

export default function Navbar() {
    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="navbar">
            <div className="navbar-brand">George Elengikal</div>
            <nav className="navbar-links">
                <a href="#landing" onClick={(e) => handleScroll(e, 'landing')}>About</a>
                <a href="#experiences" onClick={(e) => handleScroll(e, 'experiences')}>Experiences</a>
                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
                <a href="#contactme" onClick={(e) => handleScroll(e, 'contact')}>Contact Me</a>
            </nav>
        </header>
    );
}
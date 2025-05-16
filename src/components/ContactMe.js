// src/components/ContactMe.js
"use client";

import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section id="contact" className="contact-section">
            <footer className="footer">
                <p className="footer-text">Feel free to contact me!</p>
                <div className="footer-icons">
                    <a 
                        href="https://www.linkedin.com/in/george-elengikal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a 
                        href="mailto:elengeo@umich.edu" 
                        className="footer-icon"
                    >
                        <FaEnvelope size={30} />
                    </a>
                </div>
            </footer>
        </section>
    );
}
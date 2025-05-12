// src/app/about/page.js
import Image from 'next/image';
import profilePic from '../../public/linkedinpic.jpg'; // Make sure to add a profile picture here

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <Image
        src={profilePic}
        alt="George Elengikal"
        width={200}
        height={300}
        className="rounded-full shadow-lg"
      />
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-lg max-w-2xl">
        Hey, I'm George! I'm a software developer with a passion for building 
        scalable, efficient, and impactful solutions. I specialize in full-stack 
        development, machine learning, and cloud computing. When I'm not coding, 
        you can find me experimenting with new tech, hitting the gym, or exploring new places. 
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/elengeo" target="_blank" className="text-2xl hover:text-gray-700">
          💻 GitHub
        </a>
        <a href="https://www.linkedin.com/in/george-elengikal" target="_blank" className="text-2xl hover:text-blue-700">
          👔 LinkedIn
        </a>
        <a href="mailto:elengeo@umich.edu" className="text-2xl hover:text-red-600">
          📧 Email Me
        </a>
      </div>
    </div>
  );

}

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const LandingSection = () => {
    return (
        <section className="flex flex-col items-center text-center py-20 bg-gradient-to-b from-[#0f0f21] to-[#12122b]">
            <div className="relative mb-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 blur-xl opacity-50"></div>
                <img 
                    src="/avatar.png" 
                    alt="George Avatar" 
                    className="relative z-10 w-40 h-40 rounded-full border-4 border-[#12122b] shadow-lg" 
                />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Hello! I’m George Elengikal</h1>
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Judges a book by its cover..</h2>
            <p className="text-lg text-gray-400 mt-4">Because if the cover doesn't impress you, what else can?</p>
            <p className="text-xl font-semibold text-white mt-6">I’m a Software Engineer.<span className="animate-pulse">|</span></p>
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
        <section className="py-20 bg-gradient-to-b from-[#12122b] to-[#181830] text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-16">
                {experiences.map((exp, index) => (
                    <Card key={index} className="bg-gradient-to-r from-purple-700 to-blue-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                        <CardContent>
                            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                            <p className="text-gray-300">{exp.description}</p>
                            <button className="mt-4 bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-xl">Learn More</button>
                        </CardContent>
                    </Card>
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

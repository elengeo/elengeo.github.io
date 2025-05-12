// src/app/page.js
import IntroAnimation from '../components/IntroAnimation';
import AboutSection from '../components/AboutMe';
import ExperiencesSection from '../components/Experiences';
import ProjectsSection from '../components/Projects';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function HomePage() {
  return (
    <div>
      <IntroAnimation />
      <section id="about" className="py-16">
        <AboutSection />
      </section>
      <section id="experiences" className="py-16 bg-gray-50">
        <ExperiencesSection />
      </section>
      <section id="projects" className="py-16">
        <ProjectsSection />
      </section>
      <Footer />
    </div>
  );
}
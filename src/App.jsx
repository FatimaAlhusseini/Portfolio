import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import InteractiveTerminal from './components/InteractiveTerminal';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeAccent, setActiveAccent] = useState('default');
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    if (activeAccent === 'default') {
      document.documentElement.removeAttribute('data-accent');
    } else {
      document.documentElement.setAttribute('data-accent', activeAccent);
    }
  }, [activeAccent]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      <ScrollProgress />
      {/* Dynamic Background Ambient Elements */}
      <ParticleCanvas />
      <div className="bg-ambient-glow">
        <div className="ambient-orb-1" />
        <div className="ambient-orb-2" />
        <div className="ambient-grid" />
      </div>

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar
          activeAccent={activeAccent}
          setActiveAccent={setActiveAccent}
          onOpenResume={() => setShowResumeModal(true)}
        />

        <main>
          <Hero onOpenResume={() => setShowResumeModal(true)} />
          <About onOpenResume={() => setShowResumeModal(true)} />
          <Skills />
          <Projects />
          <Experience />
          <InteractiveTerminal />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

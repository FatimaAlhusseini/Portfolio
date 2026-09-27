import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Terminal, Sparkles, Code2, Cloud, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const dynamicTitles = [
  "Full Stack Software Engineer",
  "Cloud & DevOps Architect",
  "React & TypeScript Specialist",
  "Distributed Systems Builder",
  "High-Performance API Engineer"
];

export const Hero = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = dynamicTitles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTypingSpeed(2000); // Pause before deleting
          setIsDeleting(true);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section className="section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '7.5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          {/* Left Column: Text & CTAs */}
          <div>
            {/* Availability Badge */}
            <div style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Typewriter Title */}
            <div style={{ minHeight: '2.8rem', display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {displayText}
                <span style={{ color: 'var(--primary)', animation: 'blink 1s infinite' }}>|</span>
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-muted)',
                marginBottom: '2.2rem',
                maxWidth: '560px',
                lineHeight: 1.65,
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* Hero CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary">
                <Sparkles size={18} style={{ color: 'var(--primary)' }} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 500, marginRight: '0.25rem' }}>
                CONNECT:
              </span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Twitter">
                <TwitterIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-icon" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Glass Card Visual */}
          <div style={{ position: 'relative' }}>
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-xl)',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(18, 24, 43, 0.85) 0%, rgba(10, 14, 26, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  <Terminal size={14} style={{ color: 'var(--primary)' }} />
                  <span>developer_profile.json</span>
                </div>
              </div>

              {/* Code Metrics Snapshot */}
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', lineHeight: 1.7, color: '#94a3b8' }}>
                <p><span style={{ color: '#ec4899' }}>const</span> <span style={{ color: '#38bdf8' }}>engineer</span> = &#123;</p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#cbd5e1' }}>name</span>: <span style={{ color: '#a7f3d0' }}>"{personalInfo.name}"</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#cbd5e1' }}>role</span>: <span style={{ color: '#a7f3d0' }}>"Full Stack & Cloud"</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#cbd5e1' }}>coreStack</span>: [<span style={{ color: '#fed7aa' }}>"React"</span>, <span style={{ color: '#fed7aa' }}>"Node"</span>, <span style={{ color: '#fed7aa' }}>"TS"</span>, <span style={{ color: '#fed7aa' }}>"AWS"</span>],
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#cbd5e1' }}>uptimeTarget</span>: <span style={{ color: '#fde047' }}>99.99</span>,
                </p>
                <p style={{ paddingLeft: '1.25rem' }}>
                  <span style={{ color: '#cbd5e1' }}>passion</span>: <span style={{ color: '#a7f3d0' }}>"High Performance & Clean Code"</span>
                </p>
                <p>&#125;;</p>
              </div>

              {/* Floating Feature Pills */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginTop: '1.8rem' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <Code2 size={20} style={{ color: 'var(--primary)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Frontend</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>React & Next.js</div>
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.75rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <Cloud size={20} style={{ color: 'var(--secondary)' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Cloud</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>AWS & Docker</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

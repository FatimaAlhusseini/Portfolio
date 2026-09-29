import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles, Code2, Server } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

const dynamicTitles = [
  "Web Developer",
  "ASP.NET Core Developer",
  "Quality Assurance-Tester",
  "Full Stack Developer",
];

export const Hero = ({ onOpenResume }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentTitle = dynamicTitles[titleIndex] || '';
    if (!currentTitle) return;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTypingSpeed(2000);
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
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">

          {/* ── Left: Text & CTAs ── */}
          <div>
            <div style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>{personalInfo.availability}</span>
              </div>
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typewriter */}
            <div style={{ minHeight: '2.8rem', display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: 'clamp(1.15rem, 2.5vw, 1.7rem)', fontWeight: 600, color: '#e2e8f0', fontFamily: 'var(--font-heading)' }}>
                {displayText}
                <span style={{ color: 'var(--primary)', animation: 'blink 1s infinite' }}>|</span>
              </span>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.2rem', maxWidth: '540px', lineHeight: 1.7 }}>
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
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
              <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: 500 }}>CONNECT:</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn-icon" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            {/* Outer glow ring */}
            <div style={{
              position: 'absolute',
              width: '340px',
              height: '340px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.25) 0%, transparent 70%)',
              filter: 'blur(30px)',
              animation: 'float-slow 6s ease-in-out infinite alternate',
            }} />

            {/* Decorative rotating ring */}
            <div style={{
              position: 'absolute',
              width: '310px',
              height: '310px',
              borderRadius: '50%',
              border: '2px dashed rgba(var(--primary-rgb), 0.3)',
              animation: 'spin-slow 20s linear infinite',
            }} />

            {/* Photo container */}
            <div style={{
              position: 'relative',
              width: '270px',
              height: '270px',
              borderRadius: '50%',
              padding: '4px',
              background: 'var(--brand-gradient)',
              boxShadow: '0 0 40px rgba(var(--primary-rgb), 0.35), 0 20px 60px rgba(0,0,0,0.5)',
              zIndex: 2,
            }}>
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '4px solid var(--bg-deep)',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating skill badges */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '-10px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-glass-hover)',
              borderRadius: 'var(--radius-md)',
              padding: '0.6rem 1rem',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 3,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              animation: 'float-badge-left 4s ease-in-out infinite alternate',
            }}>
              <Server size={16} style={{ color: 'var(--primary)' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>ASP.NET Core</span>
            </div>

            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-15px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-glass-hover)',
              borderRadius: 'var(--radius-md)',
              padding: '0.6rem 1rem',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              zIndex: 3,
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              animation: 'float-badge-right 4s ease-in-out infinite alternate',
            }}>
              <Code2 size={16} style={{ color: 'var(--secondary)' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>QA Engineer  </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float-badge-left {
          0%   { transform: translateY(0px); }
          100% { transform: translateY(-8px); }
        }
        @keyframes float-badge-right {
          0%   { transform: translateY(-6px); }
          100% { transform: translateY(6px); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

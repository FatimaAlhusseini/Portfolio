import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: 'rgba(8, 10, 16, 0.95)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--brand-gradient)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                }}
              >
                F
              </span>
              <span style={{ fontWeight: 800, fontSize: '1.15rem' }}>
                Fatima<span style={{ color: 'var(--primary)' }}>.dev</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '320px' }}>
              Web Developer specializing in ASP.NET Core, React, and SQL Server. Building modern, reliable, and user-friendly web applications.

            </p>
          </div>

          {/* Live System Time Indicator */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--radius-md)',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Local Time</div>
              <div style={{ fontSize: '0.92rem', fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-main)' }}>
                {time || '12:00:00 PM'}
              </div>
            </div>
          </div>

          {/* Social Icons & Back To Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
              <GithubIcon size={17} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Twitter">
              <TwitterIcon size={17} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn-icon" aria-label="Email">
              <Mail size={17} />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-primary"
              style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.82rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Crafted with React, Vite & Vanilla CSS</span>
            <Code size={14} style={{ color: 'var(--primary)' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

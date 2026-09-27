import React from 'react';
import {
  Layers, Layout, Database, Briefcase, CheckCircle2,
  ArrowUpRight, Globe, Server, Code2, BarChart2,
  GraduationCap, Award, Languages
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const iconMap = {
  Layers, Layout, Database, Briefcase, CheckCircle2,
  Globe, Server, Code2, BarChart2,
};

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge"><span>ABOUT ME</span></div>
          <h2 className="section-title">
            Building with <span className="gradient-text">Passion & Purpose</span>
          </h2>
          <p className="section-subtitle">
            A Computer Information Systems student turning academic knowledge and real-world training into clean, functional web applications.
          </p>
        </div>

        {/* Bio & Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', marginBottom: '3rem' }} className="about-bio-grid">

          {/* Bio Card */}
          <div className="glass-panel" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 700 }}>My Story</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              {personalInfo.about}
            </p>

            {/* Education */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
              padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)',
              marginBottom: '1rem'
            }}>
              <GraduationCap size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{personalInfo.education.degree}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{personalInfo.education.university}</div>
              </div>
            </div>

            {/* Certifications */}
            <div style={{
              padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)',
              marginBottom: '1rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                <Award size={18} style={{ color: 'var(--secondary)' }} />
                <span style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-main)' }}>Certifications</span>
              </div>
              {personalInfo.certifications.map((cert, i) => (
                <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '1.6rem', marginBottom: '0.25rem' }}>
                  • {cert}
                </div>
              ))}
            </div>

            {/* Languages */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.85rem',
              padding: '0.75rem 1.2rem', borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-glass)',
              marginBottom: '1.5rem'
            }}>
              <Languages size={18} style={{ color: '#a855f7', flexShrink: 0 }} />
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {personalInfo.languages.map((lang) => (
                  <span key={lang} className="badge" style={{ fontSize: '0.78rem' }}>{lang}</span>
                ))}
              </div>
            </div>

            <button onClick={onOpenResume} className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>View Full Resume</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {personalInfo.stats.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon] || Briefcase;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{ padding: '1.6rem 1.25rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: 'rgba(var(--primary-rgb), 0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', marginBottom: '0.85rem'
                  }}>
                    <IconComponent size={22} />
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.3rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500, textAlign: 'center' }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars */}
        <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '2rem' }}>
          Core Areas of Expertise
        </h3>
        <div className="grid-4">
          {personalInfo.pillars.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Layers;
            return (
              <div key={idx} className="glass-panel" style={{ padding: '1.8rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                  background: 'var(--brand-gradient)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ffffff', marginBottom: '1.25rem', boxShadow: 'var(--glow-shadow)'
                }}>
                  <IconComponent size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.7rem' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-bio-grid { grid-template-columns: 1fr !important; gap: 1.8rem !important; }
        }
      `}</style>
    </section>
  );
}

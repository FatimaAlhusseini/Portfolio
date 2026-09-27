import React from 'react';
import { Layers, Layout, CloudLightning, Database, Briefcase, CheckCircle2, Cloud, GitCommit, ArrowUpRight, Globe, Server, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const iconMap = {
  Layers: Layers,
  Layout: Layout,
  CloudLightning: CloudLightning,
  Database: Database,
  Briefcase: Briefcase,
  CheckCircle2: CheckCircle2,
  Cloud: Cloud,
  GitCommit: GitCommit,
  Globe: Globe,
  Server: Server,
  Code2: Code2,
};

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span>ABOUT ME</span>
          </div>
          <h2 className="section-title">
            Engineering with <span className="gradient-text">Passion & Precision</span>
          </h2>
          <p className="section-subtitle">
            Blending clean architectural patterns with intuitive user experiences to solve complex technical challenges.
          </p>
        </div>

        {/* Narrative & Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', marginBottom: '4rem' }} className="about-bio-grid">
          {/* Bio Description */}
          <div className="glass-panel" style={{ padding: '2.2rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>My Journey & Philosophy</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '1.02rem' }}>
              {personalInfo.about}
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.02rem' }}>
              Whether designing microservices with sub-millisecond latencies or engineering dynamic, reactive web interfaces, I prioritize maintainability, security, and developer ergonomics.
            </p>
            <div style={{ marginTop: '1.8rem' }}>
              <button onClick={onOpenResume} className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Read Full Professional Resume</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {personalInfo.stats.map((stat, idx) => {
              const IconComponent = iconMap[stat.icon] || Briefcase;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '1.6rem 1.25rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(var(--primary-rgb), 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)',
                      marginBottom: '1rem',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <div
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      color: '#ffffff',
                      lineHeight: 1,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
            Core Pillars of My Work
          </h3>
          <div className="grid-4">
            {personalInfo.pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || Layers;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '1.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--brand-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      marginBottom: '1.25rem',
                      boxShadow: 'var(--glow-shadow)',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{pillar.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-bio-grid {
            grid-template-columns: 1fr !important;
            gap: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}

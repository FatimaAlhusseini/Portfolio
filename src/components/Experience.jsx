import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <Briefcase size={14} />
            <span>CAREER PATH</span>
          </div>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A track record of driving technical impact, architecting cloud platforms, and leading engineering teams.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            paddingLeft: '2rem',
          }}
          className="timeline-container"
        >
          {/* Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              bottom: '1.5rem',
              left: '7px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--primary) 0%, var(--secondary) 70%, transparent 100%)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ position: 'relative' }}>
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2rem',
                    top: '1.5rem',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--bg-deep)',
                    border: '3px solid var(--primary)',
                    boxShadow: '0 0 12px var(--primary)',
                    zIndex: 2,
                  }}
                />

                {/* Experience Card */}
                <div className="glass-panel" style={{ padding: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.35rem' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.82rem',
                          color: 'var(--text-dim)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          border: '1px solid var(--border-glass)',
                        }}
                      >
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.98rem' }}>
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.65rem', fontWeight: 600 }}>
                      Key Impact:
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.achievements.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          <CheckCircle size={15} style={{ color: 'var(--secondary)', marginTop: '3px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '0.78rem',
                          padding: '0.2rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(var(--primary-rgb), 0.1)',
                          border: '1px solid rgba(var(--primary-rgb), 0.25)',
                          color: 'var(--text-main)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

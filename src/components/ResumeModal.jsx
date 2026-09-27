import React, { useEffect } from 'react';
import { X, Printer, Award, GraduationCap, Mail, MapPin, Phone, Languages } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalInfo, experiences, skillsData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '860px', background: '#0d111c' }}
      >
        {/* Sticky Actions Bar */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.75rem',
          background: 'rgba(13, 17, 28, 0.95)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-glass)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>Curriculum Vitae</span>
            <span className="badge" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>Web & ASP.NET Developer</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={() => window.print()} className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}>
              <Printer size={15} /><span>Print / PDF</span>
            </button>
            <button onClick={onClose} className="btn-icon" style={{ width: '36px', height: '36px' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Body */}
        <div style={{ padding: '2.5rem 2rem' }}>

          {/* Header */}
          <div style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.2rem', color: '#ffffff' }}>
              {personalInfo.name}
            </h1>
            <h2 style={{ fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
              {personalInfo.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={13} />{personalInfo.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={13} />{personalInfo.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} />{personalInfo.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <LinkedinIcon size={13} />linkedin.com/in/fatima-al-husseini-0a02601bb/
              </span>
            </div>
          </div>

          {/* About */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem', fontWeight: 700 }}>
              About Me
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.92rem' }}>
              {personalInfo.about}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={16} /> Education
            </h3>
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>{personalInfo.education.degree}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{personalInfo.education.university}</div>
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: 700 }}>
              Experience
            </h3>
            {experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>
                    {exp.role} <span style={{ color: 'var(--primary)' }}>| {exp.company}</span>
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.87rem', lineHeight: 1.7, marginTop: '0.4rem' }}>
                  {exp.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem', fontWeight: 700 }}>
              Technical Skills
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {skillsData.categories.map((cat) => (
                <div key={cat.name} style={{ fontSize: '0.87rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: '#ffffff' }}>{cat.name}:</span>{' '}
                  {cat.skills.map((s) => s.name).join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Award size={15} /> Certifications
              </h3>
              {personalInfo.certifications.map((c, i) => (
                <div key={i} style={{ fontSize: '0.87rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>• {c}</div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Languages size={15} /> Languages
              </h3>
              {personalInfo.languages.map((lang, i) => (
                <div key={i} style={{ fontSize: '0.87rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>• {lang}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

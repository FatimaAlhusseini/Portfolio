import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Award, GraduationCap, Briefcase, Mail, MapPin } from 'lucide-react';
import { personalInfo, experiences, skillsData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px', background: '#0d111c' }}
      >
        {/* Sticky Actions Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.75rem',
            background: 'rgba(13, 17, 28, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-glass)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>Curriculum Vitae</span>
            <span className="badge" style={{ fontSize: '0.72rem', padding: '0.15rem 0.5rem' }}>Full Stack & Cloud</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem' }}
            >
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>
            <button onClick={onClose} className="btn-icon" style={{ width: '36px', height: '36px' }}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div style={{ padding: '2.5rem 2rem' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.35rem', color: '#ffffff' }}>
              {personalInfo.name}
            </h1>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '0.85rem' }}>
              {personalInfo.title}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} />
                {personalInfo.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <span>GitHub: {personalInfo.github}</span>
              <span>LinkedIn: {personalInfo.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Executive Summary
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.94rem' }}>
              {personalInfo.about}
            </p>
          </div>

          {/* Core Technical Proficiencies */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
              Technical Expertise
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {skillsData.categories.map((cat) => (
                <div key={cat.name} style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--secondary)', marginBottom: '0.35rem' }}>
                    {cat.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work History */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Work Experience
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {experiences.map((exp, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
                      {exp.role} <span style={{ color: 'var(--primary)' }}>@ {exp.company}</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    {exp.description}
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ marginBottom: '0.25rem' }}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <GraduationCap size={18} style={{ color: 'var(--primary)' }} />
                <span>Education</span>
              </h3>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>
                B.S. in Computer Science
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                University of Technology • 2017 - 2021
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.25rem' }}>
                Major in Distributed Systems & Software Engineering
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={18} style={{ color: 'var(--secondary)' }} />
                <span>Certifications</span>
              </h3>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                • AWS Certified Solutions Architect (Associate)
              </div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                • Certified Kubernetes Administrator (CKA)
              </div>
              <div style={{ fontSize: '0.88rem', color: '#ffffff' }}>
                • Meta Professional Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

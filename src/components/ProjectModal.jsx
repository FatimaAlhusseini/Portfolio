import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header with image */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              filter: 'brightness(0.85)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-surface) 0%, transparent 80%)',
            }}
          />
          {/* Close button */}
          <button
            onClick={onClose}
            className="btn-icon"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
            }}
          >
            <X size={20} />
          </button>

          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.75rem', right: '1.75rem' }}>
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '0.2rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(var(--primary-rgb), 0.3)',
                color: '#ffffff',
                border: '1px solid rgba(var(--primary-rgb), 0.5)',
                marginBottom: '0.5rem',
              }}
            >
              {project.category}
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>{project.title}</h2>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: '#ffffff' }}>Project Overview</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Highlights & Architecture */}
          {project.highlights && (
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={18} style={{ color: 'var(--primary)' }} />
                <span>Key Technical Highlights</span>
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--secondary)', marginTop: '3px', flexShrink: 0 }} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Cpu size={18} style={{ color: 'var(--secondary)' }} />
              <span>Technologies Used</span>
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-glass)',
                    color: 'var(--text-main)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          {(project.demoUrl || project.githubUrl) && (
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--border-glass)' }}>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  <span>Live Demonstration</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={project.demoUrl ? "btn btn-secondary" : "btn btn-primary"}
                >
                  <GithubIcon size={16} />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

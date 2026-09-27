import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <MessageSquareQuote size={14} />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="section-title">
            Colleague & <span className="gradient-text">Client Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What product leaders, engineering managers, and collaborators say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* 5-Star Rating */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ color: '#eab308', fill: '#eab308' }} />
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    color: '#e2e8f0',
                    fontSize: '0.96rem',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '1.75rem',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-glass)',
                }}
              >
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--primary)',
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff' }}>{item.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {item.role} • <span style={{ color: 'var(--primary)' }}>{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

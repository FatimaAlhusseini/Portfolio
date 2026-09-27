import React, { useState } from 'react';
import { Search, Sparkles, Code, Server, Database, Cloud } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  Frontend: Code,
  "Backend & APIs": Server,
  "Databases & Caching": Database,
  "DevOps & Cloud": Cloud,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...skillsData.categories.map((c) => c.name)];

  const filteredCategories = skillsData.categories
    .filter((cat) => activeCategory === 'All' || cat.name === activeCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <span>TECH STACK & CAPABILITIES</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, frameworks, cloud services, and tools I use to build robust software.
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              background: 'rgba(18, 23, 38, 0.6)',
              padding: '0.4rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-glass)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  background: activeCategory === cat ? 'var(--brand-gradient)' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <Search
              size={17}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-dim)',
              }}
            />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.5rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(18, 23, 38, 0.7)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredCategories.length === 0 ? (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No technologies found matching "{searchTerm}". Try a different query!
            </div>
          ) : (
            filteredCategories.map((cat) => {
              const IconComp = categoryIcons[cat.name] || Code;
              return (
                <div key={cat.name} className="glass-panel" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: 'rgba(var(--primary-rgb), 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>{cat.name}</h3>
                  </div>

                  <div className="grid-2" style={{ gap: '1.5rem' }}>
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          background: 'rgba(255, 255, 255, 0.02)',
                          border: '1px solid var(--border-glass)',
                          borderRadius: 'var(--radius-md)',
                          padding: '1.1rem 1.3rem',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{skill.name}</span>
                            {skill.popular && (
                              <span
                                style={{
                                  fontSize: '0.7rem',
                                  padding: '0.15rem 0.5rem',
                                  borderRadius: 'var(--radius-full)',
                                  background: 'rgba(var(--secondary-rgb), 0.15)',
                                  color: 'var(--secondary)',
                                  fontWeight: 600,
                                }}
                              >
                                Core
                              </span>
                            )}
                          </div>
                          <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div
                          style={{
                            height: '6px',
                            width: '100%',
                            background: 'rgba(255, 255, 255, 0.07)',
                            borderRadius: '3px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              height: '100%',
                              width: `${skill.level}%`,
                              background: 'var(--brand-gradient)',
                              borderRadius: '3px',
                              boxShadow: '0 0 10px rgba(var(--primary-rgb), 0.5)',
                              transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

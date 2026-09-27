import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Search, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Full Stack', 'AI & ML', 'Cloud / Backend', 'Frontend / UI'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <FolderGit2 size={14} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of full-stack web applications, AI-powered developer tools, and scalable cloud architectures.
          </p>
        </div>

        {/* Filters and Search Bar */}
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
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="glass-panel" style={{ padding: '3.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            No projects found matching your search. Try resetting the filters!
          </div>
        ) : (
          <div className="grid-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-panel"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.5s ease',
                    }}
                    className="project-card-image"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 20, 35, 0.95) 0%, rgba(15, 20, 35, 0.2) 60%, transparent 100%)',
                    }}
                  />

                  {/* Category & Featured Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(10, 14, 26, 0.8)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--primary)',
                      }}
                    >
                      {project.category}
                    </span>
                    {project.featured && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          padding: '0.2rem 0.6rem',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(234, 179, 8, 0.2)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(234, 179, 8, 0.4)',
                          color: '#fde047',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                        }}
                      >
                        <Sparkles size={11} />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: '0.6rem',
                      lineHeight: 1.3,
                      transition: 'color var(--transition-fast)',
                    }}
                    className="project-title"
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.4rem' }}>
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.55rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-dim)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.2rem 0.45rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer Links */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border-glass)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      Case Study
                      <ArrowRight size={14} />
                    </span>

                    <div style={{ display: 'flex', gap: '0.5rem' }} onClick={(e) => e.stopPropagation()}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-icon"
                          style={{ width: '34px', height: '34px' }}
                          title="Source Code"
                        >
                          <GithubIcon size={15} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-icon"
                          style={{ width: '34px', height: '34px' }}
                          title="Live Preview"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        .glass-panel:hover .project-card-image {
          transform: scale(1.05);
        }
        .glass-panel:hover .project-title {
          color: var(--primary);
        }
      `}</style>
    </section>
  );
}

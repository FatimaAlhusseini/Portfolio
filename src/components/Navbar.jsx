import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Palette } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'Contact', href: '#contact' },
];

const accents = [
  { id: 'default', name: 'Electric Indigo', color: '#6366f1' },
  { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4' },
  { id: 'emerald', name: 'Neon Emerald', color: '#10b981' },
  { id: 'rose', name: 'Vibrant Rose', color: '#f43f5e' },
];

export default function Navbar({ activeAccent, setActiveAccent, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [showAccentPicker, setShowAccentPicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        'about',
        'skills',
        'projects',
        'experience',
        'terminal',
        'contact',
      ];

      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        overflow: 'visible',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        background: isScrolled
          ? 'rgba(8, 10, 16, 0.85)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
      }}
    >
      <div
        className="container navbar-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxSizing: 'border-box',
          minWidth: 0,
          gap: '1rem',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            setMobileMenuOpen(false);
          }}
          className="navbar-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em',
            minWidth: 0,
            flexShrink: 1,
          }}
        >
          <span
            className="navbar-logo-icon"
            style={{
              width: '36px',
              height: '36px',
              minWidth: '36px',
              borderRadius: '10px',
              background: 'var(--brand-gradient)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '1.1rem',
              boxShadow: 'var(--glow-shadow)',
            }}
          >
            F
          </span>

          <span
            className="navbar-logo-text"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Fatima<span style={{ color: 'var(--primary)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(18, 23, 38, 0.65)',
            padding: '0.35rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-glass)',
            backdropFilter: 'blur(12px)',
            flexShrink: 1,
            minWidth: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  color: isActive
                    ? '#ffffff'
                    : 'var(--text-muted)',
                  background: isActive
                    ? 'rgba(var(--primary-rgb), 0.25)'
                    : 'transparent',
                  border: isActive
                    ? '1px solid rgba(var(--primary-rgb), 0.4)'
                    : '1px solid transparent',
                  transition: 'all var(--transition-fast)',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div
          className="navbar-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexShrink: 0,
          }}
        >
          {/* Accent Color Picker */}
          <div
            style={{
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <button
              onClick={() =>
                setShowAccentPicker(!showAccentPicker)
              }
              className="btn-icon"
              title="Change Accent Color Theme"
              aria-label="Theme Accents"
            >
              <Palette size={18} />
            </button>

            {showAccentPicker && (
              <div
                className="glass-panel accent-picker"
                style={{
                  position: 'absolute',
                  top: '115%',
                  right: 0,
                  padding: '0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  minWidth: '160px',
                  zIndex: 200,
                  boxSizing: 'border-box',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                  }}
                >
                  Theme Accents
                </span>

                {accents.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => {
                      setActiveAccent(acc.id);
                      setShowAccentPicker(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.4rem 0.6rem',
                      background:
                        activeAccent === acc.id
                          ? 'rgba(255,255,255,0.08)'
                          : 'transparent',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-main)',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        minWidth: '12px',
                        borderRadius: '50%',
                        backgroundColor: acc.color,
                        boxShadow: `0 0 8px ${acc.color}`,
                      }}
                    />

                    {acc.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn btn-secondary desktop-resume"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              flexShrink: 0,
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          {/* Hire Me / Contact CTA */}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              display: 'none',
            }}
            id="nav-cta"
          >
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="btn-icon mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            style={{
              flexShrink: 0,
            }}
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="glass-panel mobile-drawer"
          style={{
            margin: '0.75rem 1rem 0',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxSizing: 'border-box',
            width: 'calc(100% - 2rem)',
            maxWidth: '100%',
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.substring(1);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  color: isActive
                    ? 'var(--primary)'
                    : 'var(--text-main)',
                  background: isActive
                    ? 'rgba(var(--primary-rgb), 0.1)'
                    : 'transparent',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {link.name}
              </a>
            );
          })}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-primary"
            style={{
              marginTop: '0.5rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <FileText size={16} />
            <span>View Full Resume</span>
          </button>
        </div>
      )}

      <style>{`
        /* =========================
           Desktop
        ========================== */
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }

          .mobile-menu-toggle {
            display: none !important;
          }

          #nav-cta {
            display: inline-flex !important;
          }
        }

        /* =========================
           Tablet / Mobile
        ========================== */
        @media (max-width: 767px) {
          .navbar-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            gap: 0.5rem !important;
          }

          .desktop-resume {
            display: none !important;
          }

          .navbar-actions {
            gap: 0.5rem !important;
          }

          .navbar-logo {
            gap: 0.45rem !important;
            font-size: 1.05rem !important;
          }

          .navbar-logo-icon {
            width: 32px !important;
            height: 32px !important;
            min-width: 32px !important;
            border-radius: 9px !important;
            font-size: 1rem !important;
          }

          .mobile-drawer {
            margin-left: 0.75rem !important;
            margin-right: 0.75rem !important;
            width: calc(100% - 1.5rem) !important;
          }
        }

        /* =========================
           Very Small Screens
        ========================== */
        @media (max-width: 420px) {
          .navbar-container {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }

          .navbar-logo-text {
            font-size: 0.95rem !important;
          }

          .navbar-actions {
            gap: 0.35rem !important;
          }

          .mobile-drawer {
            padding: 1rem !important;
            margin-left: 0.5rem !important;
            margin-right: 0.5rem !important;
            width: calc(100% - 1rem) !important;
          }
        }

        /* =========================
           Prevent horizontal overflow
        ========================== */
        @media (max-width: 767px) {
          header {
            overflow-x: hidden !important;
          }

          .accent-picker {
            right: -5px !important;
            max-width: calc(100vw - 1rem) !important;
          }
        }
      `}</style>
    </header>
  );
}
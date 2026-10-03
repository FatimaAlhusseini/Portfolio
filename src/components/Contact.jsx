import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, Clock, MessageSquare, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

const EMAILJS_SERVICE_ID = 'service_csvdrru';
const EMAILJS_TEMPLATE_ID = 'template_jj5ujh7';
const EMAILJS_PUBLIC_KEY = 'kQw6XqXPhM_7e80tC';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#06b6d4', '#a855f7', '#10b981'],
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      setErrorMessage(
        error?.text || 'حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى أو مراسلتي مباشرة عبر البريد الإلكتروني.'
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an engineering role open, or want to discuss system architecture? My inbox is always open.
          </p>
        </div>

        {/* Contact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '2.5rem' }} className="contact-grid">
          {/* Left: Contact Info & Quick Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 700 }}>
                Contact Information
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Feel free to reach out directly via email or connect through professional networks.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Email Box with One-Click Copy */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
    minWidth: 0,
    flex: 1,
  }}
>
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
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Direct Email</div>
                      <div
  style={{
    fontSize: '0.95rem',
    fontWeight: 600,
    overflowWrap: 'anywhere',
  }}
>
  {personalInfo.email}
</div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-secondary"
                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Location */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(var(--secondary-rgb), 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--secondary)',
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Location</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{personalInfo.location}</div>
                  </div>
                </div>

                {/* Response Time */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Response Time</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>Within 24 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-panel" style={{ padding: '2.2rem' }}>
            {submitted ? (
              <div style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.4)',
                  }}
                >
                  <Sparkles size={32} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '420px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                  Thank you for reaching out, {formData.name || 'there'}. I've received your note and will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, or engineering goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {errorMessage && (
                  <div
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#ef4444',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem', padding: '0.9rem' }}
                >
                  {isSubmitting ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
  .contact-grid,
  .contact-grid * {
    box-sizing: border-box;
  }

  .contact-grid input,
  .contact-grid textarea {
    max-width: 100%;
    min-width: 0;
  }

  @media (max-width: 850px) {
    .contact-grid {
      grid-template-columns: 1fr !important;
    }

    .form-row {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 600px) {
    .contact-grid {
      gap: 1.25rem !important;
    }

    .contact-grid .glass-panel {
      padding: 1.25rem !important;
    }

    .contact-grid form {
      gap: 1rem !important;
    }

    .contact-grid input,
    .contact-grid textarea {
      width: 100% !important;
      font-size: 0.9rem !important;
    }
  }

  @media (max-width: 420px) {
    .contact-grid .glass-panel {
      padding: 1rem !important;
    }

    .contact-grid input,
    .contact-grid textarea {
      padding: 0.75rem 0.85rem !important;
    }
  }
`}</style>
    </section>
  );
}

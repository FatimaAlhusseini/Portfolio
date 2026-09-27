import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2 } from 'lucide-react';
import { terminalCommands } from '../data/portfolioData';

const initialHistory = [
  { type: 'system', text: "Welcome to Fatima's interactive terminal v2.4 (React/Vite env)." },
  { type: 'system', text: "Type 'help' to see available commands or click the quick pills below." },
];

export default function InteractiveTerminal() {
  const [history, setHistory] = useState(initialHistory);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'whoami') {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cmdStr },
        { type: 'output', text: 'guest_visitor@world (Welcome! Feel free to explore)' },
      ]);
      setInput('');
      return;
    }

    if (trimmed === 'date') {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cmdStr },
        { type: 'output', text: new Date().toString() },
      ]);
      setInput('');
      return;
    }

    const response = terminalCommands[trimmed];

    if (response) {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cmdStr },
        { type: 'output', text: response },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cmdStr },
        {
          type: 'error',
          text: `Command not recognized: '${trimmed}'. Type 'help' for a list of valid commands.`,
        },
      ]);
    }

    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="terminal" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <TerminalIcon size={14} />
            <span>INTERACTIVE CONSOLE</span>
          </div>
          <h2 className="section-title">
            Developer <span className="gradient-text">CLI Playground</span>
          </h2>
          <p className="section-subtitle">
            Prefer using a command line interface? Interact with my portfolio via real-time terminal commands.
          </p>
        </div>

        {/* Terminal Window */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.8rem 1.25rem',
              background: 'rgba(10, 14, 26, 0.95)',
              borderBottom: '1px solid var(--border-glass)',
            }}
          >
            <div style={{ display: 'flex', gap: '0.45rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              fatima@cloud-terminal:~
            </div>

            <button
              onClick={() => setHistory([])}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
              }}
              title="Clear Terminal"
            >
              <Trash2 size={14} />
              <span>clear</span>
            </button>
          </div>

          {/* Terminal Console Output */}
          <div
            style={{
              padding: '1.5rem',
              minHeight: '260px',
              maxHeight: '380px',
              overflowY: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              lineHeight: 1.65,
              background: 'rgba(6, 8, 15, 0.9)',
            }}
          >
            {history.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                {item.type === 'system' && (
                  <div style={{ color: 'var(--text-dim)' }}>{item.text}</div>
                )}
                {item.type === 'user' && (
                  <div style={{ color: '#ffffff', display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary)' }}>fatima@devbox:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <div style={{ color: '#a7f3d0', whiteSpace: 'pre-line', paddingLeft: '0.5rem' }}>
                    {item.text}
                  </div>
                )}
                {item.type === 'error' && (
                  <div style={{ color: '#f87171', paddingLeft: '0.5rem' }}>{item.text}</div>
                )}
              </div>
            ))}

            {/* Current Input Line */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <span style={{ color: 'var(--primary)', flexShrink: 0 }}>fatima@devbox:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                placeholder="Type command here..."
                style={{
                  flexGrow: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  padding: '0 0.25rem',
                }}
              >
                <CornerDownLeft size={16} />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Pills */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(10, 14, 26, 0.8)',
              borderTop: '1px solid var(--border-glass)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginRight: '0.25rem' }}>
              Suggestions:
            </span>
            {['help', 'bio', 'skills', 'projects', 'experience', 'sudo hire'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: cmd === 'sudo hire' ? 'rgba(var(--primary-rgb), 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: cmd === 'sudo hire' ? '1px solid var(--primary)' : '1px solid var(--border-glass)',
                  color: cmd === 'sudo hire' ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

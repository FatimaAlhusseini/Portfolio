import React, { useState, useEffect, useCallback } from 'react';

export default function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(30);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragStartScroll, setDragStartScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const TRACK_HEIGHT = window.innerHeight;

  const recalculate = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    if (docHeight <= winHeight) {
      setIsVisible(false);
      return;
    }
    setIsVisible(true);

    const ratio = winHeight / docHeight;
    const newThumbHeight = Math.max(ratio * winHeight, 40);
    const scrollRatio = scrollTop / (docHeight - winHeight);
    const newThumbTop = scrollRatio * (winHeight - newThumbHeight);

    setThumbHeight(newThumbHeight);
    setThumbTop(newThumbTop);
  }, []);

  useEffect(() => {
    recalculate();
    window.addEventListener('scroll', recalculate, { passive: true });
    window.addEventListener('resize', recalculate, { passive: true });
    return () => {
      window.removeEventListener('scroll', recalculate);
      window.removeEventListener('resize', recalculate);
    };
  }, [recalculate]);

  // Drag logic
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartY(e.clientY);
    setDragStartScroll(window.scrollY);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      const delta = e.clientY - dragStartY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollRange = docHeight - winHeight;
      const trackRange = winHeight - thumbHeight;
      const scrollDelta = (delta / trackRange) * scrollRange;
      window.scrollTo({ top: dragStartScroll + scrollDelta });
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStartY, dragStartScroll, thumbHeight]);

  // Click on track to jump
  const handleTrackClick = (e) => {
    if (e.target !== e.currentTarget) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollTarget = (clickY / winHeight) * (docHeight - winHeight);
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Track */}
      <div
        onClick={handleTrackClick}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '10px',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.04)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
          zIndex: 9998,
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {/* Thumb */}
        <div
          onMouseDown={handleMouseDown}
          style={{
            position: 'absolute',
            right: '1px',
            top: `${thumbTop}px`,
            width: '8px',
            height: `${thumbHeight}px`,
            borderRadius: '6px',
            background: isDragging
              ? 'linear-gradient(180deg, rgba(var(--primary-rgb),1) 0%, rgba(var(--secondary-rgb),0.9) 100%)'
              : 'linear-gradient(180deg, rgba(var(--primary-rgb),0.75) 0%, rgba(var(--secondary-rgb),0.5) 100%)',
            boxShadow: isDragging
              ? '0 0 12px rgba(var(--primary-rgb), 0.9)'
              : '0 0 6px rgba(var(--primary-rgb), 0.4)',
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'background 0.2s ease, box-shadow 0.2s ease',
          }}
          className="scrollbar-thumb"
        />
      </div>

      <style>{`
        .scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(var(--primary-rgb), 1) 0%,
            rgba(var(--secondary-rgb), 0.85) 100%
          ) !important;
          box-shadow: 0 0 12px rgba(var(--primary-rgb), 0.8) !important;
        }

        /* Hide the native scrollbar so our custom one takes over */
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

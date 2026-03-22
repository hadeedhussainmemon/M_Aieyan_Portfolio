'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <header className={scrolled ? 'scrolled' : ''} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '0.75rem 1.5rem' : '1.5rem 2rem',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      background: scrolled || mobileMenuOpen ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
      backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.1rem',
          letterSpacing: '0.2em',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer'
        }} onClick={() => handleScrollTo('home')}>
          <span style={{ color: 'var(--accent-safety)' }}>&lt;/&gt;</span>
          AIE<span>YAN</span>
          <span style={{ 
            fontSize: '0.55rem', 
            fontFamily: 'var(--font-mono)', 
            opacity: 0.5,
            border: '1px solid #333',
            padding: '2px 4px',
            borderRadius: '2px'
          }}>v2.1</span>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 1001
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Links */}
        <ul className="desktop-nav" style={{
          display: 'flex',
          gap: '2.5rem',
          listStyle: 'none',
        }}>
          {navItems.map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); handleScrollTo(item); }}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  transition: 'all 0.3s',
                  fontFamily: 'var(--font-heading)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--accent-safety)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '0',
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'var(--bg-obsidian)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            gap: '2rem'
          }}>
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => { e.preventDefault(); handleScrollTo(item); }}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-heading)',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.2em'
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}

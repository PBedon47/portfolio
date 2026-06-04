'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#contact', label: 'Contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    padding: '0 32px', height: '60px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid #e8eaed' : '1px solid transparent',
    transition: 'all 0.3s ease',
  }

  return (
    <nav style={navStyle}>
      <a href="#hero" style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '18px', color: '#0d1117', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        Pedro<span style={{ color: '#2563eb' }}>.</span>
      </a>

      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-desktop">
        {links.map((l) => (
          <a key={l.href} href={l.href} style={{ fontSize: '14px', color: '#5a6272', textDecoration: 'none', fontWeight: 500, transition: 'color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0d1117')}
            onMouseLeave={e => (e.currentTarget.style.color = '#5a6272')}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>Contrátame</a>
      </div>

      <button onClick={() => setOpen(!open)} className="nav-mobile"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0d1117', padding: '4px' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
        </svg>
      </button>

      {open && (
        <div style={{ position: 'absolute', top: '60px', left: 0, right: 0, background: '#fff', borderBottom: '1px solid #e8eaed', padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontSize: '15px', color: '#5a6272', textDecoration: 'none', fontWeight: 500 }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .nav-mobile { display: none !important; } }
        @media (max-width: 767px) { .nav-desktop { display: none !important; } }
      `}</style>
    </nav>
  )
}

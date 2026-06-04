'use client'
import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'React & Next.js', 'TypeScript', 'Integración con IA']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: NodeJS.Timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 38)
    } else {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', background: 'linear-gradient(180deg, #f8f9fb 0%, #ffffff 60%)' }}>
      <div className="container">
        <div style={{ maxWidth: '680px' }}>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', background: '#f0fdf4', border: '1px solid #bbf7d0', marginBottom: '36px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
            <span style={{ fontSize: '13px', color: '#15803d', fontWeight: 500 }}>Disponible para nuevas oportunidades</span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 76px)', fontWeight: 800, lineHeight: 1.0, marginBottom: '14px', letterSpacing: '-0.03em' }}>
            Pedro Luis<br />
            <span style={{ color: '#2563eb' }}>Bedón Carbajal</span>
          </h1>

          {/* Typewriter */}
          <div style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#5a6272', fontFamily: "'Inter',sans-serif", marginBottom: '24px', height: '34px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: '#2563eb', fontWeight: 600 }}>&gt;</span>
            <span style={{ marginLeft: '8px', fontWeight: 500, color: '#0d1117' }}>{displayed}</span>
            <span style={{ width: '2px', height: '22px', background: '#2563eb', animation: 'blink 1s step-end infinite', marginLeft: '2px', borderRadius: '1px', display: 'inline-block' }} />
          </div>

          {/* Description */}
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#5a6272', maxWidth: '520px', marginBottom: '40px' }}>
            Desarrollador enfocado en la creación de interfaces modernas, experiencias de usuario
            intuitivas y soluciones empresariales basadas en tecnologías web e inteligencia artificial.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '60px' }}>
            <a href="#projects" className="btn btn-primary">
              Ver proyectos
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Contactarme</a>
          </div>

          {/* Stack line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12px', color: '#9aa3b0', fontWeight: 600, letterSpacing: '0.08em' }}>STACK</span>
            <div style={{ width: '1px', height: '14px', background: '#e8eaed' }} />
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'IA'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Mail, Link, GitBranch, Phone, MapPin } from 'lucide-react'

const links = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'pedrobedon86@gmail.com',
    href: 'mailto:pedrobedon86@gmail.com',
    desc: 'Respondo en menos de 24h',
  },
  {
    Icon: Link,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pedro-bedon-carbajal',
    href: 'https://linkedin.com/in/pedro-bedon-carbajal-356703333',
    desc: 'Conectemos profesionalmente',
  },
  {
    Icon: GitBranch,
    label: 'GitHub',
    value: 'github.com/PBedon47',
    href: 'https://github.com/PBedon47',
    desc: 'Mira mi código',
  },
  {
    Icon: Phone,
    label: 'WhatsApp',
    value: '+51 951 715 757',
    href: 'https://wa.me/51951715757',
    desc: 'Respuesta inmediata',
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 0 120px', background: '#fff', borderTop: '1px solid #e8eaed' }}>
      <div className="container">

        {/* CTA block */}
        <div style={{
          borderRadius: '20px', border: '1px solid #e8eaed',
          background: 'linear-gradient(135deg, #f8f9fb 0%, #eff3ff 100%)',
          padding: 'clamp(48px, 8vw, 80px)', textAlign: 'center', marginBottom: '48px',
        }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Contacto</div>
          <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            ¿Tienes un proyecto<br /><span style={{ color: '#2563eb' }}>en mente?</span>
          </h2>
          <p style={{ color: '#5a6272', fontSize: '16px', maxWidth: '480px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Estoy disponible para roles como Frontend Developer, proyectos freelance o
            colaboraciones en productos digitales con impacto real.
          </p>
          <a href="mailto:pedrobedon86@gmail.com" className="btn btn-primary" style={{ fontSize: '15px', padding: '13px 30px' }}>
            Envíame un mensaje
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>

        {/* Contact cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {links.map(({ Icon, label, value, href, desc }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#fff', border: '1px solid #e8eaed', borderRadius: '12px',
                padding: '24px', textDecoration: 'none', display: 'flex',
                flexDirection: 'column', gap: '8px', transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#2563eb'
                e.currentTarget.style.background = '#eff3ff'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#e8eaed'
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: '#eff3ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={18} color="#2563eb" strokeWidth={1.75} />
              </div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '15px', color: '#0d1117' }}>
                {label}
              </div>
              <div style={{ fontSize: '12px', color: '#2563eb', fontWeight: 500 }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#9aa3b0' }}>{desc}</div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '72px', paddingTop: '28px', borderTop: '1px solid #e8eaed',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '14px',
        }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '18px', color: '#0d1117' }}>
            Pedro<span style={{ color: '#2563eb' }}>.</span>
          </span>
          <p style={{ fontSize: '13px', color: '#9aa3b0' }}>
            © 2026 Pedro Luis Bedon Carbajal — Frontend Developer
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#9aa3b0' }}>
            <MapPin size={13} strokeWidth={1.75} />
            Lima, Perú
          </p>
        </div>

      </div>
    </section>
  )
}
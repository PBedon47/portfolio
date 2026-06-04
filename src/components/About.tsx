'use client'

import { GraduationCap, Rocket, Bot } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Proyectos empresariales' },
  { value: '2', label: 'Empresas como cliente' },
  { value: '5+', label: 'Tecnologías dominadas' },
  { value: '1', label: 'App en producción con IA' },
]

const tags = [
  { icon: GraduationCap, label: 'Ing. Software con IA' },
  { icon: Rocket, label: 'Proyectos en producción' },
  { icon: Bot, label: 'IA + Frontend' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: '#fff', borderTop: '1px solid #e8eaed' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '72px', alignItems: 'center' }}>

          <div>
            <div className="section-label">Sobre mí</div>
            <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: '20px' }}>
              Construyo interfaces<br />que <span style={{ color: '#2563eb' }}>importan.</span>
            </h2>
            <p style={{ color: '#5a6272', lineHeight: 1.8, marginBottom: '16px', fontSize: '15px' }}>
              Egresado de la carrera técnica de Ingeniería de Software con IA, con experiencia práctica en desarrollo
              frontend utilizando React, Next.js, TypeScript y Vite.
            </p>
            <p style={{ color: '#5a6272', lineHeight: 1.8, marginBottom: '32px', fontSize: '15px' }}>
              He participado en proyectos empresariales relacionados con sistemas de gestión,
              automatización de procesos y asistentes virtuales implementados en entornos reales.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {tags.map(({ icon: Icon, label }) => (
                <span key={label} className="tag tag-accent" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Icon size={14} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ background: '#f8f9fb', border: '1px solid #e8eaed', borderRadius: '12px', padding: '28px 24px' }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '36px', color: '#2563eb', lineHeight: 1, marginBottom: '8px' }}>{s.value}</div>
                <div style={{ fontSize: '13px', color: '#5a6272', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
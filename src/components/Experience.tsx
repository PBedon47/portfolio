'use client'

import { ArrowRight } from 'lucide-react'

const experiences = [
  {
    company: 'Empresoft Perú S.A.C.',
    role: 'Practicante — Frontend Developer',
    period: 'Feb 2026 — Jun 2026',
    type: 'Empresa',
    modality: 'Remota',
    color: '#2563eb',
    description: 'Desarrollo de interfaces web modernas con React, Next.js y TypeScript. Participación en proyectos full stack, integración de APIs REST y despliegue en cloud.',
    bullets: [
      'Desarrollo full stack con React, Next.js, Node.js, NestJS y bases de datos PostgreSQL y MySQL',
      'Implementación de un asistente virtual con IA actualmente en uso para automatizar consultas y agendamiento',
      'Despliegue en AWS y Vercel; trabajo en equipo bajo metodologías ágiles (Scrum)',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'AWS', 'Figma'],
  },
  {
    company: 'APM Inversiones E.I.R.L.',
    role: 'Practicante — Gestión de Asistencias',
    period: 'Ago 2025 — Dic 2025',
    type: 'Proyecto',
    modality: 'Remota',
    color: '#7c3aed',
    description: 'Sistema de control de asistencias para personal interno. Desarrollo full stack con diseño en Figma, React y Node.js.',
    bullets: [
      'Diseño de wireframes y prototipos en Figma; desarrollo de módulos CRUD con React y Node.js',
      'Presentación del proyecto final destacando por diseño, funcionalidad y organización',
    ],
    tags: ['React', 'Node.js', 'CRUD', 'Figma', 'Scrum'],
  },
  {
    company: 'APM Inversiones E.I.R.L.',
    role: 'Practicante — Agentes de Inteligencia Artificial',
    period: 'Ene 2025 — Jun 2025',
    type: 'Proyecto IA',
    modality: 'Remota',
    color: '#ea580c',
    description: 'Desarrollo y entrenamiento de agentes de IA con Machine Learning y Deep Learning sobre Google Cloud Platform.',
    bullets: [
      'Entrenamiento de modelos logrando una mejora del 20% en precisión frente a la versión inicial',
      'Desarrollo de un agente IA funcional para automatizar procesos internos de la empresa',
    ],
    tags: ['Machine Learning', 'Deep Learning', 'Google Cloud', 'Google Colab'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', background: '#f8f9fb', borderTop: '1px solid #e8eaed' }}>
      <div className="container">
        <div className="section-label">Experiencia</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: '12px' }}>
          Donde he <span style={{ color: '#5a6272', fontWeight: 400 }}>trabajado.</span>
        </h2>
        <p style={{ color: '#5a6272', fontSize: '15px', marginBottom: '52px', maxWidth: '480px' }}>
          Experiencia en proyectos empresariales reales con impacto medible.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                background: '#fff', border: '1px solid #e8eaed', borderRadius: '12px',
                padding: '32px 36px', display: 'grid', gridTemplateColumns: '180px 1fr',
                gap: '36px', borderLeft: `4px solid ${exp.color}`,
              }}
            >
              {/* Left */}
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: exp.color, fontWeight: 700, marginBottom: '8px' }}>
                  {exp.type}
                </div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '15px', marginBottom: '4px', color: '#0d1117' }}>
                  {exp.company}
                </div>
                <div style={{ fontSize: '13px', color: '#9aa3b0', fontWeight: 500, marginBottom: '6px' }}>
                  {exp.period}
                </div>
                <div style={{ fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px', background: '#f1f3f6', color: '#5a6272', display: 'inline-block' }}>
                  {exp.modality}
                </div>
              </div>

              {/* Right */}
              <div>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '19px', marginBottom: '10px', color: '#0d1117' }}>
                  {exp.role}
                </h3>
                <p style={{ fontSize: '14px', color: '#5a6272', lineHeight: 1.7, marginBottom: '14px' }}>
                  {exp.description}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: '13px', color: '#5a6272', display: 'flex', gap: '10px', lineHeight: 1.6 }}>
                      <ArrowRight size={14} color={exp.color} style={{ flexShrink: 0, marginTop: '3px' }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 650px) {
          #experience .container > div > div > div { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  )
}
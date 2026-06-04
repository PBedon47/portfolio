'use client'

import { useState } from 'react'
import { ArrowRight, Sparkles, Users, X } from 'lucide-react'

const StatusDot = ({ label, color = '#16a34a', dot = '#22c55e' }: { label: string; color?: string; dot?: string }) => (
  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 600, color }}>
    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: dot, display: 'inline-block' }} />
    {label}
  </span>
)

const projects = [
  {
    id: 'alta-taza',
    title: 'Alta Taza',
    badge: 'Full Stack',
    status: { label: 'Desplegado en AWS', color: '#b45309', dot: '#f59e0b' },
    description: 'Aplicación web full stack para la gestión de pedidos, clientes y administración de productos, desplegada en AWS.',
    bullets: [
      'Funcionalidades CRUD completas para gestión de productos y pedidos',
      'Integración con base de datos PostgreSQL y despliegue en producción en AWS',
      'Interfaz moderna orientada a la experiencia del usuario final',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#92400e', bg: '#fffbeb',
    image: '/projects/alta_taza.png',
    panelExtra: null,
  },
  {
    id: 'hebras',
    title: 'Hebras',
    badge: 'Full Stack · Social',
    status: { label: 'Desplegado en Vercel', color: '#1d4ed8', dot: '#3b82f6' },
    description: 'Red social web full stack con publicaciones, perfiles de usuario, comentarios y funcionalidades interactivas, desplegada en Vercel.',
    bullets: [
      'Publicaciones, perfiles, comentarios y funcionalidades interactivas completas',
      'Arquitectura full stack con React, TypeScript y Node.js',
      'Desplegada y en producción en Vercel',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Vercel'],
    color: '#1e40af', bg: '#eff3ff',
    image: '/projects/hebras.png',
    panelExtra: null,
  },
  {
    id: 'sport-zone',
    title: 'SportZone',
    badge: 'E-commerce · IA',
    status: { label: 'Proyecto terminado', color: '#c2410c', dot: '#f97316' },
    description: 'Tienda deportiva inteligente con catálogo interactivo, carrito de compras, filtros avanzados y chatbot de IA para recomendaciones personalizadas.',
    bullets: [
      'Chatbot integrado con Azure OpenAI GPT-4.1 mini para recomendaciones y búsqueda de productos',
      'Arquitectura full stack con React, Node.js y Express mediante API REST',
      'Animaciones avanzadas con GSAP, búsqueda en tiempo real y diseño responsivo',
    ],
    tech: ['React', 'Node.js', 'Express', 'Azure OpenAI', 'GPT-4.1 mini', 'REST API', 'GSAP', 'GitHub'],
    color: '#c2410c', bg: '#fff7ed',
    image: '/projects/sportzone.png',
    accentTop: true,
    panelExtra: (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        fontSize: '11px', fontWeight: 600, padding: '4px 10px',
        borderRadius: '20px', background: 'rgba(255,255,255,0.92)', color: '#6d28d9',
        border: '1px solid #ddd6fe',
      }}>
        <Sparkles size={11} /> GPT-4.1 mini
      </div>
    ),
  },
  {
    id: 'chatbot',
    title: 'Asistente Virtual Inteligente',
    badge: 'Tesis · IA',
    status: { label: 'Implementado', color: '#065f46', dot: '#22c55e' },
    description: 'Chatbot empresarial desarrollado como tesis universitaria en equipo de 3 integrantes, implementado para automatizar consultas y agendamiento de reuniones.',
    bullets: [
      'Interfaz web integrada con servicios de IA para respuestas automáticas en lenguaje natural',
      'Automatización del flujo de consultas y agendamiento de reuniones',
      'Proyecto de tesis grupal (3 integrantes) — implementado y en uso activo en entorno real',
    ],
    tech: ['Next.js', 'React', 'LangChain', 'ChatGPT'],
    color: '#065f46', bg: '#f0fdf4',
    image: '/projects/chatbot.png',
    panelExtra: (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '5px',
        fontSize: '11px', fontWeight: 600, padding: '4px 10px',
        borderRadius: '20px', background: 'rgba(255,255,255,0.92)', color: '#065f46',
        border: '1px solid #bbf7d0',
      }}>
        <Users size={11} /> Tesis — 3 integrantes
      </div>
    ),
  },
]

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)

  return (
    <section id="projects" style={{ padding: '100px 0', background: '#fff', borderTop: '1px solid #e8eaed' }}>
      <div className="container">
        <div className="section-label">Proyectos</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: '12px' }}>
          Trabajo <span style={{ color: '#5a6272', fontWeight: 400 }}>seleccionado.</span>
        </h2>
        <p style={{ color: '#5a6272', fontSize: '15px', marginBottom: '52px', maxWidth: '480px' }}>
          Proyectos desarrollados en entornos reales con tecnologías modernas.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {projects.map((p, i) => {
            const isEven = i % 2 === 0

            return (
              <div
                key={p.id}
                style={{
                  background: '#fff',
                  border: p.id === 'sport-zone' ? '1px solid #fed7aa' : '1px solid #e8eaed',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: isEven ? '260px 1fr' : '1fr 260px',
                  position: 'relative',
                  minHeight: '240px',
                }}
              >
                {p.accentTop && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg, #ea580c, #f97316, #fb923c)', zIndex: 2,
                  }} />
                )}

                {/* Visual panel */}
                <div
                  onClick={() => p.image && setLightbox({ src: p.image, title: p.title })}
                  style={{
                    order: isEven ? 1 : 2,
                    position: 'relative',
                    overflow: 'hidden',
                    borderRight: isEven ? '1px solid #e8eaed' : 'none',
                    borderLeft: !isEven ? '1px solid #e8eaed' : 'none',
                    background: p.bg,
                    cursor: p.image ? 'zoom-in' : 'default',
                  }}
                  onMouseEnter={e => {
                    const img = e.currentTarget.querySelector('.proj-img') as HTMLElement | null
                    const hint = e.currentTarget.querySelector('.proj-hint') as HTMLElement | null
                    if (img) img.style.transform = 'scale(1.06)'
                    if (hint) hint.style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    const img = e.currentTarget.querySelector('.proj-img') as HTMLElement | null
                    const hint = e.currentTarget.querySelector('.proj-hint') as HTMLElement | null
                    if (img) img.style.transform = 'scale(1)'
                    if (hint) hint.style.opacity = '0'
                  }}
                >
                  {p.image && (
                    <img
                      className="proj-img"
                      src={p.image}
                      alt={p.title}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'top center',
                        transition: 'transform 0.4s ease',
                      }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                    />
                  )}

                  {/* Overlay */}
                  {p.image && (
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 1,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
                    }} />
                  )}

                  {/* Hint "click para ver" */}
                  {p.image && (
                    <div
                      className="proj-hint"
                      style={{
                        position: 'absolute', top: '12px', right: '12px', zIndex: 3,
                        background: 'rgba(0,0,0,0.55)', color: '#fff',
                        fontSize: '11px', fontWeight: 600, padding: '4px 10px',
                        borderRadius: '20px', opacity: 0,
                        transition: 'opacity 0.2s ease',
                        display: 'flex', alignItems: 'center', gap: '5px',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      Ver completo
                    </div>
                  )}

                  {/* Badge abajo */}
                  {p.panelExtra && (
                    <div style={{
                      position: 'absolute', bottom: '14px', left: '50%',
                      transform: 'translateX(-50%)', zIndex: 3, whiteSpace: 'nowrap',
                    }}>
                      {p.panelExtra}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{
                  order: isEven ? 2 : 1,
                  padding: '32px 36px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', color: '#9aa3b0', fontWeight: 600, letterSpacing: '0.08em' }}>0{i + 1}</span>
                    <span style={{
                      fontSize: '11px', fontWeight: 600, padding: '3px 10px',
                      borderRadius: '100px', background: p.bg, color: p.color,
                      border: `1px solid ${p.color}33`,
                    }}>
                      {p.badge}
                    </span>
                    <StatusDot {...p.status} />
                  </div>

                  <h3 style={{
                    fontFamily: "'Syne',sans-serif",
                    fontSize: 'clamp(18px,2.2vw,24px)', fontWeight: 700,
                    marginBottom: '10px', color: '#0d1117',
                  }}>
                    {p.title}
                  </h3>

                  <p style={{ color: '#5a6272', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '14px' }}>
                    {p.description}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                    {p.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: '13px', color: '#5a6272', display: 'flex', gap: '10px', lineHeight: 1.6 }}>
                        <ArrowRight size={13} color="#2563eb" style={{ flexShrink: 0, marginTop: '3px' }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
                    {p.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: '#fff',
            }}
          >
            <X size={18} />
          </button>

          <div onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '88vh', position: 'relative' }}>
            <img
              src={lightbox.src}
              alt={lightbox.title}
              style={{
                maxWidth: '100%', maxHeight: '85vh',
                borderRadius: '12px',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                display: 'block',
              }}
            />
            <p style={{
              textAlign: 'center', color: 'rgba(255,255,255,0.6)',
              fontSize: '13px', marginTop: '12px', fontWeight: 500,
            }}>
              {lightbox.title}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @media (max-width: 650px) {
          #projects .container > div > div > div {
            grid-template-columns: 1fr !important;
          }
          #projects .container > div > div > div > div:first-child {
            min-height: 180px !important;
            border-right: none !important;
            border-left: none !important;
            border-bottom: 1px solid #e8eaed;
          }
        }
      `}</style>
    </section>
  )
}
'use client'

const OpenAIIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.031.067L9.748 19.95a4.5 4.5 0 0 1-6.148-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.371 2.02-1.164a.076.076 0 0 1 .071 0l4.83 2.786a4.49 4.49 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.678zm2.010-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
)

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 22.525H0l12-21.05z"/>
  </svg>
)

const categories = [
  {
    label: 'Frontend', color: '#2563eb', bg: '#eff3ff',
    skills: [
      { name: 'React', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'Tailwind CSS', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    label: 'Backend', color: '#7c3aed', bg: '#f5f3ff',
    skills: [
      { name: 'Node.js', level: 55, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'NestJS', level: 45, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
    ],
  },
  {
    label: 'Bases de datos', color: '#0891b2', bg: '#ecfeff',
    skills: [
      { name: 'PostgreSQL', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    label: 'Cloud & Deploy', color: '#0d9488', bg: '#f0fdfa',
    skills: [
      { name: 'Vercel', level: 75, icon: null },
      { name: 'AWS', level: 45, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Google Cloud', level: 40, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    ],
  },
  {
    label: 'Inteligencia Artificial', color: '#ea580c', bg: '#fff7ed',
    skills: [
      { name: 'ChatGPT', level: 70, icon: null },
      { name: 'OpenAI API', level: 65, icon: null },
      { name: 'Claude AI', level: 65, icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg' },
      { name: 'Gemini', level: 60, icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
      { name: 'LangChain', level: 55, icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
    ],
  },
]

const SkillIcon = ({ name, icon }: { name: string; icon: string | null }) => {
  if (name === 'ChatGPT' || name === 'OpenAI API') {
    return (
      <div style={{
        width: 20, height: 20, flexShrink: 0,
        background: '#000', borderRadius: '4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2px',
      }}>
        <OpenAIIcon />
      </div>
    )
  }

  if (name === 'Vercel') {
    return (
      <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <VercelIcon />
      </div>
    )
  }

  return (
    <img
      src={icon!}
      alt={name}
      width={20}
      height={20}
      style={{ objectFit: 'contain', flexShrink: 0 }}
      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
    />
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 0', background: '#f8f9fb', borderTop: '1px solid #e8eaed' }}>
      <div className="container">
        <div className="section-label">Tecnologías</div>
        <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', marginBottom: '12px' }}>
          Mi stack <span style={{ color: '#5a6272', fontWeight: 400 }}>técnico.</span>
        </h2>
        <p style={{ color: '#5a6272', fontSize: '15px', marginBottom: '52px', maxWidth: '480px' }}>
          Tecnologías con las que construyo productos completos, del diseño al despliegue.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {categories.map(cat => (
            <div key={cat.label} style={{ background: '#fff', border: '1px solid #e8eaed', borderRadius: '14px', padding: '28px' }}>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #f1f3f6' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0d1117' }}>
                  {cat.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SkillIcon name={skill.name} icon={skill.icon} />
                        <span style={{ fontSize: '14px', color: '#0d1117', fontWeight: 500 }}>{skill.name}</span>
                      </div>
                      <span style={{ fontSize: '12px', color: '#9aa3b0', fontWeight: 600, minWidth: '32px', textAlign: 'right' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '5px', background: '#f1f3f6', borderRadius: '5px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${skill.level}%`, background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})`, borderRadius: '5px' }} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
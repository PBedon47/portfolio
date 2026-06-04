export interface Project {
  id: string
  title: string
  description: string
  bullets: string[]
  tech: string[]
  image: string
  emoji: string
  highlight?: string
}

export const projects: Project[] = [
  {
    id: 'alta-taza',
    title: 'Alta Taza',
    emoji: '☕',
    description: 'Aplicación web full stack para la gestión de pedidos, clientes y administración de productos.',
    bullets: [
      'Desarrollo de funcionalidades CRUD completas para gestión de productos y pedidos',
      'Integración con bases de datos PostgreSQL y despliegue en AWS',
      'Interfaz intuitiva orientada a la experiencia del usuario final',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/alta-taza.png',
    highlight: 'Full Stack',
  },
  {
    id: 'hebras',
    title: 'Hebras',
    emoji: '🌐',
    description: 'Red social web con publicaciones, perfiles, comentarios y funcionalidades interactivas.',
    bullets: [
      'Implementación de publicaciones, perfiles, comentarios y funcionalidades interactivas',
      'Desarrollo de interfaces responsivas enfocadas en la experiencia del usuario',
      'Despliegue de la aplicación utilizando Vercel',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Vercel'],
    image: '/hebras.png',
    highlight: 'Social App',
  },
  {
    id: 'chatbot',
    title: 'Asistente Virtual Inteligente',
    emoji: '🤖',
    description: 'Chatbot empresarial basado en IA para automatizar consultas y el agendamiento de reuniones.',
    bullets: [
      'Desarrollo de la interfaz web e integración con servicios de IA',
      'Automatización del flujo de consultas y agendamiento de reuniones',
      'Implementado y utilizado en un entorno empresarial real',
    ],
    tech: ['React', 'Next.js', 'LangChain', 'ChatGPT'],
    image: '/chatbot.png',
    highlight: 'Producción',
  },
]

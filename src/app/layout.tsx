import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pedro Bedón — Frontend Developer',
  description: 'Frontend Developer especializado en React, Next.js y TypeScript, con experiencia en integración de IA y desarrollo full stack.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'IA', 'Peru'],
  authors: [{ name: 'Pedro Luis Bedón Carbajal' }],
  openGraph: {
    title: 'Pedro Bedón — Frontend Developer',
    description: 'Desarrollador Frontend especializado en React, Next.js y TypeScript.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

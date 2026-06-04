import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider" style={{ margin: '0' }} />
        <About />
        <div className="section-divider" style={{ margin: '0' }} />
        <Skills />
        <div className="section-divider" style={{ margin: '0' }} />
        <Projects />
        <div className="section-divider" style={{ margin: '0' }} />
        <Experience />
        <div className="section-divider" style={{ margin: '0' }} />
        <Contact />
      </main>
    </>
  )
}

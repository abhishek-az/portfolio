import { useCallback, useState } from 'react'
import { marquee } from './data.js'
import Background from './components/Background.jsx'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Credentials from './components/Credentials.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])

  return (
    <div className={ready ? 'ready' : ''}>
      <Loader onDone={onDone} />
      <Background />
      <Nav />
      <Hero ready={ready} />
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
        </div>
      </div>
      <main>
        <About />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
      </main>
    </div>
  )
}

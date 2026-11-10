import { useEffect, useRef, useState } from 'react'
import photo from '../assets/profile.png'
import { profile, typedRoles } from '../data.js'
import { prefersReducedMotion } from '../hooks.js'
import Magnetic from './Magnetic.jsx'
import Reveal from './Reveal.jsx'

function useTypewriter(words, start) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (!start) return
    if (prefersReducedMotion()) { setText(words[0]); return }
    let wi = 0, ci = 0, del = false, t
    const tick = () => {
      const w = words[wi]
      setText(w.slice(0, ci))
      if (!del && ci < w.length) ci++
      else if (del && ci > 0) ci--
      else if (!del) { del = true; t = setTimeout(tick, 1600); return }
      else { del = false; wi = (wi + 1) % words.length }
      t = setTimeout(tick, del ? 35 : 70)
    }
    t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [words, start])
  return text
}

function Portrait() {
  const ref = useRef(null)
  const canTilt = typeof window !== 'undefined' && window.matchMedia('(hover:hover)').matches && !prefersReducedMotion()
  const move = e => {
    if (!canTilt) return
    const el = ref.current, r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`
  }
  return (
    <Reveal className="portrait-wrap" onPointerMove={move} onPointerLeave={() => { if (ref.current) ref.current.style.transform = '' }}>
      <div className="portrait" ref={ref}>
        <div className="ring" />
        <div className="photo" role="img" aria-label={`Portrait of ${profile.name}`} style={{ '--photo': `url(${photo})` }} />
        <div className="scan" />
        <div className="nameplate"><div><b>{profile.name}</b><small>{profile.location}</small></div></div>
        <div className="chip c1"><i />AWS Bedrock</div>
        <div className="chip c2"><i />Kubernetes</div>
        <div className="chip c3"><i />Terraform</div>
      </div>
    </Reveal>
  )
}

export default function Hero({ ready }) {
  const typed = useTypewriter(typedRoles, ready)
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="eyebrow"><span className="dot" />{profile.title} @ {profile.company}</span>
          <h1>
            <span className="line"><span>{profile.first}</span></span>
            <span className="line"><span className="grad">{profile.last}</span></span>
          </h1>
          <div className="role">I build <span className="typed">{typed}</span><span className="caret" /></div>
          <p className="lede">
            <strong>9+ years</strong> engineering cloud platforms and AI infrastructure. Currently leading the migration of enterprise{' '}
            <strong>GenAI workloads from Azure to AWS</strong> on Amazon Bedrock, with Kubernetes, Terraform and GitOps underneath it all.
          </p>
          <div className="cta">
            <Magnetic href="#contact" className="primary">
              Let's talk
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Magnetic>
            <Magnetic href="#experience" className="ghost">View experience</Magnetic>
          </div>
        </div>
        <Portrait />
      </div>
      <div className="scroll-hint"><div className="m" />SCROLL</div>
    </header>
  )
}

import { useEffect, useRef, useState } from 'react'
import { jobs } from '../data.js'
import { spotlight } from '../hooks.js'
import Reveal from './Reveal.jsx'

function Job({ job }) {
  const [open, setOpen] = useState(false)
  return (
    <Reveal className={`job ${open ? 'open' : ''}`}>
      <div className="card" onPointerMove={spotlight}>
        <div className="meta"><h3>{job.company}</h3><span className="when">{job.when}</span></div>
        <div className="title">{job.title}</div>
        <ul>{job.points.map(([b, t]) => <li key={b}><b>{b}:</b> {t}</li>)}</ul>
        {job.more && (
          <>
            <ul className="more">{job.more.map(([b, t]) => <li key={b}><b>{b}:</b> {t}</li>)}</ul>
            <button className="toggle" onClick={() => setOpen(o => !o)} aria-expanded={open}>
              {open ? '− show less' : '+ show more'}
            </button>
          </>
        )}
      </div>
    </Reveal>
  )
}

export default function Experience() {
  const tl = useRef(null)
  const [fill, setFill] = useState(0)

  // Timeline rail fills as you scroll through it
  useEffect(() => {
    const onScroll = () => {
      const r = tl.current.getBoundingClientRect()
      setFill(Math.min(1, Math.max(0, (window.innerHeight * 0.6 - r.top) / r.height)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="sec-head"><span className="num">03 / experience</span><h2>Nine years, <em>four</em> companies.</h2></Reveal>
        <div className="timeline" ref={tl}>
          <div className="rail"><i style={{ height: `${fill * 100}%` }} /></div>
          {jobs.map(j => <Job key={j.company} job={j} />)}
        </div>
      </div>
    </section>
  )
}

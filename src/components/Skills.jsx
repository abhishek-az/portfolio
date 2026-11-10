import { depth, orbitItems, skillGroups } from '../data.js'
import { spotlight } from '../hooks.js'
import Reveal from './Reveal.jsx'

// must match the .o1/.o2/.o3 animation durations in index.css
const RING_SECONDS = { 1: 22, 2: 36, 3: 50 }

const ICONS = {
  spark: <><path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4z" /><path d="M19 17l.9 2.1L22 20l-2.1.9L19 23l-.9-2.1L16 20l2.1-.9z" /></>,
  cloud: <path d="M7 18a5 5 0 01-.6-9.96A6 6 0 0118 9a4.5 4.5 0 01-.5 9z" />,
  box: <><path d="M12 2l9 5v10l-9 5-9-5V7z" /><path d="M12 22V12M21 7l-9 5-9-5" /></>,
  lines: <path d="M4 6h16M4 12h16M4 18h10" />,
  git: <><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M6 8.5v7M8.5 18h7M18 15.5V11a5 5 0 00-5-5H8.5" /></>,
  pulse: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="sec-head"><span className="num">02 / expertise</span><h2>The <em>stack</em> I work in.</h2></Reveal>
        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} className={`card ${g.feature ? 'feature' : ''}`} delay={(i % 3) * 80} onPointerMove={spotlight}>
              <div className="ic"><svg viewBox="0 0 24 24">{ICONS[g.icon]}</svg></div>
              <h3>{g.title}</h3>
              <div className="tags">{g.tags.map(t => <span key={t}>{t}</span>)}</div>
            </Reveal>
          ))}
        </div>

        <div className="orbit-sec">
          <Reveal className="orbit" aria-hidden="true">
            {orbitItems.map(([label, ring, angle]) => {
              // start each item at its own angle by offsetting the shared spin animation
              const delay = { animationDelay: `${-(angle / 360) * RING_SECONDS[ring]}s` }
              return (
                <div key={label} className={`o o${ring}`} style={delay}>
                  <span className="p" style={delay}>{label}</span>
                </div>
              )
            })}
            <div className="core">Platform<br />Engineering</div>
          </Reveal>
          <Reveal className="orbit-copy" delay={120}>
            {inView => (
              <>
                <span className="num">// depth</span>
                <h2 className="h2-sm">Where I go <em>deepest</em></h2>
                <p>Everything orbits the platform: secure, observable, automated infrastructure that product and AI teams can build on.</p>
                <div className="bars">
                  {depth.map(([label, w]) => (
                    <div className="bar-row" key={label}>
                      <div className="t"><span>{label}</span><span>{w}%</span></div>
                      <div className="tr"><i style={{ width: inView ? `${w}%` : 0 }} /></div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

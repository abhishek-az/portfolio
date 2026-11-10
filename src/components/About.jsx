import { useCallback, useEffect, useRef, useState } from 'react'
import { pipelineLogs, pipelineStages, stats } from '../data.js'
import { spotlight, useCountUp } from '../hooks.js'
import Reveal from './Reveal.jsx'

function Stat({ v, suffix, l, start }) {
  const n = useCountUp(v, start)
  return (
    <div className="stat" onPointerMove={spotlight}>
      <div className="v">{n}{suffix}</div>
      <div className="l">{l}</div>
    </div>
  )
}

/** Animated CI/CD pipeline that loops forever once visible. */
function Pipeline() {
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0) // stages with index < step are done
  const [running, setRunning] = useState(-1)
  const [logs, setLogs] = useState([])
  const timer = useRef()

  const start = useCallback(() => setStarted(true), [])

  useEffect(() => {
    if (!started) return
    let i = 0
    const add = line => setLogs(l => [...l, line].slice(-7))
    const next = () => {
      setStep(i)
      if (i === pipelineStages.length) {
        setRunning(-1)
        add(['ok', '🚀 deployed to production in 3m 12s'])
        timer.current = setTimeout(() => {
          i = 0; setStep(0); setLogs([['warn', '↻ new commit detected...']])
          timer.current = setTimeout(next, 900)
        }, 4200)
        return
      }
      setRunning(i); add(pipelineLogs[i]); i++
      timer.current = setTimeout(next, 1100)
    }
    next()
    return () => clearTimeout(timer.current)
  }, [started])

  return (
    <Reveal className="pipeline" onInView={start}>
      <div className="top"><i /><i /><i />abhishek@platform:~$ gitops deploy --env=production</div>
      <div className="stages">
        {pipelineStages.map((s, i) => (
          <div key={s} style={{ display: 'contents' }}>
            <div className={`stage ${i < step ? 'ok' : i === running ? 'run' : ''}`}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div><small>{s}</small>
            </div>
            {i < pipelineStages.length - 1 && <div className={`conn ${i < step ? 'ok' : ''}`} />}
          </div>
        ))}
      </div>
      <div className="log">
        {logs.map(([cls, txt], k) => <div key={k + txt} className={cls}>{txt}</div>)}
      </div>
    </Reveal>
  )
}

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="sec-head"><span className="num">01 / about</span><h2>Platforms that <em>ship</em>,<br />scale and stay up.</h2></Reveal>
        <div className="about">
          <Reveal>
            <p>I'm a <strong>Staff DevOps Engineer and AI Platform Architect</strong> based in Hyderabad. I design the foundations that let engineering teams move fast without breaking things: multi-cloud Kubernetes, modular Terraform and GitOps-driven delivery.</p>
            <p>Lately my focus is <strong>enterprise GenAI</strong>. I architect AI platforms on Amazon Bedrock with Guardrails for responsible AI, build <strong>AgentFactory</strong> frameworks for agentic workflows, and work with enterprise architecture teams on AI security and governance standards.</p>
            <p>I also built an R&amp;D canvas tool that reads architecture diagrams and generates valid Terraform in real time, so new cloud projects start <strong>about 30% done</strong> instead of from a blank file.</p>
          </Reveal>
          <Reveal className="stats" delay={120}>
            {inView => stats.map(s => <Stat key={s.l} {...s} start={inView} />)}
          </Reveal>
        </div>
        <Pipeline />
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { prefersReducedMotion } from '../hooks.js'

const LINES = [
  '$ kubectl get nodes',
  'node/platform-01   Ready',
  '$ terraform apply -auto-approve',
  'Apply complete! Resources: 42 added.',
  '$ launching portfolio...',
]

/** Terminal-style boot screen shown on first load. */
export default function Loader({ onDone }) {
  const [shown, setShown] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) { setDone(true); onDone(); return }
    let i = 0, t
    const step = () => {
      if (i < LINES.length) { i++; setShown(i); t = setTimeout(step, 230) }
      else t = setTimeout(() => { setDone(true); onDone() }, 300)
    }
    step()
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div id="loader" className={done ? 'done' : ''} aria-hidden={done}>
      <div className="boot">
        {LINES.slice(0, shown).map(l => <div key={l}>{l}</div>)}
        <div className="bar"><i style={{ width: `${(shown / LINES.length) * 100}%` }} /></div>
      </div>
    </div>
  )
}

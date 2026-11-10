import { certs, education } from '../data.js'
import Reveal from './Reveal.jsx'

const Cert = ({ c, i }) => (
  <Reveal className="cert" delay={(i % 4) * 80}>
    <div className="badge" style={{ background: c.bg }}>{c.badge}</div>
    <h4>{c.name}</h4>
    <p>{c.sub}</p>
  </Reveal>
)

export default function Credentials() {
  return (
    <section id="certs">
      <div className="wrap">
        <Reveal className="sec-head"><span className="num">04 / credentials</span><h2>Certified &amp; <em>educated</em>.</h2></Reveal>
        <div className="certs">{certs.map((c, i) => <Cert key={c.name} c={c} i={i} />)}</div>
        <div className="edu">{education.map((c, i) => <Cert key={c.name} c={c} i={i} />)}</div>
      </div>
    </section>
  )
}

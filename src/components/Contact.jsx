import { profile } from '../data.js'
import Magnetic from './Magnetic.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <Reveal className="wrap">
          <span className="num">05 / contact</span>
          <h2>Let's build <em>something</em><br />reliable.</h2>
          <p>Open to conversations about AI platform architecture, cloud migrations and platform engineering leadership.</p>
          <div className="cta" style={{ justifyContent: 'center' }}>
            <Magnetic href={`mailto:${profile.email}`} className="primary">Send an email</Magnetic>
            <Magnetic href={profile.phoneHref} className="ghost">{profile.phone}</Magnetic>
          </div>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.1 1.43-2.1 2.9V21H9z" /></svg>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" /></svg>
            </a>
          </div>
        </Reveal>
      </section>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location} · status: <span className="ok-dot">● all systems operational</span></span>
        </div>
      </footer>
    </>
  )
}

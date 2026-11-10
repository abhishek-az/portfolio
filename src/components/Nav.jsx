import { useEffect, useState } from 'react'

const LINKS = [['about', 'About'], ['skills', 'Expertise'], ['experience', 'Experience'], ['certs', 'Credentials'], ['contact', 'Contact']]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let cur = ''
      for (const [id] of LINKS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="wrap">
        <a href="#top" className="logo">A<b>.</b>Abhishek</a>
        <div className="links">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

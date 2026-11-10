import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Returns [ref, inView] — flips true once when the element scrolls into view. */
export function useInView(threshold = 0.18) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

/** Animated number that counts up from 0 when `start` becomes true. */
export function useCountUp(end, start, duration = 1600) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    if (prefersReducedMotion()) { setVal(end); return }
    let raf
    const t0 = performance.now()
    const tick = t => {
      const k = Math.min(1, (t - t0) / duration)
      setVal(Math.round(end * (1 - Math.pow(1 - k, 3))))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, start, duration])
  return val
}

/** Sets --mx / --my CSS vars for the spotlight hover effect. */
export const spotlight = e => {
  const c = e.currentTarget, r = c.getBoundingClientRect()
  c.style.setProperty('--mx', `${e.clientX - r.left}px`)
  c.style.setProperty('--my', `${e.clientY - r.top}px`)
}

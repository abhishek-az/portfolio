import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks.js'

/** Animated particle network + aurora blobs + grain + cursor glow. */
export default function Background() {
  const canvas = useRef(null)
  const glow = useRef(null)

  useEffect(() => {
    const cv = canvas.current, ctx = cv.getContext('2d')
    let W, H, pts = [], raf
    const mouse = { x: -999, y: -999 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = window.innerWidth; H = window.innerHeight
      cv.width = W * dpr; cv.height = H * dpr
      cv.style.width = W + 'px'; cv.style.height = H + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(90, Math.floor((W * H) / 16000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        const dx = p.x - mouse.x, dy = p.y - mouse.y, dm = Math.hypot(dx, dy)
        if (dm < 140 && dm > 0) { p.x += dx / dm; p.y += dy / dm }
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgba(110,150,255,${(1 - d / 130) * 0.22})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        ctx.fillStyle = 'rgba(120,200,255,.6)'
        ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.6, 0, 7); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const move = e => {
      mouse.x = e.clientX; mouse.y = e.clientY
      if (glow.current) { glow.current.style.left = e.clientX + 'px'; glow.current.style.top = e.clientY + 'px' }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move)
    if (!prefersReducedMotion()) draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return (
    <>
      <canvas id="net" ref={canvas} />
      <div className="aurora"><span /><span /><span /></div>
      <div className="grain" />
      <div className="cursor-glow" ref={glow} />
    </>
  )
}

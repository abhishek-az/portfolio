/** Button/link that leans toward the cursor. */
export default function Magnetic({ className = '', children, ...rest }) {
  const move = e => {
    const b = e.currentTarget, r = b.getBoundingClientRect()
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`
  }
  const leave = e => { e.currentTarget.style.transform = '' }
  return <a className={`btn ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>{children}</a>
}

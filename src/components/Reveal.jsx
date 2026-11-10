import { useEffect } from 'react'
import { useInView } from '../hooks.js'

/** Fades/slides its children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, style, onInView, children, ...rest }) {
  const [ref, inView] = useInView()
  useEffect(() => { if (inView && onInView) onInView() }, [inView, onInView])
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }} {...rest}>
      {typeof children === 'function' ? children(inView) : children}
    </Tag>
  )
}

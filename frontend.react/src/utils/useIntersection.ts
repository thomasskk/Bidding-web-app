import { useState, useEffect } from 'react'

export default function useIntersection(options: any = {}): any {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [ref, setRef] = useState<any | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    ref && observer.observe(ref)

    return () => {
      ref && observer.unobserve(ref)
    }
  }, [ref, options])

  return [setRef, isIntersecting] as any
}

'use client'

import { Leaf } from 'lucide-react'

const leaves = [
  { left: '6%', size: 18, duration: 18, delay: 0, opacity: 0.18 },
  { left: '22%', size: 26, duration: 24, delay: 4, opacity: 0.14 },
  { left: '44%', size: 16, duration: 20, delay: 8, opacity: 0.2 },
  { left: '63%', size: 30, duration: 28, delay: 2, opacity: 0.12 },
  { left: '80%', size: 20, duration: 22, delay: 6, opacity: 0.16 },
  { left: '92%', size: 24, duration: 26, delay: 10, opacity: 0.13 },
]

export function FloatingLeaves() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {leaves.map((l, i) => (
        <Leaf
          key={i}
          className="animate-leaf-float absolute bottom-0 text-leaf-foreground"
          style={{
            left: l.left,
            width: l.size,
            height: l.size,
            opacity: l.opacity,
            animationDuration: `${l.duration}s`,
            animationDelay: `${l.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

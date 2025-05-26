/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  AnimationPlaybackControls,
  motion,
  useAnimate,
  useMotionValue
} from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false)
  const animation = useRef<AnimationPlaybackControls>(null)
  const [scope, animate] = useAnimate()

  const [width, height] = [192, 48]
  // Cursor position
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  // Handler for window mousemove event
  const handleWindowMouseMove = (e: MouseEvent) => {
    console.log('_jkhjdgh')
    mousePosition.x.set(e.clientX - (width / 2))
    mousePosition.y.set(e.clientY - (height / 2))
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: '-50%' },
      { duration: 25, ease: 'linear', repeat: Infinity }
    )
  }, [])

  useEffect(() => {
    if (animation.current) {
      animation.current.speed = isHovered ? 0.5 : 1
    }
  }, [isHovered])

  return (
    <section className='py-24 border border-white/10'>
      <div
        className='overflow-x-clip p-4 flex border border-white/15'
        ref={sectionRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={scope}
          className='flex flex-none gap-16 text-7xl font-medium md:text-8xl whitespace-nowrap group cursor-none'
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='flex items-center gap-16'>
              <span className='text-lime-400 text-7xl'>&#10038;</span>
              <span className='group-hover:text-lime-400'>Try it for free</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={`pointer-events-none fixed top-0 left-0 flex items-center justify-center z-50 text-2xl font-semibold  rounded-full bg-white text-black`}
          initial={false}
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
            width,
            height
          }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          Yes, please ✨
        </motion.div>
      </div>
    </section>
  )
}

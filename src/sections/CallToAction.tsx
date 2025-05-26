/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { AnimationPlaybackControls, motion, useAnimate } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false)
  const animation = useRef<AnimationPlaybackControls>(null)
  const [scope, animate] = useAnimate()

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
    <section className='py-24'>
      <div className='overflow-x-clip p-4 flex'>
        <motion.div
          ref={scope}
          className='flex flex-none gap-16 text-7xl font-medium md:text-8xl whitespace-nowrap group'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='flex items-center gap-16'>
              <span className='text-lime-400 text-7xl'>&#10038;</span>
              <span className='group-hover:text-lime-400'>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

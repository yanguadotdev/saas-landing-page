/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Button from '@/components/Button'
import designExample1Image from '@/assets/design-example-1.png'
import designExample2Image from '@/assets/design-example-2.png'
import Image from 'next/image'
import MousePointer from '@/components/Pointer'
import { motion, useAnimate } from 'motion/react'
import { useEffect } from 'react'

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate()
  const [leftPointerScope, leftPointerAnimate] = useAnimate()

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }]
    ])

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: 'easeInOut' }
      ]
    ])
  }, [])

  return (
    <section id='hero' className='py-24 overflow-clip'>
      <div className='container relative mx-auto'>
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className='absolute -left-32 top-16 hidden lg:block'
        >
          <Image src={designExample1Image} alt='Design example 1 image' />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className='absolute left-56 top-96 hidden lg:block'
        >
          <MousePointer name='Andrea' />
        </motion.div>

        <div className='absolute -right-64 -top-16 hidden lg:block'>
          <Image src={designExample2Image} alt='Design example 2 image' />
        </div>
        <div className='absolute right-80 -top-4 hidden lg:block'>
          <MousePointer name='Samir' color='red' />
        </div>

        <span className='block w-max mx-auto font-medium py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950'>
          ✨ $7.5M seed round raised
        </span>
        <h1 className='text-6xl md:text-7xl lg:text-8xl text-balance font-semibold text-center mt-6'>
          Impactful{' '}
          <span
            style={{
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: 'lime',
              color: 'transparent'
            }}
          >
            design
          </span>
          , created effortlessly
        </h1>
        <p className='text-lg text-white/60 text-center mt-8 max-w-2xl mx-auto'>
          Design tools shouldn&apos;t slow you down. Layers is a design system
          that helps you create beautiful, consistent designs faster than ever.
          With a library of pre-built components and templates, you can focus on
          what matters most: your ideas.
        </p>

        <form
          action=''
          className='flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto'
        >
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter your email'
            className='bg-transparent px-4 focus:outline-none md:flex-1 w-full'
          />
          <Button
            className='whitespace-nowrap'
            type='submit'
            variant='primary'
            size='sm'
          >
            Sign up
          </Button>
        </form>
      </div>
    </section>
  )
}

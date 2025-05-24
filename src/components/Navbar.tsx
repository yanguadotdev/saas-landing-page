'use client'

import Image from 'next/image'
import logoImage from '@/assets/logo.svg'
import { MenuIcon } from './Icons'
import Button from './Button'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header id='header' className='py-4 lg:py-8 fixed w-full top-0 z-50'>
        <div className='container max-w-6xl mx-auto'>
          <div className='border border-white/15 rounded-[28px] bg-neutral-950/70 backdrop-blur'>
            <div className='grid grid-cols-2 lg:grid-cols-3 rounded-full p-2 px-4 md:pr-2 items-center'>
              <div>
                <Image
                  src={logoImage}
                  alt='Layers Logo'
                  className='h-9 w-auto'
                />
              </div>

              <div className='hidden lg:block'>
                <nav>
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className='text-white/80 hover:text-white px-4 py-2 rounded-full'
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className='flex gap-4 justify-end'>
                <MenuIcon
                  className='md:hidden cursor-pointer'
                  onClick={() => setIsOpen(!isOpen)}
                  isOpen={isOpen}
                />

                <Button className='hidden md:block' variant='secondary'>
                  Log in
                </Button>
                <Button className='hidden md:block' variant='primary'>
                  Sign up
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className='overflow-hidden'
                >
                  <div className='flex flex-col items-center gap-4 py-4'>
                    {navLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className='text-white/80 hover:text-white px-4 rounded-full'
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button variant='secondary'>Log in</Button>
                    <Button variant='primary'>Sign up</Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <div className='pb-[86px] md:pb-[96px]'></div>
    </>
  )
}

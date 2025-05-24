import Image from 'next/image'
import logoImage from '@/assets/logo.svg'
import { Menu } from './Icons'
import Button from './Button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQs', href: '#faqs' }
]

export default function Navbar() {
  return (
    <header id='header' className='py-4 font-sans'>
      <div className='container max-w-6xl mx-auto'>
        <div className='grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center'>
          <div>
            <Image src={logoImage} alt='Layers Logo' className='h-9 w-auto' />
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
            <Menu className='md:hidden' />

            <Button className='hidden md:block' variant='secondary'>Log in</Button>
            <Button className='hidden md:block' variant='primary'>Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

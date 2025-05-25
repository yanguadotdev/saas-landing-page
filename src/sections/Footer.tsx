import logoImage from '../assets/logo.svg'
import Image from 'next/image'

const footerLinks = [
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms & Conditions' }
]

export default function Footer() {
  return (
    <section className='py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between'>
          <div>
            <Image src={logoImage} alt='Layers Logo' />
          </div>
          <div>
            <nav className='flex gap-6'>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className='text-white/60 hover:text-white py-2 text-sm whitespace-nowrap'
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

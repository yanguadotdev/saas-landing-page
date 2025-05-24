import quantumLogo from '@/assets/quantum.svg'
import acmeLogo from '@/assets/acme-corp.svg'
import echoValleyLogo from '@/assets/echo-valley.svg'
import pulseLogo from '@/assets/pulse.svg'
import outsideLogo from '@/assets/outside.svg'
import apexLogo from '@/assets/apex.svg'
import celestialLogo from '@/assets/celestial.svg'
import twiceLogo from '@/assets/twice.svg'
import Image from 'next/image'

const logos = [
  { name: 'Quantum', image: quantumLogo },
  { name: 'Acme Corp', image: acmeLogo },
  { name: 'Echo Valley', image: echoValleyLogo },
  { name: 'Pulse', image: pulseLogo },
  { name: 'Outside', image: outsideLogo },
  { name: 'Apex', image: apexLogo },
  { name: 'Celestial', image: celestialLogo },
  { name: 'Twice', image: twiceLogo }
]

export default function LogoTicker() {
  return (
    <section className='overflow-x-clip py-24'>
      <div className='container mx-auto'>
        <h3 className='text-center text-white/60 text-xl'>Already chosen by these market leaders</h3>
        <div className='overflow-hidden mt-12 [mask-image:linear-gradient(to_right,black_10%,black_90%,transparent)]'>
          <div className='flex gap-24 pr-24'>
            {logos.map((logo) => (
              <Image
                src={logo.image}
                alt={`${logo.name} logo`}
                key={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

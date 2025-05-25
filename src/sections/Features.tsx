import FeatureCard from '@/components/FeatureCard'
import Tagline from '@/components/Tagline'
import avatar1 from '@/assets/avatar-ashwin-santiago.jpg'
import avatar2 from '@/assets/avatar-lula-meyers.jpg'
import avatar3 from '@/assets/avatar-florence-shaw.jpg'
import avatar4 from '@/assets/avatar-owen-garcia.jpg'
import Image from 'next/image'
import Avatar from '@/components/Avatar'
import Key from '@/components/Key'

const features = [
  'Asset Library',
  'Code Preview',
  'Flow Mode',
  'Smart Sync',
  'Auto Layout',
  'Fast Search',
  'Smart Guides'
]

export default function Features() {
  return (
    <section className='py-28 lg:py-40'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <Tagline>Features</Tagline>
        </div>
        <h2 className='text-6xl font-medium text-center mt-6 max-w-2xl mx-auto'>
          Where power meets <span className='text-lime-400'>simplicity</span>
        </h2>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8'>
          <FeatureCard
            className='md:col-span-2 lg:col-span-1 group'
            title='Real-time Collaboration'
            description='Work together in real-time, no matter where you are. Layers
                makes it easy to collaborate with your team'
          >
            <div className='aspect-video flex items-center justify-center'>
              <Avatar className='z-40'>
                <Image
                  src={avatar1}
                  className='rounded-full'
                  alt='Avatar of Aswin Santiago'
                />
              </Avatar>
              <Avatar className='-ml-6 border-indigo-500 z-30'>
                <Image
                  src={avatar2}
                  className='rounded-full'
                  alt='Avatar of Lula Meyers'
                />
              </Avatar>
              <Avatar className='-ml-6 border-amber-500 z-20'>
                <Image
                  src={avatar3}
                  className='rounded-full'
                  alt='Avatar of Florence Shawn'
                />
              </Avatar>
              <Avatar className='-ml-6 border-transparent group-hover:border-green-500'>
                <div className='size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative'>
                  <Image
                    src={avatar4}
                    className='rounded-full absolute size-full opacity-0 group-hover:opacity-100 transition'
                    alt='Avatar of Owen Garcia'
                  />
                  {Array.from({ length: 3 }, (_, i) => (
                    <span
                      key={i}
                      className='size-1.5 rounded-full bg-white inline-block'
                    />
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>

          <FeatureCard
            className='md:col-span-2 lg:col-span-1'
            title='Interactive Prototyping'
            description='Engage your clients with prototype interactions that feel real.
                Layers allows you to create interactive prototypes.'
          >
            <div className='aspect-video flex items-center justify-center'>
              <p className='text-4xl font-extrabold text-white/20 text-center'>
                We&apos;ve achieved{' '}
                <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  incredible
                </span>{' '}
                growth this year
              </p>
            </div>
          </FeatureCard>

          <FeatureCard
            className='md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group'
            title='Keyboard Quick Actions'
            description='Powerfull commands to help you create and edit your designs
                faster than ever. Layers allows you to use keyboard shortcuts.'
          >
            <div className='aspect-video flex items-center justify-center gap-3'>
              <Key className='w-28 outline-2 group-hover:translate-y-1 outline-lime-400'>
                shift
              </Key>
              <Key className='outline-2 group-hover:translate-y-1 outline-lime-400 delay-150'>
                alt
              </Key>
              <Key className='outline-2 group-hover:translate-y-1 outline-lime-400 delay-300'>
                C
              </Key>
            </div>
          </FeatureCard>
        </div>

        <div className='mt-8 flex items-center justify-center gap-3 flex-wrap'>
          {features.map((feature) => (
            <div
              key={feature}
              className='inline-flex items-center gap-3 bg-neutral-900 border border-white/10 px-3 py-1.5 rounded-2xl group hover:scale-105 transition duration-500'
            >
              <span className='bg-lime-400 text-neutral-950 rounded-full size-5 inline-flex items-center justify-center group-hover:rotate-45 transition duration-500'>
                &#10038;
              </span>
              <span className='md:text-lg'>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

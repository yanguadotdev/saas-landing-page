import figmaIcon from '@/assets/figma-logo.svg'
import notionIcon from '@/assets/notion-logo.svg'
import slackIcon from '@/assets/slack-logo.svg'
import relumeIcon from '@/assets/relume-logo.svg'
import framerIcon from '@/assets/framer-logo.svg'
import githubIcon from '@/assets/github-logo.svg'
import Tagline from '@/components/Tagline'
import IntegrationColumn from '@/components/IntegrationColumn'

const integrations = [
  {
    name: 'Figma',
    icon: figmaIcon,
    description: 'Figma is a collaborative interface design tool.'
  },
  {
    name: 'Notion',
    icon: notionIcon,
    description: 'Notion is an all-in-one workspace for notes and docs.'
  },
  {
    name: 'Slack',
    icon: slackIcon,
    description: 'Slack is a powerful team communication platform.'
  },
  {
    name: 'Relume',
    icon: relumeIcon,
    description: 'Relume is a no-code website builder and design system.'
  },
  {
    name: 'Framer',
    icon: framerIcon,
    description: 'Framer is a professional website prototyping tool.'
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    description: 'GitHub is the leading platform for code collaboration.'
  }
]

export type IntegrationType = typeof integrations

export default function Integrations() {
  return (
    <section className='py-24 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='grid lg:grid-cols-2 lg:gap-16 items-center'>
          <div>
            <Tagline>Integrations</Tagline>
            <h2 className='text-6xl font-medium mt-6'>
              Plays well with <span className='text-lime-400'>others</span>
            </h2>

            <p className='text-lg text-white/50 mt-4'>
              Layers seamlessly integrates with your favorite tools, making it
              easy to incorporate into your existing workflow. Whether you’re
              designing, coding, or collaborating, Layers has you covered.
            </p>
          </div>

          <div className='h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] mt-8 lg:mt-0'>
            <IntegrationColumn integrations={integrations} />
            <IntegrationColumn
              integrations={integrations.slice().reverse()}
              className='hidden md:flex'
              reverse
            />
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import type { IntegrationType } from '@/sections/Integrations'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { motion } from 'motion/react'
import { Fragment } from 'react'

interface IntegrationColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  integrations: IntegrationType
  reverse?: boolean
}

export default function IntegrationColumn(props: IntegrationColumnProps) {
  const { className, integrations, reverse } = props

  return (
    <motion.div
      initial={{ y: reverse ? '-50%' : 0 }}
      animate={{ y: reverse ? 0 : '-50%' }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'linear'
      }}
      className={twMerge('flex flex-col pb-4 gap-4', className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className='bg-neutral-900 border border-white/10 rounded-3xl p-6'
            >
              <div className='flex justify-center'>
                <Image
                  src={integration.icon}
                  alt={`${integration.name} icon`}
                  className='size-24'
                />
              </div>
              <h3 className='text-3xl text-center mt-6'>{integration.name}</h3>
              <p className='text-white/60 text-center mt-2'>
                {integration.description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  )
}

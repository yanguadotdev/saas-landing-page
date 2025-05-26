'use client'

import { PlusIcon } from '@/components/Icons'
import Tagline from '@/components/Tagline'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const faqs = [
  {
    question: 'How is Layers different from other design tools?',
    answer:
      'Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.'
  },
  {
    question: 'Is there a learning curve?',
    answer:
      'Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.'
  },
  {
    question: 'How do you handle version control?',
    answer:
      'Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.'
  },
  {
    question: 'Can I work offline?',
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere."
  },
  {
    question: 'How does Layers handle collaboration?',
    answer:
      'Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.'
  }
]

export default function Faqs() {
  const [selectIndex, setSelectedIndex] = useState(0)
  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <Tagline>FAQs</Tagline>
        </div>
        <h2 className='text-6xl font-medium mt-6 text-center max-w-xl mx-auto'>
          Questions? We&apos;ve got{' '}
          <span className='text-lime-400'>answers</span>.
        </h2>

        <div className='mt-12 flex flex-col gap-4 max-w-2xl mx-auto'>
          {faqs.map((faq, faqIndex) => (
            <div
              key={faqIndex}
              className='bg-neutral-900 rounded-2xl border border-white/10'
            >
              <div
                className='flex items-center justify-between cursor-pointer p-8'
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className='text-xl font-medium'>{faq.question}</h3>
                <PlusIcon
                  className={twMerge(
                    'text-lime-400 flex-shrink-0 transition duration-300',
                    selectIndex === faqIndex && 'rotate-45'
                  )}
                />
              </div>

              <AnimatePresence>
                {selectIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginBottom: 0
                    }}
                    animate={{
                      height: 'auto',
                      marginBottom: 32
                    }}
                    exit={{
                      height: 0,
                      marginBottom: 0
                    }}
                    className={twMerge('overflow-clip px-8 mb-8')}
                  >
                    <p className='text-white/60'>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

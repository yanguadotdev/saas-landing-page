import { PlusIcon } from '@/components/Icons'
import Tagline from '@/components/Tagline'
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
  const selectIndex = 0
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
              className='bg-neutral-900 rounded-2xl border border-white/10 p-8'
            >
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-medium'>{faq.question}</h3>
                <PlusIcon className={twMerge('text-lime-400 flex-shrink-0', selectIndex === faqIndex && 'rotate-45')} />
              </div>

              <div
                className={twMerge(
                  'mt-6',
                  selectIndex !== faqIndex && 'hidden'
                )}
              >
                <p className='text-white/60'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

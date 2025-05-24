import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Tagline(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...rest } = props

  return (
    <div
      className={twMerge(
        'inline-flex border border-lime-400 rounded-full gap-1 uppercase items-center font-medium text-lime-400 px-3 py-1 pr-4 ',
        className
      )}
      {...rest}
    >
      <span>&#10038;</span>
      <span className='text-sm'>{children}</span>
    </div>
  )
}

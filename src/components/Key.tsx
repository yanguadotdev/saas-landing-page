import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...rest } = props
  return (
    <div
      className={twMerge(
        'size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-neutral-950 font-semibold border-b-4 border-b-neutral-500 transition-all duration-500',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

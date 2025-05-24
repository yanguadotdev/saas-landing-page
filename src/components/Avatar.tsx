import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...rest } = props
  return (
    <div
      className={twMerge(
        'size-20 rounded-full border-4 border-blue-500 overflow-hidden p-1 bg-neutral-900',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

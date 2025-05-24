import { MousePointerIcon } from './Icons'
import { twMerge } from 'tailwind-merge'

interface MousePointerProps {
  name: string
  color?: 'blue' | 'red'
}

export default function MousePointer(props: MousePointerProps) {
  const { name, color } = props
  return (
    <div className='relative'>
      <MousePointerIcon className='text-white' />
      <div className='absolute top-full left-full'>
        <div
          className={twMerge(
            'inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none',
            color === 'red' && 'bg-red-500'
          )}
        >
          {name}
        </div>
      </div>
    </div>
  )
}

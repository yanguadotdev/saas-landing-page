import { twMerge } from 'tailwind-merge'

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  isOpen: boolean
}

export function MenuIcon(props: MenuIconProps) {
  const { className, isOpen, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      {...rest}
    >
      <line
        x1='3'
        y1='6'
        x2='21'
        y2='6'
        className={twMerge(
          'origin-left transition duration-300',
          isOpen && 'rotate-45 -translate-y-1'
        )}
      ></line>
      <line
        x1='3'
        y1='12'
        x2='21'
        y2='12'
        className={twMerge('transition duration-300', isOpen && 'opacity-0')}
      ></line>
      <line
        x1='3'
        y1='18'
        x2='21'
        y2='18'
        className={twMerge(
          'origin-left transition duration-300',
          isOpen && '-rotate-45 translate-y-1'
        )}
      ></line>
    </svg>
  )
}

export function MousePointerIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <path d='M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z'></path>
      <path d='M13 13l6 6'></path>
    </svg>
  )
}

export function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
    >
      <line x1='12' y1='5' x2='12' y2='19'></line>
      <line x1='5' y1='12' x2='19' y2='12'></line>
    </svg>
  )
}

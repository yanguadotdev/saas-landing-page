export function Menu({ className }: { className?: string }) {
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
      <line x1='3' y1='12' x2='21' y2='12'></line>
      <line x1='3' y1='6' x2='21' y2='6'></line>
      <line x1='3' y1='18' x2='21' y2='18'></line>
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

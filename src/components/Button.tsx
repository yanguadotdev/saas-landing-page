import { cva } from 'class-variance-authority'

const classes = cva(
  'border h-12 rounded-full px-6 font-medium cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-lime-400 text-neutral-950 border-lime-400',
        secondary: 'border-white text-white bg-transparent'
      },
      size: {
        sm: 'h-8'
      }
    }
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  size?: 'sm'
}

export default function Button(props: ButtonProps) {
  const { variant, className, size, ...rest } = props
  return (
    <button
      className={classes({
        variant,
        size,
        className
      })}
      {...rest}
    />
  )
}

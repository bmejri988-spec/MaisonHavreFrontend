import { ArrowUpRight } from 'lucide-react'

function Button({
  children,
  variant = 'primary',
  showIcon = true,
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm font-medium transition-all duration-300'

  const variants = {
    primary:
      'bg-[#1D2923] text-white hover:bg-[#2D3C34]',
    secondary:
      'bg-[#EFEBE2] text-[#1D2923] hover:bg-[#DDD8CD]',
    outline:
      'border border-[#DDD8CD] text-[#202420] hover:bg-[#EFEBE2]',
  }

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}

      {showIcon && (
        <ArrowUpRight
          size={17}
          strokeWidth={1.7}
        />
      )}
    </button>
  )
}

export default Button
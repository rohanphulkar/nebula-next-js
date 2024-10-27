import Link from 'next/link'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'lg',
      innerClassName,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const buttonSize = {
      sm: 'px-3.5 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-3.5 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-[15px]',
    }[size]

    const buttonVariant = {
      primary:
        "relative shadow-btn-primary text-violet-50 bg-btn-primary after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:bg-btn-primary-hover after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 after:shadow-btn-primary-hover after:rounded-lg",
      secondary:
        "relative shadow-btn-secondary bg-zinc-950/[.01] text-violet-50 duration-200 ease-in-out hover:bg-violet-900/[0.03] hover:text-white after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-200 hover:after:opacity-100 after:shadow-btn-secondary-hover after:rounded-lg",
      tertiary: 'text-violet-50 hover:text-white',
    }[variant]

    return (
      <>
        {props.href ? (
          <Link
            href={props.href}
            ref={ref}
            className={cn(
              'group inline-flex items-center rounded-lg font-semibold antialiased outline-none',
              buttonVariant,
              buttonSize,
              className
            )}
            {...props}
          >
            <div
              className={cn(
                'relative z-10 flex w-full items-center justify-center space-x-2 text-nowrap',
                innerClassName
              )}
            >
              {children}
            </div>
          </Link>
        ) : (
          <button
            ref={ref}
            className={cn(
              'inline-block rounded-lg font-semibold transition duration-200 ease-in-out',
              buttonVariant,
              buttonSize,
              className
            )}
            {...props}
          >
            <div
              className={cn(
                'relative z-10 flex w-full items-center justify-center space-x-2 text-nowrap',
                innerClassName
              )}
            >
              {children}
            </div>
          </button>
        )}
      </>
    )
  }
)

Button.displayName = 'Button'

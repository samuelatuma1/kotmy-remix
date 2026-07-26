import React from 'react'
import cn from 'classnames'

export default function Button<El extends keyof JSX.IntrinsicElements>({
    children,
    element,
    className,
    variant = 'solid',
    kind = 'primary',
    ...props
}: {
    element: El;
    variant?: 'solid' | 'outline',
    kind?: 'primary' | 'danger'
} & React.ComponentProps<El>) {
    const Comp = element as string;
    return (
        <Comp {...props} className={cn(`py-4 px-8 text-lg border border-brand-pink rounded-md font-black whitespace-nowrap leading-4 text-center ${className}`, {
            'bg-brand-pink text-white hover:bg-brand-pink/90': variant === 'solid',
            'text-brand-pink border-2': variant === 'outline',
            'border-red-400': kind === 'danger',
            'text-red-400': kind === 'danger',
        })}>
            {children}
        </Comp>
    )
}

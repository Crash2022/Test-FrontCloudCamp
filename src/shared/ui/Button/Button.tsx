import { type ButtonHTMLAttributes, memo, type PropsWithChildren } from 'react'
import s from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    divClassName?: string
    className?: string
    theme?: 'primary' | 'outline'
}

export const Button = memo((props: PropsWithChildren<ButtonProps>) => {
    const { theme = 'primary', className, divClassName, children, ...restProps } = props

    return (
        <div className={divClassName}>
            <button className={clsx(s.button, [className, s[theme]])} {...restProps}>
                {children}
            </button>
        </div>
    )
})

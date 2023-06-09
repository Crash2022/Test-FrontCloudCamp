import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react'
import s from './Checkbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>

type CheckboxPropsType = DefaultInputPropsType & {
    id?: string
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

export const Checkbox: React.FC<CheckboxPropsType> = ({
    id,
    type,
    onChange,
    onChangeChecked,
    className,
    spanClassName,
    children,

    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    return (
        <label className={s.container}>
            {children}
            <input
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                {...restProps}
            />
            <span className={s.checkmark}></span>
        </label>
    )
}

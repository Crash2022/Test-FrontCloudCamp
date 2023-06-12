import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type InputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: any
    helperText?: string
    divClassName?: string
    spanClassName?: string
    placeholderTitle?: string
}

// @ts-ignore
export const Input: React.FC<InputTextPropsType> = React.forwardRef((
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        helperText,
        divClassName,
        spanClassName,
        className,
        placeholderTitle,
        ...restProps
    }, forwardRef
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalInputDivWrapperClassName = `${divClassName ? divClassName : s.inputWrapper}`
    const finalInputClassName = `${error ? s.errorInput : ''} ${className ? className : s.customInput}`
    const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`

    return (
        <div className={finalInputDivWrapperClassName}>

            {
                placeholderTitle && <div className={s.placeholder_title}>{placeholderTitle}</div>
            }

            <input
                type={'text'}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />

            {
                error ?
                    <div className={s.errorWrapper}>
                        {error && <span className={finalSpanClassName}>{error}</span>}
                    </div>
                    : ''
            }

            {
                helperText ?
                    <div className={s.errorHelperText}>
                        {helperText && helperText}
                    </div>
                    : ''
            }
        </div>
    )
})
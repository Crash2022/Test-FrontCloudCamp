import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes,
    KeyboardEvent, ReactNode} from 'react'
import s from './Input.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    helperText?: string
    divClassName?: string
    spanClassName?: string
    color?: 'black'
}

// @ts-ignore
export const Input: React.FC<SuperInputTextPropsType> = React.forwardRef((
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        helperText, // error для Controlled InputUI (React Hook Forms)
        className,
        divClassName,
        spanClassName,
        color,
        id,

        ...restProps // все остальные пропсы попадут в объект restProps
    }, forwardRef
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter
        && e.key === 'Enter'
        && onEnter()
    }

    // чтобы изменить инпут на чёрный цвет, необходимо передать className={customInputBlack}
    // чтобы изменить стандартный див инпута, необходимо передать divClassName={your_className}
    const finalInputDivWrapperClassName = `${divClassName ? divClassName : s.inputWrapper}`

    const finalInputClassName = `${error ? s.errorInput : ''} 
        ${className ? className : s.customInput}
        ${color === 'black' ? s.customInputBlack : ''}`

    const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`

    return (
        <div className={finalInputDivWrapperClassName}>
            <input
                id={id}
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
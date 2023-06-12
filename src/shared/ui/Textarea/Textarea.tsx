import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, ReactNode} from 'react'
import s from './Textarea.module.scss'

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>

type CustomTextareaPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    placeholderTitle?: string
    helperText?: string
    divClassName?: string
    spanClassName?: string
    textLength?: number
    textMaxLength?: string
}

export const Textarea: React.FC<CustomTextareaPropsType> = ({
    onChangeText,
    onKeyPress,
    onEnter,
    error,
    placeholderTitle,
    helperText, // error для Controlled InputUI (React Hook Forms)
    className,
    divClassName,
    textLength,
    textMaxLength,
    ...restProps // все остальные пропсы попадут в объект restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress && onKeyPress(e)
        onEnter && e.key === 'Enter' && onEnter()
    }

    const finalTextareaClassName = `${error ? s.errorTextarea : ''} ${className ? className : s.textareaClassName}`
    const finalTextareaDivWrapperClassName = `${divClassName || s.textarea_wrapper}`

    return (
        <div className={finalTextareaDivWrapperClassName}>
            <div className={s.placeholder}>{placeholderTitle}</div>
            <textarea className={finalTextareaClassName}
                      onChange={onChangeCallback}
                      onKeyPress={onKeyPressCallback}
                      {...restProps}
            />
            <div className={s.infoSpan}>
                <div className={s.errorMessage}>{error && error}</div>
                {
                    textLength! >= 0 && textMaxLength ?
                        <div className={s.textarea_length}>{textLength} / {textMaxLength}</div>
                        : ''
                }
            </div>
        </div>
    )
}

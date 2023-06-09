import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {
    id?: string
    name?: string
    placeholder: string
    placeholderTitle?: string
    options?: any[]
    onChangeOption?: (option: any) => void
    error?: any
    spanClassName?: string
}

export const Select: React.FC<SelectPropsType> = (
    {
        id,
        name,
        placeholder,
        placeholderTitle,
        options,
        onChange,
        onChangeOption,
        error,
        spanClassName,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, index) => {
        return (
            <option key={index} className={s.option_item}>{el}</option>
        )
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`

    return (
        <div className={s.select_wrapper}>
            {
                placeholderTitle ? <div className={s.placeholder_title}>{placeholderTitle}</div> : ''
            }
            <div className={s.select}>
                <select name={name} id={id} onChange={onChangeCallback} {...restProps}>
                    <option>{placeholder}</option>
                    {mappedOptions}
                </select>
            </div>
            {
                error ?
                    <div className={s.errorWrapper}>
                        {error && <span className={finalSpanClassName}>{error}</span>}
                    </div>
                    : ''
            }
        </div>
    )
}
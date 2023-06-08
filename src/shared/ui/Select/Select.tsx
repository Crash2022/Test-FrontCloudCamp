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
}

export const Select: React.FC<SelectPropsType> = (
    {
        id,
        name,
        placeholder,
        placeholderTitle,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, index) => {
        return (
            <option key={index}>{el}</option>
        )
    }) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        // #0
        // <select onChange={onChangeCallback} {...restProps}>
        //     {mappedOptions}
        // </select>
        <div>
            {
                placeholderTitle ? <div className={s.placeholder_title}>{placeholderTitle}</div> : ''
            }
            <div className={s.select}>
                <select name={name} id={id}>
                    <option selected disabled>{placeholder}</option>
                    <option value="pdf" className={s.option_item}>PDF</option>
                    <option value="txt" className={s.option_item}>txt</option>
                </select>
            </div>
        </div>
    )
}
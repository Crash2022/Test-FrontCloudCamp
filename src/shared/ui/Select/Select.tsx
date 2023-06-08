import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {
    id?: string
    name?: string
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Select: React.FC<SelectPropsType> = (
    {
        id,
        name,
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

        <div className={s.select}>
            <select name={name} id={id}>
                <option selected disabled>Choose a book format</option>
                <option value="pdf">PDF</option>
                <option value="txt">txt</option>
                <option value="epub">ePub</option>
                <option value="fb2">fb2</option>
                <option value="mobi">mobi</option>
            </select>
        </div>
    )
}
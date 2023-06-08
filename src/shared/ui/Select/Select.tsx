import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Select: React.FC<SelectPropsType> = (
    {
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
        // <select onChange={onChangeCallback} {...restProps}>
        //     {mappedOptions}
        // </select>

        <div className={s.select_wrapper}>
            <ul className={s.select}>
                <li>
                    <input className={s.select_close} type="radio" name="awesomeness" id="awesomeness-close" value=""/>
                    <span className={`${s.select_label} ${s.select_label_placeholder}`}>Awesomeness Level</span>
                </li>

                <li className={s.select_items}>
                    <input className={s.select_expand} type="radio" name="awesomeness" id="awesomeness-opener"/>
                    <label className={s.select_closeLabel} htmlFor="awesomeness-close"></label>

                    <ul className={s.select_options}>
                        <li className={s.select_option}>
                            <input className={s.select_input} type="radio" name="awesomeness" id="awesomeness-ridiculous"/>
                            <label className={s.select_label} htmlFor="awesomeness-ridiculous">ridiculous</label>
                        </li>
                        <li className={s.select_option}>
                            <input className={s.select_input} type="radio" name="awesomeness" id="awesomeness-lacking"/>
                            <label className={s.select_label} htmlFor="awesomeness-ridiculous">lacking</label>
                        </li>

                        {/*<li className="select_option">*/}
                        {/*    <input className="select_input" type="radio" name="awesomeness" id="awesomeness-lacking"/>*/}
                        {/*    <label className="select_label" htmlFor="awesomeness-lacking">lacking</label>*/}
                        {/*</li>*/}

                        {/*<li className="select_option">*/}
                        {/*    <input className="select_input" type="radio" name="awesomeness" id="awesomeness-awesomeless"/>*/}
                        {/*    <label className="select_label" htmlFor="awesomeness-awesomeless">awesomeless</label>*/}
                        {/*</li>*/}
                    </ul>

                    <label className={s.select_expandLabel} htmlFor="awesomeness-opener"></label>
                </li>
            </ul>
        </div>
    )
}
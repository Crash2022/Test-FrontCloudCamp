import React, {useRef} from 'react'
import s from "../Input/Input.module.scss"
import {IMaskInput} from "react-imask"
import {Controller} from "react-hook-form"

type ControlledIMaskInputProps = {
    control: any
    error: any
    placeholderTitle?: string
    spanClassName?: string
}

export const ControlledIMaskInput = ({control, error, placeholderTitle, spanClassName}: ControlledIMaskInputProps) => {

    const ref = useRef(null)
    const inputRef = useRef(null)

    const finalSpanClassName = `${error ? s.error : ''} ${spanClassName ? spanClassName : ''}`

    return (
        <>
            <Controller
                name={'phone'}
                control={control}
                render={({field}: any) => (
                    <div className={s.inputWrapper}>
                        {
                            placeholderTitle &&
                                <div className={s.placeholder_title}>
                                    {placeholderTitle}
                                </div>
                        }

                        <IMaskInput
                            {...field}
                            ref={ref}
                            inputRef={inputRef}
                            id={'main-form-phone'}
                            placeholder={'+7 (___) ___-__-__'}
                            value={field.value}
                            onAccept={(value) => {
                                field.onChange(value)
                            }}
                            // onChange={(value) => {
                            //     field.onChange(value)
                            //     // console.log(value)
                            // }}
                            mask={'+{7}(000)000-00-00'}
                            // unmask={true} // true|false|'typed'
                            error={error}
                            className={s.customInput}
                        />

                        {
                            error ?
                                <div className={s.errorWrapper}>
                                    {error && <span className={finalSpanClassName}>{error}</span>}
                                </div>
                                : ''
                        }
                    </div>
                )}
            />
        </>
    )
}
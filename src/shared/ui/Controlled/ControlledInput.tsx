import React from 'react'
import {Controller} from 'react-hook-form'
import {Input} from '../Input/Input'

interface ControlledInputProps {
    name: string
    placeholder?: string
    placeholderTitle?: string
    control: any
    rules?: any
    id?: string
    type?: string
    error?: any
    disabled?: boolean
    divClassName?: any
}

export const ControlledInput = ({ name, placeholder, placeholderTitle, control, rules, id, type,
                                    error, disabled, divClassName }: ControlledInputProps) => {

    return (
        <div className={divClassName}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({field}: any) => (
                    <Input
                        {...field}
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        placeholderTitle={placeholderTitle}
                        value={field.value}
                        onChange={(value) => {
                            field.onChange(value)
                        }}
                        error={error}
                        disabled={disabled ?? false}
                    />
                )}
            />
        </div>
    )
}
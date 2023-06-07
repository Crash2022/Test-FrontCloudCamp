import React from 'react'
import {Controller, UseFormReturn} from 'react-hook-form'
import {RegisterOptions} from 'react-hook-form/dist/types/validator'
import {Input} from '../Input/Input'

interface ControlledInputProps {
    name: string
    placeholder: string
    password?: boolean
    control: UseFormReturn<any, any, any>
    rules?: Omit<
        RegisterOptions<any, any>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
    error?: any
    disabled?: boolean
    divClassName?: any
    type?: string
}

export const ControlledInput = ({ name, placeholder, password, control, rules, error,
                                    disabled, divClassName, type }: ControlledInputProps) => {

    return (
        <div className={divClassName}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({field}: any) => (
                    <Input
                        {...field}
                        password={password ?? false}
                        placeholder={placeholder}
                        value={field.value}
                        onChange={(value) => {
                            field.onChange(value)
                        }}
                        error={error}
                        disabled={disabled ?? false}
                        type={type}
                    />
                )}
            />
        </div>
    )
}
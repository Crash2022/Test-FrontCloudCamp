import React from 'react'
import {Controller, UseFormReturn} from 'react-hook-form'
import {RegisterOptions} from 'react-hook-form/dist/types/validator'
import {Input} from '../Input/Input'

interface ControlledInputProps {
    name: string
    placeholder: string
    control: UseFormReturn<any>
    rules?: Omit<
        RegisterOptions<any, any>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
    type?: string
    error?: any
    disabled?: boolean
    divClassName?: any
}

export const ControlledInput = ({ name, placeholder, control, rules, error,
                                    disabled, divClassName, type }: ControlledInputProps) => {

    return (
        <div className={divClassName}>
            <Controller
                name={name}
                control={control.control}
                rules={rules}
                render={({field}: any) => (
                    <Input
                        {...field}
                        type={type}
                        placeholder={placeholder}
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
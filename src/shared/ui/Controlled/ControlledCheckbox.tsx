import React from 'react'
import {Controller} from "react-hook-form"
import {Checkbox} from '../Checkbox/Checkbox'

interface ControlledCheckboxProps {
    id?: string
    name: string
    label: string
    control: any
    rules?: any
    divClassName?: any
}

export const ControlledCheckbox = ({id, name, label, control, rules, divClassName}: ControlledCheckboxProps) => {

    return (
        <div className={divClassName}>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <Checkbox
                        id={id}
                        checked={field.value}
                        onChangeChecked={(value: boolean) => {
                            field.onChange(value)
                        }}
                    >
                        {label}
                    </Checkbox>
                )}/>
        </div>
    );
};
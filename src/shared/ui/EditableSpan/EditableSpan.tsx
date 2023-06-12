import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from '../Input/Input.module.scss'
import {Input} from '../Input/Input'

type EditableSpanPropsType = {
    title: string
    onChangeInput: (newInputValue: string) => void
    inputDivClassName?: any
    spanClassName?: any
}

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo(({
                                                                             title,
                                                                             onChangeInput,
                                                                             inputDivClassName,
                                                                             spanClassName
                                                                         }) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputTitle, setInputTitle] = useState<string>('')

    const onClickEditSpanHandler = () => {
        setEditMode(true)
        setInputTitle(title)
    }

    const onClickNotEditSpanHandler = () => {
        onChangeInput(inputTitle)
        setEditMode(false)
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.currentTarget.value)
    }

    const enterChangeTitle = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? onClickNotEditSpanHandler() : ''
    }

    return (
        editMode
            ?
            <div className={inputDivClassName ? inputDivClassName : ''} style={{height: '44px'}}>
                <Input
                    placeholder={'Введите текст'}
                    value={inputTitle}
                    onChange={onChangeInputHandler}
                    onBlur={onClickNotEditSpanHandler}
                    onKeyDown={enterChangeTitle}
                    // error={error}
                    autoFocus
                />
            </div>
            : <div className={spanClassName ? spanClassName : s.customInput}
                   onClick={onClickEditSpanHandler}>
                {title}
        </div>
    )
})
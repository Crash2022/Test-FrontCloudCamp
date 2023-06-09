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

    // const MESSAGE_INPUT_VALUE_LENGTH = 'Text length must be 1-100 symbols';

    const [editMode, setEditMode] = useState<boolean>(false)
    const [inputTitle, setInputTitle] = useState<string>('')
    // const [error, setError] = useState<string | null>(null)

    const onClickEditSpanHandler = () => {
        setEditMode(true)
        setInputTitle(title)
    }

    const onClickNotEditSpanHandler = () => {
        if (inputTitle.length > 0 && inputTitle.length < 50) {
            onChangeInput(inputTitle)
            setEditMode(false)
        } else {
            // setError(`${MESSAGE_INPUT_VALUE_LENGTH}`)
            // setLabel(`${MESSAGE_INPUT_VALUE_LENGTH}`)
        }
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(event.currentTarget.value)
    }

    const enterChangeTitle = (event: KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? onClickNotEditSpanHandler() : ''
    }

    // useEffect(() => {
        // if (inputTitle.length < 1 && inputTitle.length > 50) {
        // setError(`${MESSAGE_INPUT_VALUE_LENGTH}`)
        // setLabel(`${MESSAGE_INPUT_VALUE_LENGTH}`)
        // }
    // }, [])

    return (
        editMode
            ?
            <div className={inputDivClassName ? inputDivClassName : ''} style={{height: '44px'}}>
                <Input
                    // id={id}
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
                   onDoubleClick={onClickEditSpanHandler}>
                {title}
        </div>
    )
})
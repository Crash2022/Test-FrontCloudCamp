import React, {useEffect, useState} from 'react'
import s from './FormPageStepThree.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {FormPageStepsProps} from '../../../shared/types/all-types'
import {Textarea} from '../../../shared/ui/Textarea/Textarea'
import {validationTitles} from '../../../shared/const/validationTitles'
import {MessageModal} from '../../MessageModal/MessageModal';

export const FormPageStepThree = ({setStep}: FormPageStepsProps) => {

    const [description, setDescription] = useState<string>('')
    const [descriptionError, setDescriptionError] = useState<string>('')
    const [openMessageModal, setOpenMessageModal] = useState<boolean>(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const trimValue = description.trim()

        if (trimValue && trimValue.length <= 200) {
            // alert('submit')
            setOpenMessageModal(true)
        } else {
            setDescriptionError(validationTitles.aboutMin)
        }
    }

    const isSuccess = true

    useEffect(() => {
        if (description.length > 200) {
            setDescriptionError(validationTitles.aboutMax)
        } else {
            setDescriptionError('')
        }
    }, [description])

    return (
        <form className={s.formPage_form} onSubmit={handleSubmit}>

            <MessageModal open={openMessageModal} setOpen={setOpenMessageModal} isSuccess={isSuccess}/>

            <div className={s.about_textarea}>
                <Textarea
                    placeholder={'Введите текст'}
                    placeholderTitle={'Обо мне'}
                    value={description}
                    onChange={(e) => {
                        setDescription(e.currentTarget.value)
                    }}
                    error={descriptionError}
                />
                <div className={s.textarea_length}>{description.length} / 200</div>
            </div>
            <div className={s.buttonsBlock}>
                <Button
                    id={'button-back3'}
                    theme={'outline'}
                    onClick={() => {
                        setStep('two')
                    }}
                >
                    Назад
                </Button>
                <Button
                    id={'button-next3'}
                    theme={'primary'}
                    type={'submit'}
                >
                    Далее
                </Button>
            </div>
        </form>
    )
}
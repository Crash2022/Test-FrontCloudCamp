import React, {useEffect, useState} from 'react'
import s from './FormPageStepThree.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {FormPageStepsProps} from '../../../shared/types/all-types'
import {Textarea} from '../../../shared/ui/Textarea/Textarea'
import {validationTitles} from '../../../shared/const/validationTitles'
import {MessageModal} from '../../MessageModal/MessageModal'

export const FormPageStepThree = ({setStep}: FormPageStepsProps) => {

    const [about, setAbout] = useState<string>('')
    const [aboutError, setAboutError] = useState<string>('')
    const [openMessageModal, setOpenMessageModal] = useState<boolean>(false)

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const trimValue = about.trim()

        if (trimValue && trimValue.length <= 200) {
            localStorage.setItem('about', about)
            setOpenMessageModal(true)
        } else {
            setAboutError(validationTitles.aboutMin)
        }
    }

    const isSuccess = true
    const isError = false

    useEffect(() => {
        if (about.length > 200) {
            setAboutError(validationTitles.aboutMax)
        } else {
            setAboutError('')
        }
    }, [about])

    useEffect(() => {
        const LS_About = localStorage.getItem('about')
        if (LS_About) setAbout(LS_About)
    }, [])

    return (
        <form className={s.formPage_form} onSubmit={handleSubmit}>

            <MessageModal open={openMessageModal}
                          setOpen={setOpenMessageModal}
                          isSuccess={isSuccess}
                          isError={isError}
            />

            <div className={s.about_textarea}>
                <Textarea
                    placeholder={'Введите текст'}
                    placeholderTitle={'Обо мне'}
                    value={about}
                    onChange={(e) => {
                        setAbout(e.currentTarget.value)
                    }}
                    error={aboutError}
                    textLength={about.length}
                    textMaxLength={'200'}
                />
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
import React, {useEffect, useState} from 'react'
import s from './FormPageStepThree.module.scss'
import {Button} from '../../../shared/ui/Button/Button'
import {FormPageStepsProps} from '../../../shared/types/all-types'
import {Textarea} from '../../../shared/ui/Textarea/Textarea'
import {validationTitles} from '../../../shared/const/validationTitles'
import {MessageModal} from '../../MessageModal/MessageModal'
import {useSetFormDataMutation} from "../../../services/FormPageService"
import {LoaderScreen} from "../../../shared/ui/Loader/LoaderScreen"

export const FormPageStepThree = ({setStep}: FormPageStepsProps) => {

    const [about, setAbout] = useState<string>('')
    const [aboutError, setAboutError] = useState<string>('')
    const [openMessageModal, setOpenMessageModal] = useState<boolean>(false)

    const [setFormData, { isError, isSuccess, isLoading }] = useSetFormDataMutation()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const trimValue = about.trim()

        if (trimValue && trimValue.length <= 200) {
            localStorage.setItem('about', about)

            try {
                const response = await setFormData({
                    phone: localStorage.getItem('phone'),
                    email: localStorage.getItem('email'),
                    nickname: localStorage.getItem('nickname'),
                    name: localStorage.getItem('name'),
                    surname: localStorage.getItem('surname'),
                    sex: localStorage.getItem('sex'),
                    about: localStorage.getItem('about')
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }

            setOpenMessageModal(true)
        } else {
            setAboutError(validationTitles.aboutMin)
        }
    }

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

    if (isLoading) return <LoaderScreen variant={'circle'} />

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
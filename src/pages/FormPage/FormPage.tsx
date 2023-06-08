import React, {ReactElement, useState} from 'react'
import s from './FormPage.module.scss'
import {useNavigate} from "react-router-dom"
import {FormPageStepOne} from "../../components/FormPageSteps/FormPageStepOne/FormPageStepOne"
import {FormPageStepTwo} from "../../components/FormPageSteps/FormPageStepTwo/FormPageStepTwo"
import {FormPageStepThree} from "../../components/FormPageSteps/FormPageStepThree/FormPageStepThree"
import {StepsType} from "../../shared/types/all-types"

// type FormWrapperProps = {
//     children?: ReactElement
//     formClassName?: any
// }

export const FormPage = () => {

    const [step, setStep] = useState<StepsType>('one')

    const navigate = useNavigate()

    return (
        <div className={s.formPage_mainBox}>
            <div className={s.container}>
                <div className={s.formPage_card}>
                    <div className={s.formPage_steps}>
                        1-2-3
                    </div>

                    {/*<form className={s.formPage_form}>*/}

                        {/*{children}*/}

                        {
                            step === 'one' ? <FormPageStepOne setStep={setStep}/> : ''
                        }
                        {
                            step === 'two' ? <FormPageStepTwo/> : ''
                        }
                        {
                            step === 'three' ? <FormPageStepThree/> : ''
                        }

                        {/*<div className={s.buttonsBlock}>*/}
                        {/*    <Button*/}
                        {/*        id={'button-back'}*/}
                        {/*        theme={'outline'}*/}
                        {/*        onClick={() => {*/}
                        {/*            navigate(RoutePaths.MAIN)*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Назад*/}
                        {/*    </Button>*/}
                        {/*    <Button*/}
                        {/*        id={'button-next'}*/}
                        {/*        theme={'primary'}*/}
                        {/*        type={'submit'}*/}
                        {/*    >*/}
                        {/*        Далее*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    {/*</form>*/}

                    {/*<form className={s.formPage_form} onSubmit={handleSubmit(onSubmit)}>*/}
                    {/*    <ControlledInput divClassName={s.form_nickname}*/}
                    {/*                     id={'field-nickname'}*/}
                    {/*                     name={'nickname'}*/}
                    {/*                     placeholderTitle={'Nickname'}*/}
                    {/*                     control={control}*/}
                    {/*                     error={errors.nickname?.message}*/}
                    {/*    />*/}
                    {/*    <ControlledInput divClassName={s.form_name}*/}
                    {/*                     id={'field-name'}*/}
                    {/*                     name={'name'}*/}
                    {/*                     placeholderTitle={'Name'}*/}
                    {/*                     control={control}*/}
                    {/*                     error={errors.name?.message}*/}
                    {/*    />*/}
                    {/*    <ControlledInput divClassName={s.form_sername}*/}
                    {/*                     id={'field-sername'}*/}
                    {/*                     name={'sername'}*/}
                    {/*                     placeholderTitle={'Sername'}*/}
                    {/*                     control={control}*/}
                    {/*                     error={errors.sername?.message}*/}
                    {/*    />*/}

                    {/*    <ControlledInput divClassName={s.form_sex}*/}
                    {/*                     id={'field-sex'}*/}
                    {/*                     name={'sex'}*/}
                    {/*                     placeholderTitle={'Sex'}*/}
                    {/*                     control={control}*/}
                    {/*                     error={errors.sex?.message}*/}
                    {/*    />*/}

                    {/*    <div className={s.buttonsBlock}>*/}
                    {/*        <Button*/}
                    {/*            id={'button-back'}*/}
                    {/*            theme={'outline'}*/}
                    {/*            onClick={() => {navigate(RoutePaths.MAIN)}}*/}
                    {/*        >*/}
                    {/*            Назад*/}
                    {/*        </Button>*/}
                    {/*        <Button*/}
                    {/*            id={'button-next'}*/}
                    {/*            theme={'primary'}*/}
                    {/*            type={'submit'}*/}
                    {/*        >*/}
                    {/*            Далее*/}
                    {/*        </Button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>
        </div>
    )
}
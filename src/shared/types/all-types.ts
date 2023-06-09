export type ContactsType = {
    id: number
    title: string
    link: string
}

export type FormPageStepsProps = {
    setStep: (value: StepsType) => void
}

export type StepsType = 'one' | 'two' | 'three'

export type MainPageFormType = {
    phone: string
    email: string
}

export type FormPageStepOneType = {
    nickname: string
    name: string
    surname: string
    sex: string
}
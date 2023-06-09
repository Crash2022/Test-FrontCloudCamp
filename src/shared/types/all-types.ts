export type ContactsType = {
    id: number
    title: string
    link: string
}

export type FormPageStepsProps = {
    setStep: (value: StepsType) => void
    setFormData?: any
    isError?: any
    isSuccess?: any
    isLoading?: any
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

export type FormPageStepThreeType = {
    about: string
}

export type RequestPayloadType = {
    phone: string | null
    email: string | null
    nickname: string | null
    name: string | null
    surname: string | null
    sex: string | null
    about: string | null
}

export type AdvantageType = {
    id: string
    title: string
}
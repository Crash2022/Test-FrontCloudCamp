export type ContactsType = {
    id: number
    title: string
    link: string
}

export type FormPageStepsProps = {
    setStep: (value: StepsType) => void
}

export type StepsType = 'one' | 'two' | 'three'
import IMask from "imask"

export const phoneMask = () => {
    const element = document.getElementById('main-form-phone')
    const maskOptions = {
        mask: '+{7}(000)000-00-00',
        lazy: false
    }
    // @ts-ignore
    const mask = new IMask(element, maskOptions)
}
export const generateAvatarName = (lastName: string, firstName: string) => {
    return (lastName[0] + firstName[0]).toUpperCase()
}
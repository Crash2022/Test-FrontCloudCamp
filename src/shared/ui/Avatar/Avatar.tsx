import React from 'react'
import s from './Avatar.module.scss'

type AvatarProps = {
    lastName: string
    firstName: string
}

export const Avatar: React.FC<AvatarProps> = ({lastName, firstName}) => {
    const generateAvatarName = (lastName: string, firstName: string) => {
        return (lastName[0] + firstName[0]).toUpperCase()
    }

    return (
        <div className={s.avatar}>
            {generateAvatarName(lastName, firstName)}
        </div>
    )
}
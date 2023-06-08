import React from 'react'
import s from './Avatar.module.scss'
import {generateAvatarName} from "../../utils/generateAvatarName"

type AvatarProps = {
    lastName: string
    firstName: string
}

export const Avatar: React.FC<AvatarProps> = ({lastName, firstName}) => {

    return (
        <div className={s.avatar}>
            {generateAvatarName(lastName, firstName)}
        </div>
    )
}
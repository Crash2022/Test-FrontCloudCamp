import React from 'react'
import s from "../../pages/Main/Main.module.scss"
import FolderIcon from "../../shared/assets/icons/folder-icon.svg"
import {ContactsType} from "../../shared/types/all-types"

type ContactItemProps = {
    contact: ContactsType
}

export const ContactItem = ({contact}: ContactItemProps) => {
    return (
        <div className={s.contactItem}>
            <div className={s.contactItem_icon}>
                <img src={FolderIcon} alt="folder-icon"/>
            </div>
            <div className={s.contactItem_link}>
                <a href={contact.link} target="_blank">{contact.title}</a>
            </div>
        </div>
    )
}
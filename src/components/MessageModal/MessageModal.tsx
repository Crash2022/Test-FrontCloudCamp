import React from 'react'
import s from './MessageModal.module.scss'
import {useNavigate} from 'react-router-dom'
import {ModalWindow} from '../../shared/ui/ModalWindow/ModalWindow'
import {Button} from '../../shared/ui/Button/Button'
import SuccessIcon from '../../shared/assets/icons/success-icon.svg'
import ErrorIcon from '../../shared/assets/icons/error-icon.svg'
import {RoutePaths} from '../../shared/api/paths';

interface MessageModalProps {
    open: boolean
    setOpen: (value: boolean) => void
    isSuccess?: boolean
    isError?: boolean
}

export const MessageModal = ({open, setOpen, isSuccess, isError}: MessageModalProps) => {

    const navigate = useNavigate()

    return (
        <ModalWindow
            open={open}
            onClose={() => {
                setOpen(false)
            }}
        >
            <div className={s.messageModal_mainBox}>

                {
                    isSuccess &&

                    <div className={s.messageModalSuccess}>
                        <div className={s.messageModalSuccess_header}>
                            Форма успешно отправлена
                        </div>
                        <div className={s.messageModalSuccess_image}>
                            <img src={SuccessIcon} alt={'success-icon'}/>
                        </div>
                        <div className={s.messageModalSuccess_button}>
                            <Button
                                id={'button-back4'}
                                theme={'primary'}
                                onClick={() => {
                                    navigate(RoutePaths.MAIN)
                                }}
                            >
                                На главную
                            </Button>
                        </div>
                    </div>

                }

                {/*<div className={s.messageModalSuccess_header}>*/}
                {/*    <div*/}
                {/*        className={s.header_cancel}*/}
                {/*        onClick={() => {*/}
                {/*            setOpen(false)*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        X*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </ModalWindow>
    )
}

import React from 'react'
import s from './MessageModal.module.scss'
import {useNavigate} from 'react-router-dom'
import {RoutePaths} from '../../shared/api/paths'
import {ModalWindow} from '../../shared/ui/ModalWindow/ModalWindow'
import {Button} from '../../shared/ui/Button/Button'
import SuccessIcon from '../../shared/assets/icons/success-icon.svg'
import ErrorIcon from '../../shared/assets/icons/error-icon.svg'
import CancelIcon from '../../shared/assets/icons/cancel-icon.svg'

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
                        <div>
                            <img src={SuccessIcon} alt={'success-icon'}/>
                        </div>
                        <div className={s.messageModalSuccess_button}>
                            <Button
                                id={'button-to-main'}
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

                {
                    isError &&

                    <div className={s.messageModalError}>
                        <div className={s.messageModalError_header}>
                            <div>
                                Ошибка
                            </div>
                            <div className={s.header_cancel}
                                 onClick={() => {setOpen(false)}}
                            >
                                <img src={CancelIcon} alt={'cancel-icon'}/>
                            </div>
                        </div>
                        <div>
                            <img src={ErrorIcon} alt={'error-icon'}/>
                        </div>
                        <Button
                            divClassName={s.messageModalError_button}
                            id={'button-close'}
                            theme={'primary'}
                            onClick={() => {
                                setOpen(false)
                            }}
                        >
                            Закрыть
                        </Button>
                    </div>

                }
            </div>
        </ModalWindow>
    )
}

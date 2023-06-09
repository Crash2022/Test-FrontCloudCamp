import React, {useCallback} from 'react'
import s from './AdvantageItem.module.scss'
import TrashIcon from '../../shared/assets/icons/trash-icon.svg'
import {EditableSpan} from '../../shared/ui/EditableSpan/EditableSpan'
import {useAppDispatch} from '../../shared/hooks/useAppDispatch'
import {updateAdvantageTitle, deleteAdvantage} from '../../store/advantagesSlice'
import {AdvantageType} from '../../shared/types/all-types'

type AdvantageItemProps = {
    advantage: AdvantageType
}

export const AdvantageItem = ({advantage}: AdvantageItemProps) => {

    const dispatch = useAppDispatch()

    const changeAdvantageTitleHandler = useCallback((newInputValue: string) => {
        // @ts-ignore
        dispatch(updateAdvantageTitle({id: advantage.id, title: newInputValue}))
    }, [dispatch, advantage.id])

    const deleteAdvantageHandler = useCallback(() => {
        // @ts-ignore
        dispatch(deleteAdvantage({id: advantage.id}))
    }, [dispatch, advantage.id])

    return (
        <div className={s.advantage_item}>
            <div className={s.editable_span}>
                <EditableSpan title={advantage.title}
                              onChangeInput={changeAdvantageTitleHandler}
                />
            </div>
            <div className={s.delete_image} onClick={deleteAdvantageHandler}>
                <img src={TrashIcon} alt={'trash-icon'}/>
            </div>
        </div>
    )
}
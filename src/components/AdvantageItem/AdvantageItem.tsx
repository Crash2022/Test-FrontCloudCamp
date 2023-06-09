import React, {useCallback} from 'react'
import s from './AdvantageItem.module.scss'
import TrashIcon from '../../shared/assets/icons/trash-icon.svg'
import {EditableSpan} from '../../shared/ui/EditableSpan/EditableSpan'

export const AdvantageItem = () => {

    // const changeTaskTitleHandler = useCallback((newInputValue: string) => {
    //     dispatch(updateTaskTC({
    //         todolistId: todolistId,
    //         taskId: task.id,
    //         domainModel: {title: newInputValue}
    //     }));
    // }, [todolistId, task.id])

    const changeTaskTitleHandler = useCallback((newInputValue: string) => {
        // alert('add')
    }, [])

    return (
        <div className={s.advantage_item}>
            <div className={s.editable_span}>
                <EditableSpan title={'advantage'}
                              onChangeInput={changeTaskTitleHandler}
                />
            </div>
            <div className={s.delete_image}>
                <img src={TrashIcon} alt={'trash-icon'}/>
            </div>
        </div>
    )
}
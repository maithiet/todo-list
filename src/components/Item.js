import React, {memo, useState} from 'react';
import {Button, Input} from 'antd'
import {CloseCircleFilled, EditFilled} from '@ant-design/icons';
import {findIndex} from 'lodash'

function Item({item, setListItem}) {
    const [value, setValue] = useState(item?.value)
    const [edit, setEdit] = useState(false)
    console.log(item)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onUpdateData = () => {

        setListItem(prev => {
            let idx = findIndex(prev, {id: item.id})
            prev[idx].value = value
            return [...prev]
        })
        setEdit(false)
    }
    const onDelete = () => {
        setListItem(prev => {
            let idx = findIndex(prev, {id: item.id})
            prev.splice(idx, 1)
            return [...prev]
        })
        setEdit(false)
    }

    if (!value)
        return null

    if (edit)
        return (
            <Input.Group compact className={"!mb-2"}>
                <Input
                    className={'!py-[7px] !px-[15px]'}
                    autoFocus={true}
                    style={{width: 'calc(100% - 59px)'}}
                    value={value}
                    placeholder="Edit"
                    onPressEnter={onUpdateData}
                    onBlur={onUpdateData}
                    onChange={(e) => onChange(e)}
                />
                <Button className={'!h-[38px] w-[60px]'}
                        onClick={onUpdateData}
                        type="primary">Edit</Button>
            </Input.Group>
        )
    return (
        <div className={"bg-[#1890ff] text-white mb-2 py-2 px-[15px] relative"}>
            {value}
            <Button onClick={() => setEdit(true)} className={"!absolute right-[45px] top-[4px]"} type="primary"
                    icon={<EditFilled/>}/>
            <Button
                onClick={onDelete}
                className={"!absolute right-[5px] top-[4px]"} type="primary"
                icon={<CloseCircleFilled/>}/>
        </div>
    );
}

export default memo(Item);
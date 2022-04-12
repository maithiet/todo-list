import React, {useState} from 'react';
import {Button, Input} from 'antd'
import {CloseCircleFilled, EditFilled} from '@ant-design/icons';
import {findIndex} from "lodash";

function Item({item, setListItems, listItems}) {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(item?.value)
    console.log(item);
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onUpdateData = () => {
        let index = findIndex(listItems, {id: item.id})
        let newArray = listItems.map((i, idx) => {
            return idx === index ? {value: value, id: i.id} : i;
        });
        setListItems(newArray);
        setEdit(false)
    }
    const onDelete = () => {
        let newArray = [...listItems]
        let index = findIndex(newArray, {id: item.id})
        newArray.splice(index, 1)
        setListItems(newArray);
        setEdit(false)
    }
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
                <Button className={'!h-[38px] w-[60px]'} onClick={onUpdateData} ke type="primary">Edit</Button>
            </Input.Group>
        )
    return (
        <div className={"bg-[#1890ff] text-white mb-2 py-2 px-[15px] relative"}>
            {value}
            <Button onClick={() => setEdit(true)} className={"!absolute right-[45px] top-[4px]"} type="primary"
                    icon={<EditFilled/>}/>
            <Button onClick={onDelete} className={"!absolute right-[5px] top-[4px]"} type="primary"
                    icon={<CloseCircleFilled/>}/>
        </div>
    );
}

export default Item;
import React, {useEffect, useState} from 'react';
import {Button, Input} from 'antd'
import {CloseCircleFilled, EditFilled} from '@ant-design/icons';

function Item({item, index, setListItems, listItems}) {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(null)
    useEffect(() => {
        if (!item || item.replace(/\s+/g, "") === "")
            return
        return setValue(item)
    }, [item])
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onEdit = () => {
        let newArray = listItems.map((i, idx) => {
            return idx == index ? value : i;
        });
        setListItems(newArray);
        setEdit(false)
    }
    const onDelete = () => {
        let newArray = [...listItems]
        newArray.splice(index, 1)
        setListItems(newArray);
        setEdit(false)
    }
    if (edit)
        return (
            <Input.Group compact className={"!mb-2"} key={index}>
                <Input
                    autoFocus={true}
                    style={{width: 'calc(100% - 60px)'}}
                    value={value}
                    placeholder="Edit"
                    onPressEnter={onEdit}
                    onBlur={onEdit}
                    onChange={(e) => onChange(e)}
                />
                <Button onClick={onEdit} ke type="primary">Edit</Button>
            </Input.Group>
        )
    return (
        <div key={index} className={"bg-[#1890ff] text-white mb-2 p-2 relative"}>
            {item}
            <Button onClick={() => setEdit(true)} className={"!absolute right-[45px] top-[4px]"} type="primary"
                    icon={<EditFilled/>}/>
            <Button onClick={onDelete} className={"!absolute right-[5px] top-[4px]"} type="primary"
                    icon={<CloseCircleFilled/>}/>
        </div>
    );
}

export default Item;
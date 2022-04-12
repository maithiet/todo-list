import React, {useState} from 'react';
import {Button, Input} from "antd";
import {v4 as uuidv4} from "uuid";

function AddItem({setListItems}) {
    const [value, setValue] = useState(null)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onAdd = () => {
        if (!value || value.replace(/\s+/g, "") === "")
            return
        const idItem = uuidv4()

        setListItems(prev => {

            return [...prev, {value: value.trim(), id: idItem}]
        })
        setValue('')
    }
    return (
        <Input.Group compact className={"!mb-2"}>
            <Input
                className={'!py-[7px] !px-[15px]'}
                autoFocus={true}
                style={{width: 'calc(100% - 60px)'}}
                value={value}
                placeholder="Add to do list"
                onPressEnter={onAdd}
                onChange={(e) => onChange(e)}
            />
            <Button className={'!h-[38px] w-[60px]'} onClick={onAdd} ke type="primary">Add</Button>
        </Input.Group>
    );
}

export default AddItem;
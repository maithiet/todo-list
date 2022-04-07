import React, {useState} from 'react';
import {Button, Input} from "antd";

function AddItem({listItems, setListItems}) {
    const [value, setValue] = useState(null)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onAdd = () => {
        if (!value || value.replace(/\s+/g, "") === "")
            return
        let newList = [...listItems]
        newList.push(value.trim())
        setListItems(newList)
        setValue('')
    }
    return (
        <Input.Group compact className={"!mb-2"}>
            <Input
                autoFocus={true}
                style={{width: 'calc(100% - 60px)'}}
                value={value}
                placeholder="Add to do list"
                onPressEnter={onAdd}
                onChange={(e) => onChange(e)}
            />
            <Button onClick={onAdd} ke type="primary">Add</Button>
        </Input.Group>
    );
}

export default AddItem;
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import Item from "./Item";
import AddItem from "./AddItem";

function TodoList(props) {
    const [listItems, setListItems] = useState([])
    return (
        <div className={"w-[500px] bg-[#fff] mx-auto rounded-md p-5"}>
            <h2 className={"text-center text-[24px]"}>To do list</h2>
            <AddItem listItems={listItems} setListItems={setListItems}/>
            <div className={'flex flex-col '}>
                {
                    listItems.length > 0 && listItems.map((item, index) =>
                        <Item key={item.id} setListItems={setListItems} listItems={listItems} item={item}/>
                    )
                }
            </div>

        </div>
    );
}

export default TodoList;
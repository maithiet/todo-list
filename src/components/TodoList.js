import React, {useCallback, useState} from 'react';
import 'antd/dist/antd.min.css'
import Item from "./Item";
import AddItem from "./AddItem";
import Title from "./Title";

function TodoList(props) {
    const [listItems, setListItems] = useState([])
    const [count, setCount] = useState(0)
    const handleChangeCount = useCallback(() => {
        setCount(prevState => prevState + 1)
    }, [])

    return (
        <div className={"w-[500px] bg-[#fff] mx-auto rounded-md p-5"}>
            <Title handleChangeCount={handleChangeCount}/>

            {count}
            <AddItem setListItems={setListItems}/>
            {
                listItems?.length ? listItems.map((item, index) =>
                        <Item key={item?.id} setListItem={setListItems} item={item}/>
                    )
                    :
                    null
            }
        </div>
    );
}

export default TodoList;
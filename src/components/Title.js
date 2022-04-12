import React, {memo} from 'react';
import {Button} from "antd";

function Title({handleChangeCount}) {
    console.log("render title")
    return (
        <>
            <h2 className={"text-center text-[24px]"}>To do list </h2>
            <Button onClick={handleChangeCount} type="primary">Click</Button>

        </>
    );
}


export default memo(Title);
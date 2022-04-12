import React, {memo} from 'react';

function Title({count}) {
    console.log("render title")
    return (
        <h2 className={"text-center text-[24px]"}>To do list </h2>
    );
}

function areEqual(prevProps, nextProps) {
    /*
      trả về true khi prevProps = nextProps // ko cần re-render
      ngược lại trả về false
    */
}

export default memo(Title);
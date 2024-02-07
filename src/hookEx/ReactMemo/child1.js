import React from "react";

const Child1 =({increment1,handleIncrement1})=>{
    console.log("child1 rendering",increment1)
    return(
        <>
        <div>{increment1}</div>
        <button onClick={handleIncrement1}>child1</button>
        </>
    )
}

export default React.memo(Child1);
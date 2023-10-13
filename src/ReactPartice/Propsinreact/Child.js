import React from "react";

const Child =({name,ChildCallBack})=>{
    return (
        <>
        <div style={{fontSize:"15px",color:"red"}}>{name}</div>
        <button onClick={()=>ChildCallBack("Vidhya")}>Child To Parent</button>
        </>
    )
}

export default Child
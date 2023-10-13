import React, { useRef, useState } from 'react';

const Child =({callBackFunc,text})=>{

    const [dataColor,setDataColor] = useState();

    const onHandleChange =(e)=>{
        console.log("input",e.target.value)
        setDataColor(e.target.value)
        callBackFunc(e.target.value)
    }
    return(
        <>
        <input type="text" name="color" onChange={onHandleChange} value={dataColor}></input>
        <p>{text}</p>
        </>
    )
}

export default Child;
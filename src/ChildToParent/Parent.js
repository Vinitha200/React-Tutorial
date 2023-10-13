import React, { useRef, useState } from 'react';
import Child from "./Child"
import "./style.css"

const Parent =()=>{

    const [boxColor,setBoxColor]=useState();
    const callBackFunc =(data)=>{
      console.log("Data From Child",data)
      setBoxColor(data)
    }
    return(
        <>
        <div 
        className='boxStyle'
        style={{backgroundColor:`${boxColor}`}}> color </div>
        <Child callBackFunc={callBackFunc}
        text={`color of box is ${boxColor}`}></Child>
        </>
    )
}

export default Parent;
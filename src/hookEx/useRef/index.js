import React,{useRef, useState} from "react";

const RefEx =()=>{
    const countRef = useRef(0)
    const [counter,setCounter] = useState(0);

  const increment =()=>{
    setCounter(c=>c+1)
  }

  const refIncrement =()=>{
    countRef.current +=1
  }

  console.log("I am rendering",countRef)
    return(
        <>
        <h1>using state : {counter}</h1>
        <h1>using  ref: {countRef.current}</h1>
        <button onClick={increment}>increment state</button>
        <button onClick={refIncrement}>increment useref</button>
        </>
    )
}

export default RefEx
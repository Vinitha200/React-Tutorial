import React, { useCallback, useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const Parent =()=>{
    const [text,settext]=useState('Hello World');

    //memo with usecallback
    const [increment1,setIncrement1]=useState(0)
    const [increment2,setIncrement2]=useState(0)

    const onupdate =()=>{
        settext('welcome to React memo')
    }

    //I am passing these 2 function to child component i dont want to render the child component 
    // every time when state changes. So I used Memoization concept here.By wraping child component 
    //with React.memo and wrap useCallback to the function and passed the dependency.

    const handleIncrement1 = useCallback(() =>{
        setIncrement1( increment1 + 1);
    },[increment1])


    const handleIncrement2 = useCallback(() =>{
        setIncrement2( increment2 + 1);
    },[increment2])

    return(
        <>
        <div>Parent</div>
        <h1>{text}</h1>
        <button onClick={onupdate}>parent button</button>
        <Child1 increment1={increment1} handleIncrement1={handleIncrement1}/>
        <Child2 increment2={increment2} handleIncrement2={handleIncrement2}/>
        </>
    )
}

export default Parent;
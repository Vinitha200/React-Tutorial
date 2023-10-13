 import React,{useState} from "react";
 import Child from "./Child";

 const Parent =()=>{
    const [name,setName]=useState("Ram")
    const [callback,setCallBack]=useState("Ramya")

    const ChildCallBack =(e)=>{
        setCallBack(e)
    }

    return (
    <>
    <span>{callback}</span>
    <Child name={name} ChildCallBack={ChildCallBack}/>
    <button onClick={()=>setName("Ravi")}>Parent To Child</button>
    </>)
 }
 export default Parent;
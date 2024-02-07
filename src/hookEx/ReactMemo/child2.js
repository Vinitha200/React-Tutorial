import React,{useState} from "react";

const Child2 =({increment2, handleIncrement2})=>{
    console.log("child2 rendering",increment2)
    const [text,settext]=useState('child2');

    const onupdate =()=>{
        settext('child2 state updated')
    }

    return(
        <>
        {/* <div>{text}</div>
        <button onClick={onupdate}> child2 button</button> */}

        <div>{increment2}</div>
        <button onClick={handleIncrement2}> child2 button </button> 
        </>
    )
}

export default React.memo(Child2);
import React, { useCallback, useState } from "react";

const CallBack = ()=>{

    const [step,setStep]=useState(0)
    const [age,setAge] = useState(23)

    const updateName = useCallback( () =>{
        console.log("NameCalled")
        setStep(s=>s+1)
    },[step])

    const updateAge = () =>{
        console.log("Name Age")
        setAge(a=>a+step)
    }

    return(
        <>
        <h1>{step}</h1>
        <button onClick={updateName}>Increment Step</button><br/><br/>
        <h1>{age}</h1>
        <button onClick={updateAge}>Increment Age</button>
        </>
    )
}

export default CallBack
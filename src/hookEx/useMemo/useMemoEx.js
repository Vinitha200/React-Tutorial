import React, { useMemo, useState } from 'react';

const MemoEx =()=>{
  const [count1,setCount1]=useState(0)
  const [count2,setCount2]=useState(0)

  const increment1 =()=>{
    
    setCount1(count1+1)
  }

  const increment2 =()=>{
    setCount2(count2+1)
  }

  function multipleOfFive(){
    console.log("Call Only when count 1 chnages ")
    return count1 *5
  }

  const MemorizedValue = useMemo(multipleOfFive,[count1])
    return(
        <>
        <div>
            <button onClick={increment1}>count{count1}</button><br/>
            <button onClick={increment2}>count{count2}</button><br/>
            <span>{MemorizedValue}</span>
        </div>
        </>
    )
}

export default MemoEx
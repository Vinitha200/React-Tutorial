import React, { useEffect, useState } from 'react'

function Child() {
 
    

 useEffect(()=>{
    let i =0 
    const interval = setInterval(()=>{
        console.log("Timer",i)
       i++
        
    },1000)

    return ()=>{
        console.log("UNMOUNTED")
        clearInterval(interval)
    }

 },[])

  return (
    <div>Child</div>
  )
}

export default Child
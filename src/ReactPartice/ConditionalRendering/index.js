import React from "react"

const ConditionalRender =()=>{
    
    let name="Vinitha"
    let age=23
  
    return (
        <>
       <div> {name==="Vinitha"?true:false}</div>
        </>
    )
}

export default ConditionalRender
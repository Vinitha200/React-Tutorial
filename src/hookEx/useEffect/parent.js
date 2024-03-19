import React, { useState } from 'react'
import Child from './child'
function Parent() {
    const [show,setShow]=useState(false)

    const toggle = () =>{
        setShow(!show)
    }
  return (
    <div>
        {show && <Child />}
        <button onClick={()=>toggle()}>Toogle</button>

    </div>
  )
}

export default Parent
import React, { useState } from "react"
import data from "./MockData";
import "./style.css"

const ReactApp =()=>{
   
    const [color1,setColor1]=useState("");
    
    const onHandleChange =(id)=>{
     console.log(id)
     setColor1(id)
    }
  


    return(
        <>
        <div className="main"> 
            {data?.map((item,index)=>{
             return (
            <div 
            className="child"
            key={item.id}>
                <span>{item?.Heading}</span><br/>
                <span>{item?.SubHeading}</span>
                <button onClick={()=>onHandleChange(item?.id)}>click</button>
             </div>
             ) 
        })}
        </div>
        </>
    )
}

export default ReactApp;







// Requirements:

// =============

// 1. Use functional component.

// 2. Each tile should have Heading, sub-heading and a button to toggle the current tile's background color.

// 3. Style only tile's background (default: #fff, toggled: #ccc) and border color (default: #fff, toggled: #ccc) - Do not style anything else.

// 4. Display 3 tiles by default and use mock data for these 3 tile's content.
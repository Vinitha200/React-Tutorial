import React, { useEffect, useState } from "react"
import Parent from "./parent"

const EffectEx =()=>{
   
    const [fetchData,setFetchData]=useState([])
    const API_CALL = () =>{
         fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{ 
                setFetchData(data)
         })
      }


    // useEffect(()=>{
    //     API_CALL()
    // },[])
    return(
        <>
        {/* <div>
             {fetchData.map((item)=>{
            return <div key={item.id} style={{    
                height: "200px",
                width: "200px",
                overflow: "hidden"}}>
                <div style={{border:"1px solid black"}}>
                    <span>{item.name}</span>
                    <span>{item.username}</span>
                </div>
            </div>
        })}
        </div> */}
       <Parent/>
        </>
    )
}

export default EffectEx;
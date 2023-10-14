import React from 'react'
import { useLocation } from 'react-router-dom'
import "./postdetail.css"
import { Button } from 'antd'

function PostDetail() {
    const location = useLocation()

    //To fetch the state data tht is passed while navigation we will use useLoaction 
    const {state} = location 
    
   console.log("state",state)
  return (
    <>  
    <div className='postdetail-container'>
      <h2 className='state-title'>{state?.title}</h2> 
      <div className='state-body'>{state?.body}</div>   
    </div>
    <div className='button-container'>
        <Button className='delete-post'>Delete</Button>
        <Button className='edit-post'>Edit</Button>
    </div>
    </>
  
  )
}

export default PostDetail
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import "./home.css"


function Post({post}) {
  const navigation = useNavigate()
  const [accordian,setAccordian]=useState(false)

 const HandleClick =()=>{
  //Navigation using useNavigation and passing the data in state.
  navigation(`/postdetail/${post?.id}`,{state:post})
 }

 const HandleAccordian =()=>{
  setAccordian(!accordian)
 }
  return (
    <>
      <div className='post-title'>
         <div onClick={HandleClick}>{post?.title}</div>
         <Button onClick={HandleAccordian}>click</Button>
      </div>
      <div>
        {accordian && <div className='post-body'>{post?.body}</div>}
      </div>
         

    </>
  )
}

export default Post
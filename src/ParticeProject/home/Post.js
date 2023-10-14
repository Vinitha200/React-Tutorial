import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"

function Post({post}) {
  const navigation = useNavigate()

 const HandleClick =()=>{
  //Navigation using useNavigation and passing the data in state.
  navigation(`/postdetail/${post?.id}`,{state:post})
 }
  return (
    <>
      <div className='post-main' onClick={HandleClick}>
        <div className='post-title'>{post?.title}</div>
        <div className='post-body'>{post?.body}</div>
     </div>
    </>
  )
}

export default Post
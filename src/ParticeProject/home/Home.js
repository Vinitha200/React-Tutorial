import React,{useEffect,useState} from 'react'
import Post from './Post'
import useFetch from '../hook/customFetchHook'

function Home() {
  const {data:postData,error,isLoading} = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <>
      {isLoading && <h3>Loading</h3>}
      <div>
      {postData && postData.map((item)=>{
        return (
          <Post post={item} key={item?.id}></Post>
        )
      })}
    </div>
    </>

  )
}

export default Home
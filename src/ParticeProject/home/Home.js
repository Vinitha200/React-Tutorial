import React, { useEffect, useState } from 'react'
import Post from './Post'
import useFetch from '../hook/customFetchHook'
import { Input } from 'antd'

function Home() {
  const { data: postData, error, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts")


  const [filter, setFilter] = useState([])

  const handleSearch = (e) => {
    const searchTerm = e?.target?.value?.trim()
    console.log(searchTerm)
    if (searchTerm.length > 0) {

      let filterData = postData?.filter((entry) => {
        return Object.values(entry).some(
          (val) => {
            if (val === null || val === undefined) {
              return false
            }
            else {
              return val.toString().toLowerCase().includes(searchTerm)
            }
          }
        )
      });
      console.log("filterData", filterData)
      setFilter(filterData)
    }
    else {
      setFilter([])
    }

  }

  //console.log("filterData",filter,searchValue)
  return (
    <>
      {isLoading && <h3>Loading</h3>}
      <div>
        <Input
          placeholder='search here'
          onChange={(e) => handleSearch(e)}
          enter
          style={{width:"30%"}}
        />
      </div>
      <div>
        {filter.length > 0 ? (filter.map((item) => {
          return (
            <Post post={item} key={item?.id}></Post>
          )
        })) : (postData.map((item) => {
          return (
            <Post post={item} key={item?.id}></Post>
          )
        }))

        }
      </div>
    </>

  )
}

export default Home
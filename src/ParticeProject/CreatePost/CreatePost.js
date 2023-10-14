import React from 'react'
import "./CreatePost.css"
import { Button } from 'antd';

function CreatePost() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <>
      <div className='createpost-container'>
        <form
          className='create-form'
          onSubmit={handleSubmit}>
          <div className='create-main'>
            <label className="create-title" htmlFor='Title'>Title: </label><br/>
            <input
              type='text'
              id='title'
              name='title'
            /></div>
          <div className='create-main'>
            <label className="create-content" htmlFor='Content'>Content: </label><br/>
            <input
              type='text'
              id='Content'
              name='Content'
            />
          </div>
          <button type='submit'>Create</button>
        </form>
       
      </div>
    </>
  )
}

export default CreatePost
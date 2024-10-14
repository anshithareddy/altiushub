import React from 'react'
import '../FileUpload/fileUpload.css'
import { AiFillLock } from 'react-icons/ai'
import { AiFillBook } from 'react-icons/ai'
import { AiFillFileAdd } from 'react-icons/ai'


function fileUpload() {
  return (
    <div>
        <div>
        <div className='heading'>
          <div>
          <h1>Task Rabbit</h1>
          </div>
          <div className='dashboard'>
          <a href="login.js"><AiFillLock></AiFillLock>
          </a>
          <a href='tasks.js'><AiFillBook></AiFillBook></a>
          <a href="fileUpload.js"><AiFillFileAdd></AiFillFileAdd></a>
            </div>
        </div>
        </div>
    <div className='file'>
        <h1 className='name'>Upload File</h1>
        <br></br>
        <input type="file"id="file" />
    </div>
    </div>
  )
}

export default fileUpload

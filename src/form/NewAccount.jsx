import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeftShort} from "react-icons/bs"
export default function NewAccount() {
  return (
    <div className='newaccount'>
      <h3><BsArrowLeftShort/></h3>
      <h1 className='firstname'>New <br /> Account</h1>
      <div className='new'>
      <h3><label className='name' htmlFor="name">NAME</label></h3>
      <input className='thirdinput' type="text" name="name" id="name" />
      <br />
      <h3><label className='user' htmlFor="user">USER</label></h3>
     <input className='fourthinput' type="text" name="user" id="user" />
     <button className='but2'>Next</button>
     <p>Not the first time here? <Link className='link' to='/login'>Log in.</Link> </p>
     
     </div>
    </div>
  )
}

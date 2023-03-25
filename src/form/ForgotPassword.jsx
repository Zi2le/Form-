import React from 'react'
import { Link } from 'react-router-dom'
export default function ForgotPassword() {
  return (
    <>
    <main className='main'>
    <div className='last'>
      <h1 className='lasth1'>Forgot password!</h1>
      <p className='elabel'> Enter your email we would send a code to you email</p>  <br />
      <input className='einput' type="email" name="email" id="email" placeholder='Email'/> <br />
      <Link to='/login'><button className='lb'>Continue</button></Link>
      </div>
      </main>
      </>
  )
}
      
      
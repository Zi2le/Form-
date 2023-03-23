import React from 'react'
import { Link } from 'react-router-dom'
import './form.css'
import {BsFillCircleFill} from "react-icons/bs"
export default function HomePage() {
  return (
    <>
    <div className='homepage'>
      
      <div className='home'>
      <h1 className='firsticon'> <BsFillCircleFill /></h1>
    <h1 className='firsth1'>
      Start <br />  Your <br /> Adventure
    </h1>
    <button className='but1'>log in</button>
    <p className='para1'>You don't have an account? <Link className='link' to="/newaccount">Sign up please</Link></p>
    </div>
    </div>

    </>
  )
}

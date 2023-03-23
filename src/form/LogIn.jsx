import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeftShort, BsFillPersonCheckFill } from "react-icons/bs"
import { AiOutlineCluster } from "react-icons/ai"
export default function LogIn() {
  return (
    <div className='login'>
      <h3><Link to='/'><BsArrowLeftShort/></Link></h3>
      <h2 className='secondh2'>Log in</h2>
     <div className='log'>
     <div className='div' ><BsFillPersonCheckFill/><input className='firstinput' type="text" name="me" id="me" placeholder='Username'/></div> 
      <br />
     <div><AiOutlineCluster/><input className='secondinput' type="text" name="pa" id="pa" placeholder='Password'/></div> 
      <button className='but2'>log in</button>
      <p className='secondpara'>First time here <Link className='link' to="/newaccount">sign up.</Link> </p>
      </div>
    </div>
    
  )
}

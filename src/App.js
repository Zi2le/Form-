import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import ForgotPassword from './form/ForgotPassword'
import HomePage from './form/HomePage'
import LogIn from './form/LogIn'
import NewAccount from './form/NewAccount'

export default function App() {
  return (
    <>
  
  
    <Routes >
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/newaccount' element={<NewAccount/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/*' element={<HomePage/>}/>
    </Routes>
    </>
  )
}


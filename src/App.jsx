import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'

function App() {
  

  return (
    <>
      <Navbar title='TextUtils'/>
      <div className='container my-3 '>
      <TextForm heading="Enter text "/>
   
      </div>
     
    </>
  )
}

export default App

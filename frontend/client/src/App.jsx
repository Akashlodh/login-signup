import React from 'react'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'


function App() {
  return (
    <div className=''>


        <Routes>
            <Route path="/" element={<Signup/>}/>
             {/* <Route path="" element={<Signup/>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default App
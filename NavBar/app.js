import React from 'react'
import About from './About'
import Contect from './Contect'
import Navbar from './Navbar'
import Error from './Error'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
   `` <Navbar/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/contect' element={<Contect/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

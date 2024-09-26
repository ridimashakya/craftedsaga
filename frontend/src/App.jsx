import React from 'react'
import 'boxicons/css/boxicons.min.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import FiberArts from './pages/FiberArts';
import VisualArts  from './pages/VisualArts';
import HandcraftedArts from './pages/HandcraftedArts';
import LoginSignup from './pages/LoginSignup';
import Navbar from './components/Navbar/Navbar';
import addToCart from './components/addToCart/addToCart';
import Register from './pages/Register';
const App = () => {
return (

    <>      
      <Routes>
        <Route path='/*' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='fiberArts' element = {<FiberArts/>} />
          <Route path='visualArts' element={<VisualArts/>}/>
          <Route path='handcraftedArts' element={<HandcraftedArts/>}/>
        </Route>

        <Route path='login' element={<LoginSignup/>}/>
        <Route path='register' element={<Register/>} />
        <Route path='addToCart' element={<addToCart/>}/>
      </Routes>
      
    </>
  )
}

export default App
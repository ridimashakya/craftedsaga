import React from 'react'
import 'boxicons/css/boxicons.min.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import FiberArts from './pages/FiberArts';
import VisualArts  from './pages/VisualArts';
import HandcraftedArts from './pages/HandcraftedArts';
import LoginSignup from './pages/LoginSignup';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Cart from './components/Cart/cart'

const App = () => {
return (

    <>      
      <Routes>
        <Route path='/*' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='fiberArts' element = {<FiberArts/>} />
          <Route path='visualArts' element={<VisualArts/>}/>
          <Route path='handcraftedArts' element={<HandcraftedArts/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>

        <Route path='login' element={<LoginSignup/>}/>
        <Route path='register' element={<Register/>} />
      </Routes>
      
    </>
  )
}

export default App
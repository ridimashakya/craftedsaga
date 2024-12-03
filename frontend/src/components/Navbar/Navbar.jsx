import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo11.png'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

  const cart = useSelector((state) => state.cart ) ;

  const navigate = useNavigate();

  const header = [
    {link: "#crafts", title:"Crafts"},
    {link: "#about", title:"About"},
    {link: "#journal", title:"Journal"},
    {link: "#stories", title:"Stories"}
  ]

  return (
    <>
      <nav className='nav'>
        <img src={logo} alt="Crafted Saga" className='logo' onClick={() => navigate('/')}/>

        <ul className='left-nav'>
          {header.map((data,key)=><a key={key} href={`/${data.link}`}>{data.title}</a>)}
        </ul>

        <ul className='right-nav'>
          <li>Search</li>
          <li onClick={()=>{navigate('/login')}}>Account</li>

          <div>
            <i className='bx bxs-cart text-2xl' onClick={() => navigate('/cart')}></i>
            <span className='cart-quantity absolute top-[20px] right-[30px] flex items-center justify-center w-5 h-5 bg-red-600 text-white rounded-full text-xs'>{cart.items.length}</span>
          </div>
         </ul>
     </nav>
     <Outlet/>
     </>
 )
}

export default Navbar

        
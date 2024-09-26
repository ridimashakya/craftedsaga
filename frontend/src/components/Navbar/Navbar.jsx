import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo11.png'
import { Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
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
        <img src={logo} alt="Crafted Saga" className='logo' />

        <ul className='left-nav'>
            {header.map((data,key)=><a 
            href={`/${data.link}`}>{data.title}</a>)}
        </ul>

        <ul className='right-nav'>
            <li>Search</li>
            <li onClick={()=>{navigate('/login')}}>Account</li>
            <li>
              <i className='bx bxs-cart text-2xl'></i>
            </li>
        </ul>

    </nav>
    <Outlet/>
    </>
)
}

export default Navbar
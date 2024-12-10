import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo11.png'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart ) ;

  const header = [
    {link: "#crafts", title:"Crafts"},
    {link: "#about", title:"About"},
    {link: "#journal", title:"Journal"},
    {link: "#stories", title:"Stories"}
  ];

  //for search engine optimization
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setselectedCategory] = useState('All');

  const categories = [
    {name: 'Fiber Arts', path: '/fiberArts'},
    {name: 'Visual Arts', path: '/visualArts'},
    {name: 'Handcrafted Arts', path: '/handcraftedArts'},
  ];

  const handleSearch = () => {
    if(selectedCategory){
      const selectedPath = categories.find(
        (category) => category.name === selectedCategory
      )?.path;
      if(selectedPath){
        navigate(selectedPath, {state: {query: searchQuery}});
      }
    }else{
      alert("Please select a category before searching");
    }
  }

  return (
    <>
      <nav className='nav'>
        <img src={logo} alt="Crafted Saga" className='logo' onClick={() => navigate('/')}/>

        <ul className='left-nav'>
          {header.map((data,key)=><a key={key} href={`/${data.link}`}>{data.title}</a>)}
        </ul>

        <ul className='right-nav'>

          <li>

            <select  className='search-input' value={selectedCategory} onChange={(e) => setselectedCategory(e.target.value)}>
              <option value=''>Search</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>
            
            <button onClick={handleSearch} className='search-button'>
              <i className='bx bx-search'></i>
            </button>

          </li>

          <button><li onClick={()=>{navigate('/login')}}>Account</li></button>

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

        
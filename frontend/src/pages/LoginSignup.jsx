import React, {useState, useEffect} from 'react'
import image from '../assets/art1_1.jpeg'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../utils/axios'
import {useCookies} from 'react-cookie'
import CustomCheckBox from '../components/Checkbox/CustomCheckBox'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart'

const LoginSignup = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isChecked: false
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookie, setCookie] = useCookies("access_token");
  const navigate = useNavigate();

  //check if user is logged in or not
  useEffect(() => {
    const storedToken = cookie.access_token;
    if(storedToken){
      setIsLoggedIn(true);
    }
  }, [cookie]);

  const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response = await axiosInstance.post("/auth/login", form);
      const {token, userId, userName} = response.data;
      setCookie("access_token", token, {
        path: "/",
        sameSite: "none",
        secure: true,
      });
      window.localStorage.setItem("userId", userId);
      window.localStorage.setItem("userName", userName)
      
      const cartItems = getCartItems();

      await axiosInstance.post("/cart/addToCart", {
        userId,
        cartItems,
    });

      navigate("/", {replace: true});
    } catch(error){
      console.log(error.response?.message || "Login failed");
    }

  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm((prevData) => ({...prevData, [name]: value}));
  }

  
  // const [isChecked , setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    const {name, checked} = e.target
    setForm((prevData) => ({...prevData, [name]: checked}));
  }
  
  return (
    <div className="bg-customColor w-full h-screen pt-16 overflow-hidden">
      <div className='grid grid-cols-[6fr_6fr] ml-10 mr-10 h-[600px] '>

        <form 
        onSubmit = {(e) => handleLogin(e)}
        className='flex flex-col justify-center items-center gap-4 w-full bg-white relative'>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-3/5">
            <h1 className='text-3xl text-amber-900 py-2'>LOGIN</h1>
            <div className=" flex flex-col border-2 border-customColor rounded-md p-10 ">

              <label htmlFor="email" className='py-2' >Email</label>
              <input type="email" placeholder='Type your email' className='border-2 border-customColor rounded-md p-3 ' name="email" onChange={handleChange} required/>
              <label htmlFor="password" className='py-2'>Password</label>
              <input type="password" placeholder='Type your password' className='border-2 border-customColor rounded-md p-3 ' name="password" onChange={handleChange} required/>

              <CustomCheckBox
                name="isChecked"
                isChecked = {form?.isChecked}
                handleChange = {handleCheckboxChange}
                label1 = "Remember me"
                label2= "Forgot Password?"
              />
                <button type='submit' className=' bg-orange text-white border-2 border-orange rounded-md w-full py-2 mt-5' >Log in</button>
                <hr className='w-full border-customColor border-t-2 mt-9'/>
                <span className='text-center p-5'>Or</span>
                <button type='submit' className=' bg-customColor border-2 border-customColor text-black rounded-md w-full py-2' onClick={()=> { navigate("/register") }}>Sign in with Google</button>

            </div>
             


            </div>
            
        </form>

        <img src={image} alt="image" className='h-[84dvh] object-cover'/>

      </div>
    </div>
   
  )
}

export default LoginSignup
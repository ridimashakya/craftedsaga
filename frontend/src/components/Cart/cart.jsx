import React, {useState} from 'react'
import '../../index.css'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const cart = useSelector((state) => state.cart ) ;
  const dispatch = useDispatch();

  const cartItems = cart.items;
  const subTotal = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.new_price);
  },0)

  const shipping = 0;

  return (

    <div className='flex bg-[#f2eeee] p-4'>

      <div className='w-[60%] mt-[90px] '>
        <h1 className="text-3xl ml-7 mt-7 border-b border-gray-300 pb-4 w-[47rem]">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className='grid grid-cols-[120px_150px_70px_70px_1fr] gap-2 text-center items-center border-b border-gray-300 pt-2 pb-4 w-[48rem]'>

              <div className='w-full pl-6 p-5'>
                <img src={item.image} alt="Product" />
              </div>

              <div>{item.name}</div>
              <div>Rs.</div>
              <div>{item.new_price}</div>
            </div>
          ))
        ) : ( 
          <p className='text-center text-gray-500'>Your cart is empty.</p>
        )}
      </div>

      <div className='text-2xl text-[#2b2b2b] border border-gray-300 mt-[170px] w-[33rem] p-6 '>
        <h2>Order Summary</h2>

        <div className='flex justify-between text-[18px] border-b border-gray-200 mt-5 p-7'>
          <span>Subtotal</span>
          <span>
            Rs.{subTotal} 
          </span>
        </div>

        <div className='flex justify-between text-[18px] border-b border-gray-200 mt-5 p-7'>
          <span>Shipping</span>
          <span>Rs. {shipping} </span>
        </div>

        <div className='flex justify-between text-[18px] mt-5 p-7'>
          <span>Total</span>
          <span>Rs.{subTotal + shipping} </span>
        </div>
      
        <button className='btnView w-full text-[17px] py-3 mt-[40px] mb-[60px] cursor-pointer'>PROCEED PAYMENT</button>

      </div>

    </div>

  )
}

export default Cart
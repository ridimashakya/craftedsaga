import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';

const Popular_Items = ({id, name, image, old_price, new_price}) => {

  const cart = useSelector((state) => state.cart ) ;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image, new_price}));
  }
    return(
        <div className="w-[320px] mt-[50px] p-4">
            <img  className='w-full object-cover h-[300px]' src={image} alt="popular-crafts" />
            <p className='my-[6px]1 mt-[30px]'>{name}</p>

            <div className='item_prices flex gap-[20px]'>

              <div className='item_price_new text-[#374151] text-[18px] font-semibold'>
                Rs.{new_price}
              </div>
              <div className='item_price_old text-[#8c8c8c] text-[18px] font-medium line-through'>
                Rs.{old_price}
              </div>

              <div className="add-to-cart relative bottom-6 left-16 ">
                <i className='bx bxs-cart text-2xl'></i>
                <br/>
                <button onClick={handleAddToCart} >ADD</button>

              </div>
                  
            </div>
        </div>
    )
}


export default Popular_Items
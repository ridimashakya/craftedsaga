import React from 'react'
import Items from '../Items/Items'
import fiber_arts from '../../assets/data'

const Popular = () => {
  return (
      <div className='popular grid gap-8 w-[1400px] mx-auto p-8 pt-[7rem] justify-items-center'>
        <h1 className='text-[30px] font-semibold'>Explore the collection of Fiber Arts</h1>
        <hr className='w-[510px] h-[4px] rounded-[10px] bg-black'/>
        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, reiciendis!</p>

        <div className='fiber_arts_items grid grid-cols-4 gap-4'>
            {fiber_arts.map((item,i)=>{
                return (<Items key={i} id={item.id} name={item.art_name} image={item.art_image} new_price={item.art_price_new} old_price={item.art_price_old}/>)
            })}
        </div>
      </div>
  )
}
 
export default Popular 
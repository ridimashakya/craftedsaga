import React from 'react'
import Items from '../Items/Items'

const Popular = ({title, description, data}) => {
  return (
      <div className='popular grid gap-8 w-[1400px] mx-auto p-8 pt-[7rem] justify-items-center'>
        <h1 className='text-[30px] font-semibold'>{title}</h1>
        <hr className='w-[510px] h-[4px] rounded-[10px] bg-black'/>
      <p className=''>{description}</p>

        <div className='fiber_arts_items grid grid-cols-4 gap-4'>
            {data.map((item,i)=>(
              <Items 
                  key={i} 
                  id={item.id} 
                  name={item.art_name}
                  image={item.art_image} 
                  new_price={item.art_price_new} 
                  old_price={item.art_price_old}
                />)
            )}
        </div>
      </div>
  )
}
 
export default Popular 
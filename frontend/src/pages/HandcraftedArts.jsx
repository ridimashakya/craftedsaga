import React from 'react'
import Popular from '../components/Popular/popular'
import {handcraftedArts} from '../assets/data'

const HandcraftedArts = () => {
  return (
    <div style={{backgroundColor: '#f2eeee'}}>
    
    <Popular
     title="Explore the collection of Handcrafted Arts"
     description="Welcome to the collection of handcrafted arts, where you can explore a world of creativity, expression, and innovations."
     data={handcraftedArts}/>

    </div>
  )
}

export default HandcraftedArts
import React from 'react'
import Popular from '../components/Popular/popular'
import {visualArts} from '../assets/data'

const VisualArts = () => {
  return (
    <div style={{backgroundColor: '#f2eeee'}}>    

        <Popular 
         title="Explore the collection of Visual Arts"
         description="Welcome to the collection of visual arts, where you can explore a world of creativity, expression, and innovations."
         data={visualArts}/>

    </div>
  )
}
export default VisualArts
import React from 'react'
import Popular from '../components/Popular/popular'
import fiberArts from '../assets/data'

const FiberArts = () => {
  return (
    <div className="bg-[#f2eeee]">
  
      <Popular
      title="Explore the collection of Fiber Arts"
      description="Welcome to the collection of fiber arts and discover a world of textures, patterns, and techniques, from traditional weaving and knitting to modern fiber art innovations"
      data={fiberArts}/>

    </div>
  )
}

export default FiberArts
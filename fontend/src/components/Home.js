import React from 'react'
import videoBg from '../assets/home-bg.mp4'

const Home = () => {
  return (
    <div className='bg-[#000000d8] z-2 overflow-y-hidden'>
        <video className='h-full w-full object-cover' src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default Home
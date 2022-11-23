import React from 'react'
import videoBg from '../assets/home-bg.mp4'
import logo from "../assets/logo3.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className=' z-10 overflow-y-hidden text-white absolute w-full'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row justify-between items-center w-full p-4'>
            <div>
              <img src={logo} className='w-40' alt="" />
            </div>
            <div className='flex flex-row justify-start items-center space-x-10 text-xl'>
              <Link to='/about' className='cursor-pointer'>
                About us
              </Link>
              <Link to='pricing' className='cursor-pointer'>
                Pricing
              </Link>
              <Link to='contact' className='cursor-pointer'>
                Contact us
              </Link>
              <Link to='/login' className='cursor-pointer bg-[#1B5A7A] p-2 rounded-md hover:text-[#1B5A7A] hover:bg-white hover:shadow-md hover:shadow-white transition-all duration-500'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className='px-10  py-24 flex flex-col justify-start items-start space-y-3 '>
          <div className='text-5xl'>
            Introducing <br></br> <span className='text-7xl'>Campus View</span>
          </div>
          <div className='text-2xl'>
            Explore your dream institute right from comfort of your home
          </div>
          <Link to="/register" className='text-xl border-2 border-white px-1 py-2 cursor-pointer schedulebutton hover:text-black'>
            Explore now
          </Link>
        </div>
      </div>
      <div className='z-0 absolute h-screen w-full bg-[#0000008f] top-0'></div>
      <video className='h-screen w-full object-fill absolute top-0 -z-10 ' src={videoBg} autoPlay loop muted />
    </>
  )
}

export default Home
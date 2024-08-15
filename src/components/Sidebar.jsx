import React from 'react'
import Logo from '../assets/Logo.png';
import { LuSearch } from 'react-icons/lu';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { FaArrowRight, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={Logo} alt="" />
            <p className='font-bold'>Home</p>
          </div>
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <LuSearch className='w-6' size={20}/>
            <p className='font-bold'>Search</p>
          </div>
        </div>
        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <HiMiniRectangleStack className='w-8' size={20}/>
            <p className='font-bold'>Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <FaArrowRight className='w-5' size={20}/>
              <FaPlus  className='w-5' size={20}/>
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's easy</p>
            <button className="px-4 py-1 5 bg-white text-[15px] text-black rounded-full mt-4">Create Playlist</button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Let's find some podcast to follow</h1>
            <p className='font-light'>We'll keep updated on new episodes</p>
            <button className="px-4 py-1 5 bg-white text-[15px] text-black rounded-full mt-4">Browse Podcast</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

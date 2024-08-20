import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {
  return (
    <>
        <div className='w-full flex font-semibold justify-between items-center'>
            <div className='flex items-center gap-2'>
            <IoIosArrowBack className='w-8 bg-black p-2 rounded cursor-pointer' size={32}/>
            <IoIosArrowForward className='w-8 bg-black p-2 rounded cursor-pointer'
            size={32} />
            </div>
            <div className="flex items-center gap-4">
                <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                <p className="bg-[#1ed760] text-black w-7 h-7 rounded-full flex items-center justify-center">E</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl font-semibold'> All
            </p>
            <p className='bg-black px-4 py-1 rounded-2xl'>
                Music
            </p>
            <p className='bg-black px-4 py-1 rounded-2xl'>
                Podcasts
            </p>
        </div>

    </>
)
}

export default Navbar
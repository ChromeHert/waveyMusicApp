import React from 'react'
import { songsData } from '../assets/assets.js';
import { FaShuffle, FaBackward, FaForward, FaPlay, FaMicrophone } from 'react-icons/fa6';
import { ImLoop } from 'react-icons/im';
import { MdOutlineQueueMusic } from 'react-icons/md';
import { HiSpeakerWave } from 'react-icons/hi2';
import { FaVolumeUp } from 'react-icons/fa';
import { CgMiniPlayer } from 'react-icons/cg';
import { FiMinimize2 } from 'react-icons/fi';

const Player = () => {
  return (
    <>
        <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
          <div className="hidden lg:flex items-center gap-4 font-semibold">
            <img className='w-12 rounded' src={songsData[0].image} alt=""/>
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc}</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-1 m-auto'>
            <div className="flex gap-4">
              <FaShuffle className='w-6 cursor-pointer' size={20}/>
              <FaBackward className='w-6 cursor-pointer' size={20}/>
              <FaPlay className='w-6 cursor-pointer' size={20}/>
              <FaForward className='w-6 cursor-pointer' size={20}/>
              <ImLoop className='w-6 cursor-pointer' size={20}/>
            </div> 
            <div className="flex items-center gap-5">
              <p>1:06</p>
              <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                <hr className='h-1 border-none w-28 bg-[#1ed760] rounded-full'/>
              </div>
              <p>3:20</p>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 opacity-75">
            <FaPlay className='w-4' size={20} />
            <FaMicrophone className='w-4' size={20} />
            <MdOutlineQueueMusic className='w-4' size={20} />
            <HiSpeakerWave className='w-4' size={20} />
            <FaVolumeUp className='w-4' size={20} />
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            <CgMiniPlayer className='w-4' size={20} />
            <FiMinimize2 className='w-4' size={20} />
          </div>
        </div>
    </>
  )
}

export default Player
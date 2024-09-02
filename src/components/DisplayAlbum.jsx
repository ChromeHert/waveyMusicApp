import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets';
import { FaSpotify } from 'react-icons/fa6';
import { LuTimer } from 'react-icons/lu';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);
      return (
    <>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img src={albumData.image} 
            className='w-48 rounded'
            alt="" />
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-6xl'>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <FaSpotify size={34} color='#1ed760'/>
                    <b>Spotify</b>
                    • 367,154 streams
                    • <b>50 songs,</b>
                    about 2 hrs 30 mins
                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-slate-400">
            <p><b className='mr-4'>#</b>Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <LuTimer className='m-auto w-4' size={20}/>
        </div>
        <hr />
        {songsData.map((item,index)=>(
            <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-slate-500 hover:bg-slate-700'>
                <p className='text-white'>
                    <b className='mr-4 text-slate-400'>{index+1}</b>
                    <img src={item.image}
                    className='inline w-10 mr-5' alt="" />
                    {item.name}
                </p>
                <p className="text-[15px]">{albumData.name}</p>
                <p className="text-[15px] hidden sm:block">5 days ago</p>
                <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))}
    </>
  )
}

export default DisplayAlbum
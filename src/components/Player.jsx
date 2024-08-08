import React, { useEffect, useState, useRef } from 'react';
import Details from './Details';
import Controls from './Controls';

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlaying]);

  const skipSong = (forwards = true) => {
    props.setCurrentSongIndex((prevIndex) => {
      let temp = prevIndex;
      temp = forwards ? temp + 1 : temp - 1;

      if (temp > props.songs.length - 1) {
        temp = 0;
      } else if (temp < 0) {
        temp = props.songs.length - 1;
      }

      return temp;
    });
  };

  return (
    <>
    <div className='text-center font-bold text-slate-900'>
      <h1>Playing Now 🎶🎶</h1>
      <Details 
        song={props.songs[props.currentSongIndex]} 
      />
      <Controls 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} 
        skipSong={skipSong}
      />
      <audio 
        ref={audioEl}
        className='player_audio'
        src={props.songs[props.currentSongIndex].src} 
        controls
      ></audio>
      <p>
        Next Up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span>
      </p>
    </div>


      {/* <section>
        <div className="bg-white rounded-lg drop-shadow p-4 dark:bg-black dark:shadow-white">
          <div className="flex flex-col justify-center items-center ">
            <img className="rounded-lg aspect-square w-64" src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d5/37/f0/d537f0d1-5cfd-ce67-d7ac-0c4151f63f70/23UMGIM17915.rgb.jpg/1200x1200bb.jpg" />
            <p className="mt-2 font-semibold text-md text-gray-600">I ain't worried</p>
            <p className="font-semibold text-xs text-gray-600">One Republic</p>
          </div>
          <div className="flex flex-col justify-center items-center my-4">
            <input type="range" value="30" className="rounded-lg overflow-hidden appearance-none bg-gray-200 h-1 w-full" />
            <div className="flex justify-between w-3/5 items-center my-2">
              <button className="aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#816cfa" fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z" clip-rule="evenodd" /></svg>
              </button>
              <button className="aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#816cfa" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440" /></svg>
              </button>
              <button className=" aspect-square bg-white flex justify-center items-center rounded-full p-2 shadow-lg dark:bg-gray-800">
                <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#816cfa" fill-rule="evenodd" d="M7 6a1 1 0 0 1 2 0v4l6.4-4.8A1 1 0 0 1 17 6v12a1 1 0 0 1-1.6.8L9 14v4a1 1 0 1 1-2 0z" clip-rule="evenodd" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section> */}
  </>
  )
}

export default Player
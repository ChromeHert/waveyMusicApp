import React, { useContext } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainDisplay from "./components/MainDisplay";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {

  const {audioRef} = useContext(PlayerContext);

  return (
    <>
    <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar />
        <MainDisplay />
      </div>
      <Player />
      <audio ref={audioRef} preload="auto"></audio>
    </div> 
    </>
  )
}

export default App

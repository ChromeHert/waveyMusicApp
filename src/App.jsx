import React from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import MainDisplay from "./components/MainDisplay";

const App = () => {



  return (
    <>
    <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar />
        <MainDisplay />
      </div>
      <Player />
    </div> 
    </>
  )
}

export default App

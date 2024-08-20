import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomeDisplay from './HomeDisplay'

const MainDisplay = () => {
  return (
    <>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
          <Routes>
            <Route path='/' element={<HomeDisplay/>} />
          </Routes>
        </div>
    </>
)
}

export default MainDisplay
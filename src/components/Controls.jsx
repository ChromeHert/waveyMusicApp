import React from 'react'
import { FaPause } from 'react-icons/fa'
import { FaBackward, FaForward } from 'react-icons/fa6'

const Controls = () => {
  return (
    <>
        <div className='control'>
            <button className='control_SkipBtn'>
                <FaBackward />
            </button>
            <button className="control_PlayBtn">
                <FaPause />
            </button>
            <button className='control_SkipBtn'>
                <FaForward />
            </button>
        </div>
    </>
  )
}

export default Controls
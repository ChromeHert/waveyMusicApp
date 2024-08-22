import React from 'react'

const SongsItem = ({name,image,desc,id}) => {
  return (
    <>
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer'>
        <img src={image} className='rounded' alt="" />
        <p className="font-bold mt-2 mb-1">
            {name}
        </p>
        <p className="text-slate-200 text-base">
            {desc}
        </p>
        </div>
    </>
)
}

export default SongsItem
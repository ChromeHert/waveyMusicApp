import React from 'react'

const Details = (props) => {
  return (
    <>
      <div className='details'>
        <div className="details_img flex justify-center items-center">
          <img src={props.song.img} alt="track_poster" />
        </div>
        <h3 className="details_title">
          {props.song.title}
        </h3>
        <h3 className="details_artist">
        {props.song.artist}
        </h3>
      </div>
    </>
  )
}

export default Details
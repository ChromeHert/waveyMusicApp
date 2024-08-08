import { useState, useEffect } from 'react';
import Player from './components/Player'

function App() {
  const [songs] = useState([
    {
      title: "Talk back",
      artist: "Black",
      img: "./assets/track1.png",
      src: "./assets/Talkback.mp3"
    },
    {
      title: "Always Forever",
      artist: "Bryson Tiller",
      img: "./assets/track2.png",
      src: "./assets/Always-forever.mp3"
    },
    {
      title: "Know your worth",
      artist: "Khalid",
      img: "./assets/track3.png",
      src: "./assets/Know-your-worth.mp3"
    }

  ])

  const [currentSongIndex, setcurrentSongIndex] = useState(0);
  const [nextSongIndex, setnextSongIndex] = useState(0);

  useEffect(() => {
    setnextSongIndex(() => {
      if (currentSongIndex + 1 < songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.lenght])
  return (
    <>
    <div className='App'>
      <Player
        currentSongIndex={currentSongIndex}
        setcurrentSongIndex={setcurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />

    </div> 
    </>
  )
}

export default App

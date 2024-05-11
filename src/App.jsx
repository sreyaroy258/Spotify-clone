import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Play from './components/Play'
import Display from './components/Display'
import { PlayerContext } from './components/Context/PlayerContext'



const App = () => {

 const {audioRef,track} = useContext (PlayerContext);

  return (
    <div className='h-screen bg-black '>
       <div className='h-[90%] flex-col'>
       <Sidebar/>
        <Display />
        <Play/>
        <audio  src={track.file}
        ref={audioRef} preload='auto' ></audio>
       </div>
       
    </div>
  )
}

export default App
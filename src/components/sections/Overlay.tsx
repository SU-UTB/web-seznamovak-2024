import React from 'react'
//import '../../scss/Overlay.scss'
import logo from '../../assets/img/logo.svg'
import backgroundImage from '../../assets/img/bg_wave_top.svg';

const Overlay: React.FC = () => {

  return (
    <div
      className="overlay relative pt-12 bg-lightPink h-[40vh] md:h-[70vh] w-full m-0 overflow-y-hidden flex items-center justify-center bg-bottom bg-no-repeat bg-cover"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <img 
        src={logo} 
        alt="Logo" 
        className="w-auto h-[20vh] md:h-[35vh] drop-shadow-lg" 
      />
    </div>
  )
}

export default Overlay
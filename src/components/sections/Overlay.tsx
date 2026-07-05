import React from 'react'
//import '../../scss/Overlay.scss'
import logo from '../../assets/img/logo.svg'
import backgroundImage from '../../assets/img/bg_wave_top.svg';

const Overlay: React.FC = () => {

  return (
    <div
      className="overlay relative pt-12 bg-lightPink h-[50vh] md:h-[85vh] w-full m-0 overflow-y-hidden flex items-center justify-center bg-cover bg-bottom bg-no-repeat"
      style={{  backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center bottom 1px' }}
    >

      <img 
        src={logo} 
        alt="Logo" 
        className="w-auto h-[20vh] md:h-[35vh] -mt-30 md:-mt-36"
      />
    </div>
  )
}

export default Overlay
import React from 'react'
import { isMobile } from 'react-device-detect'
import { useMediaQuery } from 'react-responsive'
type Props = {
  className?: string
}

const Footer = ({className}: Props) => {
  return (

    <div id='footer' className='flex items-center justify-center h-screen'> 
    <div className='flex flex-col items-center justify-center'>
    <div className=' orange-text-gradient text-7xl font-bold text-center'>
    "Simplicity is the ultimate sophistication."
      </div>
      <div className=' text-2xl font-bold text-center'>
      -Leonardo da Vinci
      </div>
      </div>
  </div>)
}

export default Footer
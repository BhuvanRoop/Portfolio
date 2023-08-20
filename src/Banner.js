import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div className='banner' style={{position:'absolute'}}>
      <div className="header-text">
        <h1 style={{color:'white'}}>Hi,I am <span style={{color:'red'}}> Bhuvan</span></h1>
        <p style={{color:'white'}}> I am a Web Developer</p>
      </div>
      
    </div>
  )
}

export default Banner
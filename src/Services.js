import React, { useState,useEffect } from 'react'
import './services.css'
import work1 from './work-1.png'
import work2 from './work-2.png'
import link from './ext-link.png'
import Contact from './Contact'



const Services = () => {
    const [desc1,setDesc1]=useState(false);
    function showDesc1(){
        setDesc1(!desc1);
    }
    const [desc2,setDesc2]=useState(false);
    function showDesc2(){
        setDesc2(!desc2);
    }
  return (
    <div >
        <div className="heading" >
            <h1 style={{color:'white'}}>My Work</h1>
        </div>

        <div className="containers containers1" >
            <div className="work-1">
                <img className='work' src={work1} alt="Streaming Platform" />
                
                <div className="layer" style={{height:desc1?'100%':'0'}}>
                    <h3 style={{color:'white'}}>Web Streaming Platform</h3>
                    <p style={{color:'white'}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatibus adipisci fuga, modi exercitationem ad eius error, ullam voluptate </p>
                    <a href="https://netflix-c2e59.web.app/v" target='blank'>
                        <img className='link'  src={link} alt="" />
                    </a>
                </div>
                
            </div>
            <div className="butt">
                <button className="button" onClick={showDesc1}>{!desc1?'About':'Read Less'}</button>
            </div>
            <div className="work-2">
                <img className='work' src={work2} alt="Notes App" />
                
                <div className="layer" style={{height:desc2?'100%':'0'}}>
                    <h3 style={{color:'white'}}>Keeper App</h3>
                    <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatibus adipisci fuga, modi exercitationem ad eius error, ullam voluptate </p>
                    <a href="https://keeper-33da7.web.app/" target='blank'>
                        <img className='link'  src={link} alt="" />
                    </a>
                </div>
            </div>
            <div className="butt">
                <button className="button"  onClick={showDesc2}>{!desc2?'About':'Read Less'}</button>
            </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}


        <div className="containers containers2 " >
            <div className="work-1">
                <img className='work' src={work1} alt="Streaming Platform" />                
                <div className="layer" >
                    <h3 style={{color:'white'}}>Web Streaming Platform</h3>
                    <p style={{color:'white'}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatibus adipisci fuga, modi exercitationem ad eius error, ullam voluptate </p>
                    <a href="https://netflix-c2e59.web.app/v" target='blank'>
                        <img className='link'  src={link} alt="" />
                    </a>
                </div>
                
            </div>
            <div className="work-2">
                <img className='work' src={work2} alt="Notes App" />                
                <div className="layer" >
                    <h3 style={{color:'white'}}>Keeper App</h3>
                    <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto voluptatibus adipisci fuga, modi exercitationem ad eius error, ullam voluptate </p>
                    <a href="https://keeper-33da7.web.app/" target='blank'>
                        <img className='link'  src={link} alt="" />
                    </a>
                </div> 
            </div>
        </div>
        <Contact/>
    </div>
  )
}

export default Services
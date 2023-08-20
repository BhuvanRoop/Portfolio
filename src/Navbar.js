import React from 'react'
import './navbar.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    
  return (
    <div>
        <div className={`nav`}>
            <div className='tags'>
                <li>
                  <Link to='tags' smooth={true}>Home</Link>   
                </li>
                <li>
                  <Link to='sub-sec' smooth={true} offset={-400}>Skills</Link>
                </li>
                <li>
                  <Link to='sub-sec' smooth={true} offset={50}>Projects</Link>
                </li>
                
            </div>
            <div className="media">
                    <a target='blank' href='https://www.linkedin.com/in/irukulla-bhuvan/' className="img">
                        <img src="https://img.icons8.com/?size=512&id=8808&format=png" alt="LinkedIn" />
                    </a>
                    <a target='blank' href='https://github.com/BhuvanRoop'>
                        <img src="https://img.icons8.com/?size=512&id=106440&format=png" alt="GitHub" />
                    </a>
                    <a target='blank' href='https://www.instagram.com/bhuvi_roop/'>
                        <img src="https://img.icons8.com/?size=512&id=32309&format=png" alt="Insta" />
                    </a>
            </div>
            <Link to='contact' smooth={true}>
              <div className="connect">
                  <h3>Let's Connect</h3>
              </div>
            </Link>
            
            
        </div>
        
        
    </div>
  )
}

export default Navbar
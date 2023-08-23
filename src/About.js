import React, { useState } from 'react'
import './about.css'
import photo from './1.jpg'
import Services from './Services'

const About = () => {
    const [skills,setSkills]=useState(true);
    const [edu,setEdu]=useState(false);
    const [exp,setExp]=useState(false);
    function showSkills(){
        setSkills(true);
        setEdu(false);
        setExp(false);
    }
    function showExp(){
        setExp(true);
        setEdu(false);
        setSkills(false);
    }
    function showEdu(){
        setEdu(true);
        setSkills(false);
        setExp(false);
    }

  return (
    <div className='about-sect'>
        <div className="about-content">
            <div className="head">
                <h1 className='small-heading' style={{color:'white'}}>About Me</h1>
            </div>
            <div className="container">                
                <div className="col-1">
                    <img src={photo} alt="Photo" />
                </div>
                <div className="col-2">
                    <h1 className='big-heading' style={{color:'white'}}>About Me</h1>
                    <p style={{color:'white'}}>I am a diligent college student in my third year. I am always looking to expand my knowledge and
                    believe in holistic development. I am committed to staying ahead of industry trends. With a keen 
                    attention to detail and a proactive approach, I consistently strive for excellence in all aspects of my 
                    work.

                    </p>
                    <div className="sub-sec">
                        <p onClick={showSkills} style={{color:skills? 'red':'white'}}>Skills</p>
                        <p onClick={showExp} style={{color:exp? 'red':'white'}}>Experience</p>
                        <p onClick={showEdu} style={{color:edu? 'red':'white'}}>Education</p>
                    </div>
                    <div className="details" style={{display:!skills && 'none'}}>
                        <ul>
                            <li><span style={{fontWeight:'bold'}}>Programming Languages</span>: Java, JavaScript, C++</li>
                            <li>Object-Oriented Programming (OOP), Data Structures and Algorithms</li>
                            <li><span style={{fontWeight:'bold'}}>Web Technologies</span>:HTML, CSS, JavaScript, JSON, ReactJS, Bootstrap,Material UI,Express.js,Mongoose</li>
                            <li><span style={{fontWeight:'bold'}}>Databases</span>: MongoDB</li>
                        </ul>
                    </div>
                    <div className="details" style={{display:!exp && 'none'}}>
                        <ul>
                            <li><span style={{fontWeight:'bold'}}>Front End Developer, ChitMonks (Intern) </span>,Jun 2023-July 2023</li>
                            <li style={{color:'white',marginLeft:'10px',listStyle:'none'}}>Worked on a website for their new product -ChainMonks .I worked on the front end of the website using mainly
                            React Js, CSS , Bootstrap and javascript .</li>
                            <li><span style={{fontWeight:'bold'}}>Intern , T-Hub </span>,May 2023-Jun 2023</li>
                            <li style={{color:'white',marginLeft:'10px',listStyle:'none'}}>Worked for the Government Innovations team at T-hub . </li> 
                        </ul>
                    </div>
                    <div className="details" style={{display:!edu && 'none'}}>
                        <ul>
                            <li><span style={{fontWeight:'bold',color:'white'}}>BITS Pilani, Hyderabad Campus</span></li>
                            <li style={{color:'white',marginLeft:'10px',listStyle:'none'}}>Electronics and Communication Engineering</li>
                            <li style={{color:'white',marginLeft:'10px',listStyle:'none'}}>2021 - 2025</li>
                            <li><span style={{fontWeight:'bold',color:'white'}}>Sri Chaitanya Junior College </span></li>
                            <li style={{color:'white',marginLeft:'10px',listStyle:'none'}}>2021</li>
                            <li><span style={{fontWeight:'bold',color:'white'}}>Sentia the Global School</span></li>
                            <li style={{color:'white',marginLeft:'10px',listStyle:'none'}}>2019</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Services/>
        </div>
        
    </div>
  )
}

export default About
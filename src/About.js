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
                    <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora porro, excepturi vero cum dolorem labore nihil reiciendis numquam veritatis iusto ipsam amet, esse veniam voluptates, in debitis maiores eveniet! Sapiente?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde aut exercitationem consequuntur pariatur nam maxime deserunt iusto iste, minus voluptate natus eos voluptates quam itaque placeat illum laborum quis.
                    </p>
                    <div className="sub-sec">
                        <p onClick={showSkills} style={{color:skills? 'red':'white'}}>Skills</p>
                        <p onClick={showExp} style={{color:exp? 'red':'white'}}>Experience</p>
                        <p onClick={showEdu} style={{color:edu? 'red':'white'}}>Education</p>
                    </div>
                    <div className="details" style={{display:!skills && 'none'}}>
                        <ul>
                            <li>Skill1</li>
                            <li>Skill1</li>
                            <li>Skill1</li>
                            <li>Skill1</li>
                            <li>Skill1</li>  
                        </ul>
                    </div>
                    <div className="details" style={{display:!exp && 'none'}}>
                        <ul>
                            <li>exp1</li>
                            <li>exp1</li>
                            <li>exp1</li>
                            <li>exp1</li>
                            <li>exp1</li>  
                        </ul>
                    </div>
                    <div className="details" style={{display:!edu && 'none'}}>
                        <ul>
                            <li>edu1</li>
                            <li>edu1</li>
                            <li>edu1</li>
                            <li>edu1</li>
                            <li>edu1</li>  
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
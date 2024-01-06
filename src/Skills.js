
import React from 'react';
import './services.css';
import './skills.css';
import meter1 from './Assets/meter1.svg'
import meter2 from './Assets/meter2.svg'
import meter3 from './Assets/meter3.svg'

function Skills() {
    const data=[
        {
            "skill":'Java',
            "img":meter1,
        },
        {
            "skill":'JavaScript',
            "img":meter3
        },
        {
            "skill":'C++',
            "img":meter2
        },
        {
            "skill":'Object Oriented Pragramming',
            "img":meter3
        },
        {
            "skill":'Data Structures and Algorithms',
            "img":meter1
        },
        {
            "skill":'ReactJS',
            "img":meter1
        },
        {
            "skill":'Python',
            "img":meter2
        },
        {
            "skill":'ExpressJS',
            "img":meter2
        },
        {
            "skill":'Mongo DB',
            "img":meter2
        },
        {
            "skill":'SQL',
            "img":meter2
        },

    ]
        
    

    
  return (
    <>
        <div className="heading"  >
            <h1 style={{color:'white'}}>Skills</h1>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className="skills">
                    {data.map((item)=>(
                        <div className="skill">
                            <img src={item.img} alt='Measure'/>
                            <h3 style={{color:'white'}}>{item.skill}</h3>
                        </div>
                    ))}
            </div>
        </div>
    </>




  )
}

export default Skills
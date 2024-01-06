import React,{ useState }  from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';


 function App(){
    return (
        <div>
            <Navbar/> 
            <Banner/>
            <About/>
            
        </div>
    )
}

export default App
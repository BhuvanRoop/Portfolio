import React,{ useState }  from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavLink,Link } from 'react-router-dom';
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
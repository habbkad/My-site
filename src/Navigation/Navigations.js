

import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from '../pages/Home.js';
import Form from '../pages/Form'
import Navbars from '../components/Navbars.js';



const Navigations =()=>{
    return(
    <BrowserRouter>
    <Navbars />
    <Routes>
        <Route path="/" element={<Home/>} />
      <Route path='/form' element={<Form person='name' />}/>
    </Routes>
      
    </BrowserRouter>
    
  );
}

export default Navigations

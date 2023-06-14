import { useState } from 'react'
import Footer from './components/Footer'
import './App.css'
import Navbar from './components/Navbar'
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import OurSolutions from './pages/OurSolutions';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import Ourservices from './pages/Ourservices';
import HomeSecurity from './pages/HomeSecurity';
import SignIn from './pages/SignIn'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourServices" element={<Ourservices />} />
          <Route path="/ourSolutions" element={<OurSolutions />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/SignIn" element={<SignIn/>} />
        </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}

export default App

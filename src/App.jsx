import React, { useState } from 'react';
import Footer from './components/Footer';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OurSolutions from './pages/OurSolutions';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import OurServices from './pages/OurServices'; // Fixed import statement
import Register from './pages/Register';
import Logout from './pages/Logout';
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ourServices" element={<OurServices />} />
        <Route path="/ourSolutions" element={<OurSolutions />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/logout" element={<Logout />} /> 
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

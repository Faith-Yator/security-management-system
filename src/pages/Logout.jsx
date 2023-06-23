import React from 'react'
import './logout.css'
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const Logout = () => {
    const navigate = useNavigate() 
  
    const handleLogout = () => {
      navigate('/');
    };
  
    return (
        <div className='logout'>
      <button className="btn" onClick={handleLogout}>
      <FaSignOutAlt /> Logout</button>
      <div className='log'>
      <h1>*****Visit Our Page Again!!*****</h1>
      </div>
      </div>
    );
  };
  

export default Logout 






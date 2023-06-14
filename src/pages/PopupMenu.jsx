// PopupMenu.js

import React, { useState } from 'react';
import './PopupMenu.css';

const PopupMenu = () => {
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handleSubmit = () => {
    // Perform necessary actions with the message and location data
    console.log('Message:', message);
    console.log('Location:', location);
    
    // Close the pop-up menu
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup">
            <h3>Enter your message and location</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message..."
              className="input-field"
            />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location..."
              className="input-field"
            />
            <button onClick={handleSubmit} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMenu;

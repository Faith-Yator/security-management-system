import React, { useState } from 'react';
import './Card.css';


const Card = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='hover'>
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
    >
      <div className="icon"><img src='https://www.securexafrica.com/wp-content/uploads/2021/08/shutterstock_344298650-scaled-350x203.jpg'/></div>
      <h2>Personal security</h2>
      {isHovered && <p>"Empowering Individuals, Preserving Peace of Mind"</p>}
    </div>
     <div
     className={`card ${isHovered ? 'hovered' : ''}`}
     onClick={handleCardClick}
   >
     <div className="icon"> <img src='https://media.istockphoto.com/id/1409181133/photo/large-home-exterior-nevada.webp?b=1&s=170667a&w=0&k=20&c=8jOyZYnQ8pP0YN6X1Oc_6nxlvZV20NFlGJ6bd_3jt3M='/>
        </div>
     <h2>Home security</h2>
     {isHovered && <p>"Securing Homes, Protecting Memories"</p>}
   </div>
   <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onClick={handleCardClick}
    >
      <div className="icon"><img src='https://images.unsplash.com/photo-1575235174743-71ca6d8ac133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVudGVycHJpc2UlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'/></div>
      <h2>Enterprise security</h2>
      {isHovered && <p>
"Fortifying Enterprises, Safeguarding Success"</p>}
    </div>

   </div>
  );
};

export default Card;

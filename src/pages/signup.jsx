import React, { useState } from 'react';
import './signup.css'

const SignupButton = () => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the form values using event.target.<fieldName>.value
  };

  return (
    <div>
      <button className="signup-button" onClick={handleButtonClick}>
        Signup
      </button>
      {expanded && (
        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="userId" placeholder="User ID" required />
          <input type="text" name="userName" placeholder="User Name" required />
          <input type="password" name="password" placeholder="Password" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="roles" placeholder="Roles" required />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SignupButton;

import React, { useState } from 'react';
import './Form.css'; // Import the CSS file for styling

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    // Clear form inputs
    setName('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

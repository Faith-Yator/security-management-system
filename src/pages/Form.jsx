import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

const Form = () => {
  const [Newslaterid, setNewslaterid] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const data = {
      Newslaterid: Newslaterid,
      Name: Name,
      Email: Email
    };

    console.log('Newslaterid:', Newslaterid);
    console.log('Name:', Name);
    console.log('Email:', Email);

    axios.post('http://localhost:3000/Newslaters/new', data)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    // Clear form inputs
    setNewslaterid('');
    setName('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Newslaterid">Newslaterid:</label>
        <input
          type="text"
          id="Newslaterid"
          value={Newslaterid}
          onChange={(e) => setNewslaterid(e.target.value)}
          required
        />

        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="Email">Email:</label>
        <input
          type="Email"
          id="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

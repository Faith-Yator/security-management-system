import React from 'react';
import './Form.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { apiDomain } from './utils/utils.jsx';

const schema = yup.object().shape({
  Newslaterid: yup.string().required('Newslaterid is required'),
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid email').required('Email is required'),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post('${apiDomain}Newslaters/new', data)
      .then((response) => {
        console.log(response.data);
        alert('Sent Successfully');
      })
      .catch((error) => {
        console.error(error);
        alert('Please register your account');
        Navigate('/register');
      });
    reset();
  };

  // Check if the user is not registered and display an alert
  // const isUserNotRegistered = true; // Replace with your logic to determine if the user is not registered

  // if (isUserNotRegistered) {
  //   return (
  //     <div className="form-container">
  //       <h3>Please register your account</h3>
  //       <button onClick={() => Navigate('/register')}>Register</button>
  //     </div>
  //   );
  // }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="Newslaterid">Newslaterid:</label>
        <input type="text" id="Newslaterid" {...register('Newslaterid')} />
        {errors.Newslaterid && <span>{errors.Newslaterid.message}</span>}

        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" {...register('Name')} />
        {errors.Name && <span>{errors.Name.message}</span>}

        <label htmlFor="Email">Email:</label>
        <input type="email" id="Email" {...register('Email')} />
        {errors.Email && <span>{errors.Email.message}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

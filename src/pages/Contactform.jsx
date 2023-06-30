import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ContactForm.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  FirstName: yup.string().required(),
  LastName: yup.string().required(),
  PhoneNumber: yup.string().required(),
  Email: yup.string().email().required(),
  Location: yup.string().required(),
  Contactusid: yup.string().required(),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add the reset method from react-hook-form
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);

    Axios.post('http://localhost:3000/Contactuss/new', data)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        navigate('/Logout');
        reset(); 
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <input
          type="text"
          name="firstName"
          placeholder="FirstName"
          {...register('FirstName')}
        />
        {errors.FirstName && <p>{errors.FirstName.message}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          {...register('LastName')}
        />
        {errors.LastName && <p>{errors.LastName.message}</p>}

        <input
          type="text"
          name="phoneNumber"
          placeholder="PhoneNumber"
          {...register('PhoneNumber')}
        />
        {errors.PhoneNumber && <p>{errors.PhoneNumber.message}</p>}

        <input
          type="text"
          name="email"
          placeholder="Email"
          {...register('Email')}
        />
        {errors.Email && <p>{errors.Email.message}</p>}

        <input
          type="text"
          name="location"
          placeholder="Location"
          {...register('Location')}
        />
        {errors.Location && <p>{errors.Location.message}</p>}

        <input
          type="text"
          name="Contactusid"
          placeholder="Contactusid"
          {...register('Contactusid')}
        />
        {errors.Contactusid && <p>{errors.Contactusid.message}</p>}

        <button type="submit">Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './SignIn.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const schema = yup.object().shape({
    userName: yup.string().required('UserName is required!!'),
    password: yup.string().required('Password is required!!'),
    roles: yup.string().required('Roles is required!!'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });
 const Navigate=useNavigate();
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);

    // Example: Making a POST request using Axios
    Axios.post('http://localhost:3000/auth/SignIn', data)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        reset(); // Reset the form fields after successful submission
        Navigate('/Register')
      })
      .catch((error) => {
        // Handle error
        console.error(error);
        
      });
  };

  return (
    <div className='formsignin'>
      <h1>SignIn</h1>
      <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="userName" placeholder="UserName" {...register('userName')} />
        <span className="error">{errors.userName?.message}</span>
        <input type="password" name="password" placeholder="Password" {...register('password')} />
        <span className="error">{errors.password?.message}</span>
        <input type="text" name="roles" placeholder="Roles" {...register('roles')} />
        <span className="error">{errors.roles?.message}</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;

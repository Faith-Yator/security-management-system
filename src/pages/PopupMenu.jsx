import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './PopupMenu.css';
import { FiX } from 'react-icons/fi';
import axios from 'axios';

const PopupMenu = () => {
  const validationSchema = yup.object().shape({
    Popupid: yup.string().required('ID is required'),
    Message: yup.string().required('Message is required'),
    Location: yup.string().required('Location is required'),
   
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isPopupVisible, setPopupVisible] = useState(true);

  const onSubmit = (data) => {
    // Perform necessary actions with the form data
    console.log('Form data:', data);

    axios.post('http://localhost:3000/Popups/new', data)
    .then((response) => {
      // Handle successful response
      console.log(response.data);
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });

    // Close the pop-up menu
    setPopupVisible(false);
  };

  const handleClose = () => {
    // Close the pop-up menu
    setPopupVisible(false);
  };

  return (
    <>
      {isPopupVisible && (
        <div className="popup-container">
          <div className="popup">
            <h3>Enter your message and location</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <input
                type="text"
                {...register('Popupid')}
                placeholder="Enter your ID..."
                className="input-field"
              />
              {errors.Popupid && <p>{errors.Popupid.message}</p>}

              <textarea
                {...register('Message')}
                placeholder="Enter your message..."
                className="input-field"
              />
              {errors.Message && <p>{errors.Message.message}</p>}

              <input
                type="text"
                {...register('Location')}
                placeholder="Enter your location..."
                className="input-field"
              />
              {errors.Location && <p>{errors.Location.message}</p>}

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>

            <i onClick={handleClose} className="close-button">
              <FiX />
            </i>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupMenu;

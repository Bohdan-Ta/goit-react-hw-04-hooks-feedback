import React from 'react';
import PropTypes from 'prop-types';

import imgSmile from '../../images/so-so.png';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <p className={s.message}>
      {message}
      <img src={imgSmile} alt="no feedbacks" className={s.smile}></img>
    </p>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

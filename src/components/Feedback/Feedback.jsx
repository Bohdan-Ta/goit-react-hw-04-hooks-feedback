import React from 'react';
import PropTypes from 'prop-types';

import Buttons from '../Buttons/Buttons';
import s from './Feedback.module.css';

export default function Feedback({ options, onIncrementFeedback }) {
  return (
    <>
      <ul className={s.list}>
        {options.map(key => (
          <li key={key} className={s.item}>
            <Buttons
              onIncrementFeedback={onIncrementFeedback}
              nameFeedback={key}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onIncrementFeedback: PropTypes.func.isRequired,
};

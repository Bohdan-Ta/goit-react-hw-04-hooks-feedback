import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

export default function Statistics({
  statistics,
  total,
  persantageGoodFeedback,
}) {
  return (
    <ul className={s.wrapper}>
      {statistics.map(([key, value]) => (
        <li className={`${s.list}`} key={key}>
          <p className={s.itemLikes}>{key}:</p>
          <span className={s.data}>{value}</span>
        </li>
      ))}
      <li className={s.list}>
        <p className={s.itemLikes}>Total: </p>
        <span className={s.data}>{total}</span>
      </li>
      <li className={s.list}>
        <p className={s.itemLikes}>Positive:</p>
        <span className={s.data}>{persantageGoodFeedback} %</span>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.number.isRequired,
  persantageGoodFeedback: PropTypes.number.isRequired,
};

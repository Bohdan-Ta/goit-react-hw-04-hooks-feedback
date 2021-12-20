import React from "react";
import PropTypes from "prop-types";
import randomColor from "../../helpers/randomColor";
import s from "../Buttons/Buttons.module.css";

export default function Buttons({ onIncrementFeedback, nameFeedback }) {
  return (
    <button
      type="button"
      onClick={() => onIncrementFeedback(nameFeedback)}
      className={s.button}
      style={{
        backgroundColor: randomColor(),
      }}
    >
      {nameFeedback}
    </button>
  );
}

Buttons.propTypes = {
  onIncrementFeedback: PropTypes.func.isRequired,
  nameFeedback: PropTypes.string.isRequired,
};

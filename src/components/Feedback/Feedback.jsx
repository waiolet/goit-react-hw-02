import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

const Feedback = ({ voteData, total, positivePercentage }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>Good: {voteData.good}</li>
        <li className={s.listItem}>Neutral: {voteData.neutral}</li>
        <li className={s.listItem}>Bad: {voteData.bad}</li>
        <li className={s.listItem}>Total: {total}</li>
        <li className={s.listItem}>
          Positive: {positivePercentage.toFixed(2)}%
        </li>
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  voteData: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;



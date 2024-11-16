import PropTypes from "prop-types";
import s from "./Options.module.css";

const Options = ({ totalFeedback, onFeedbackUpdate, onReset }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li>
          <button onClick={() => onFeedbackUpdate("good")} className={s.button}>
            Good
          </button>
        </li>
        <li>
          <button
            onClick={() => onFeedbackUpdate("neutral")}
            className={s.button}
          >
            Neutral
          </button>
        </li>
        <li>
          <button onClick={() => onFeedbackUpdate("bad")} className={s.button}>
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={onReset} className={s.button}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

Options.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  onFeedbackUpdate: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Options;
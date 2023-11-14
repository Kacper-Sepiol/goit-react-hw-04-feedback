import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onLeaveFeedback,
  good,
  neutral,
  bad,
  sGood,
  sNeutral,
  sBad,
}) => (
  <>
    <button
      type="button"
      onClick={() => {
        sGood(good + 1);
        onLeaveFeedback();
      }}
    >
      Good
    </button>
    <button
      type="button"
      onClick={() => {
        sNeutral(neutral + 1);
        onLeaveFeedback();
      }}
    >
      Neutral
    </button>
    <button
      type="button"
      onClick={() => {
        sBad(bad + 1);
        onLeaveFeedback();
      }}
    >
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  sGood: PropTypes.func.isRequired,
  sNeutral: PropTypes.func.isRequired,
  sBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;

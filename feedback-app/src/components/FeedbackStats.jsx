import React from 'react';
import PropTypes from 'prop-types';

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating:
        PropTypes.number.isRequired,
    })
  ),
};

function FeedbackStats({ feedback }) {
  //calculate ratings average
  let average = (
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length
  ).toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating:{' '}
        {isNaN(average) ? 0 : average}
      </h4>
    </div>
  );
}

export default FeedbackStats;

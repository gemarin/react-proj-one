import React, {
  useContext,
} from 'react';
import Card from './shared/Card.jsx';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

import FeedbackContext from '../context/FeedbackContext.js';

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(
    FeedbackContext
  );
  return (
    <Card>
      <div className='num-display'>
        {item.rating}
      </div>
      <button
        onClick={() =>
          deleteFeedback(item.id)
        }
        className='close'
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>
        {item.text}
      </div>
    </Card>
  );
}

export default FeedbackItem;

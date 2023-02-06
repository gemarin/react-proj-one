import React, {
  useState,
  useContext,
} from 'react';

import Card from './shared/Card.jsx';
import Button from './shared/Button.jsx';
import RatingSelect from './RatingSelect.jsx';

import FeedbackContext from '../context/FeedbackContext.js';

function FeedbackForm() {
  const { addFeedback } = useContext(
    FeedbackContext
  );

  const [text, setText] = useState('');
  const [rating, setRating] =
    useState(10);
  const [btnDisabled, setBtnDisabled] =
    useState(true);
  const [message, setMessage] =
    useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (
      text !== '' &&
      text.trim().length <= 10
    ) {
      setBtnDisabled(true);
      setMessage(
        'Review must be at least 10 characters'
      );
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      addFeedback(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>
          How would you rate your
          experience with us?
        </h2>
        <RatingSelect
          select={setRating}
          selected={rating}
        />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button
            isDisabled={btnDisabled}
            type='submit'
          >
            Send
          </Button>
        </div>

        {message && (
          <div className='message'>
            {message}
          </div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;

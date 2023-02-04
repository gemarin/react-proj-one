import { useState } from 'react';
import Header from './components/Header.jsx';

import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList.jsx';

const deleteFeedback = (id) => {
  console.log('App', id);
};

function App() {
  const [feedback, setFeedback] =
    useState(FeedbackData);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}

export default App;

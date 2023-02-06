import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header.jsx';
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList.jsx';
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';

import AboutPage from './pages/AboutPage.jsx';
import AboutIconLink from './components/AboutIconLink.jsx';

function App() {
  const [feedback, setFeedback] =
    useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (
      window.confirm(
        'Are you sure you want to delete?'
      )
    ) {
      setFeedback(
        feedback.filter(
          (item) => item.id !== id
        )
      );
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([
      newFeedback,
      ...feedback,
    ]);
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm
                  handleAdd={
                    addFeedback
                  }
                />
                <FeedbackStats
                  feedback={feedback}
                />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={
                    deleteFeedback
                  }
                />
              </>
            }
          ></Route>
          <Route
            path='/about'
            element={<AboutPage />}
          />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;

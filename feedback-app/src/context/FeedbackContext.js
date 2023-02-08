import {
  createContext,
  useState,
} from 'react';

import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({
  children,
}) => {
  const [feedback, setFeedback] =
    useState(FeedbackData);

  const [
    editedFeedback,
    setEditedFeedback,
  ] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([
      ...feedback,
      newFeedback,
    ]);
  };

  const editFeedback = (item) => {
    setEditedFeedback({
      item,
      edit: true,
    });
  };

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

  const updateFeedback = (
    id,
    newItem
  ) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id
          ? { ...item, ...newItem }
          : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editedFeedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

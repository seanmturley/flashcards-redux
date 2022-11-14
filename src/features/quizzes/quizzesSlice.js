import { createSlice } from "@reduxjs/toolkit";

import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = {
        ...action.payload
      };
    }
  }
});

export const addQuizToTopic = (quiz) => {
  return (dispatch, getState) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: quiz.id, topicId: quiz.topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [], // Array to store selected answers
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
    moveNextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePrevAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    storeAnswerAction: (state, action) => {
      const { index, answer } = action.payload;
      const updatedAnswers = [...state.answers];
      updatedAnswers[index] = answer;
      return {
        ...state,
        answers: updatedAnswers,
      };
    },
  },
});

export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  storeAnswerAction,
} = questionReducer.actions;
export default questionReducer.reducer;

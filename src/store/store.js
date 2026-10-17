import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice.js";
import themeReducer from "./themeSlice.js";
import { saveQuestions, saveTheme } from "../storage.js";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    theme: themeReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveQuestions(state.questions.list);
  saveTheme(state.theme.mode);
});

export default store;

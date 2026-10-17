import { createSlice } from "@reduxjs/toolkit";
import { loadTheme } from "../storage.js";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: loadTheme(),
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

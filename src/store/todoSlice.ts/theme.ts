import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "dark" | "light";
}

const init: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: init,
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

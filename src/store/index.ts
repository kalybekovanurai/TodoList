import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice.ts/todoSlice";
import themeReducer from "./todoSlice.ts/theme";
import languageReducer from "./todoSlice.ts/language";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
    lang: languageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
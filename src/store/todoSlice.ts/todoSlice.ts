import { createSlice } from "@reduxjs/toolkit";
interface TodoTypes {
  id: number;
  todo: string;
  completed: boolean;
}

const initialState: TodoTypes[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addNewTodo: (state, action) => {
      const { payload } = action;
      state.push(payload);
    },
    toggleTodo(state, action) {
      state.map((el) => {
        if (el.id === action.payload) {
          return (el.completed = !el.completed);
        }
        return el;
      });
    },
  },
});

export const { addNewTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

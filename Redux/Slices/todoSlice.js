// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "todo-slice",
//   initialState: {
//     todos: [],
//     completedTodos: [],
//     unCompletedTodos: [],
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = action.payload;
//       state.todos = [...state.todos, newTodo];
//       state.unCompletedTodos = [...state.unCompletedTodos, newTodo];
//     },
//     completeTodo: (state, action) => {
//       const todo = action.payload;
//       state.completedTodos = [...state.completedTodos, todo];
//       const id = todo.id;
//       const newUncompletedTodos = state.unCompletedTodos.filter(
//         (todo) => todo.id !== id
//       );
//       state.unCompletedTodos = newUncompletedTodos;
//       // console.log(todo);
//       // console.log(`dddd  ${state.completedTodos}`);
//     },
//     unCompleteTodo: (state, action) => {
//       const todo = action.payload;
//       // console.log(todo);
//       state.unCompletedTodos = todo;
//       // console.log(state.unCompletedTodos);
//     },
//     deleteTodo: (state, action) => {
//       const id = action.payload;
//       const newTodos = state.todos.filter((todo) => todo.id !== id);
//       const newUncompletedTodos = state.unCompletedTodos.filter(
//         (todo) => todo.id !== id
//       );
//       const newCompletedTodos = state.completedTodos.filter(
//         (todo) => todo.id !== id
//       );
//       // console.log(newTodos);
//       state.todos = newTodos;
//       state.unCompletedTodos = newUncompletedTodos;
//       state.completedTodos = newCompletedTodos;
//     },
//   },
// });

// export const { addTodo, completeTodo, deleteTodo, unCompleteTodo } =
//   todoSlice.actions;

// export default todoSlice;




import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice;

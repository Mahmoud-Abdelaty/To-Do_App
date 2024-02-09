import { configureStore } from "@reduxjs/toolkit";
import completedTodosSlice from "./completedSlice";
import unCompletedTodosSlice from "./uncompletedSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    completedTodos: completedTodosSlice.reducer,
    unCompletedTodos: unCompletedTodosSlice.reducer,
  },
});

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todo";
// import completedTodosReducer from "./completedTodos";
// import unCompletedTodosReducer from "./unCompletedTodos";

// const rootReducer = combineReducers({
//   todo: todoReducer,
//   completedTodos: completedTodosReducer,
//   unCompletedTodos: unCompletedTodosReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

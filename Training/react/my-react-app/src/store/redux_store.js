import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../reducer/todo_reducer';
import registrationReducer from '../reducer/registrationReducer';
import loginReducer from '../reducer/loginReducer';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    registration: registrationReducer,
    login:loginReducer
  },
});

export default store;
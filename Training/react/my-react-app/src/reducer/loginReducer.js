import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  password: '',
  isLoggedIn: false,
  loginError: null,
  currentUser: null, 
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    validateLogin: (state, action) => {
      const { username, password, users } = action.payload;
      const user = users.find((user) => user.username === username && user.password === password);
      if (user) {
        state.currentUser = user;
        state.isLoggedIn = true;
        state.loginError = null;
      } else {
        state.isLoggedIn = false;
        state.loginError = 'Invalid email or password';
        state.currentUser = null;
      }
    },
    resetForm: (state) => {
      state.username = '';
      state.password = '';
      state.isLoggedIn = false;
      state.loginError = null;
    },
    logout: (state) => {
        state.username = '';
        state.password = '';
        state.isLoggedIn = false;
        state.loginError = null;
        state.currentUser = null;
      },
  },
});

export const { setUsername, setPassword, validateLogin, resetForm,logout } = loginSlice.actions;

export default loginSlice.reducer;
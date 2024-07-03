// registrationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  username: "",
  password: "",
  confirmPassword: "",
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    registerUser: (state) => {
      const newUser = {
        username: state.username,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };
      state.users.push(newUser);
      state.username = "";
      state.password = "";
      state.confirmPassword = "";
    },
  },
});

export const { setUsername, setPassword, setConfirmPassword, registerUser } =
  registrationSlice.actions;

export default registrationSlice.reducer;

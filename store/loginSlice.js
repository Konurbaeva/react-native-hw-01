import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;



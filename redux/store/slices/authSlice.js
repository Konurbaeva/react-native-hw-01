import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({ username, password }, { rejectWithValue }) => {
//     try {
//       const response = await fetch('https://example.com/login', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (!data.success) {
//         return rejectWithValue(data.message);
//       }

//       return data.user;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;

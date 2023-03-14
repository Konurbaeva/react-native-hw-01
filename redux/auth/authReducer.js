import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:'auth',
    initialState: {
        userId: null,
        stateChange: null,
        nickName: null
    },
    reducers:{
    updateUserProfile: (state, {payload}) => ({
        ...state,
       userId: payload.userId,
       nickName: payload.nickName
    }),
    authStateChange: (state, { payload }) => ({
        ...state,
        stateChange: payload.stateChange,
      }),
    }
})

console.log("authSlice: ", authSlice)
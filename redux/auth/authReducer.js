import { createSlice } from "@reduxjs/toolkit";

const state = {
    userId: null,
    stateChange: null,
    nickName: null
}

export const authSlice = createSlice({
    name:'auth',
    initialState: state,
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
    authSignOut: () => state
    }
})

console.log("authSlice: ", authSlice)
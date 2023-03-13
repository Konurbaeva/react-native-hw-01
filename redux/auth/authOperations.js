import { app } from "../../firebase/config"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { authSlice } from "./authReducer";

export const authSignUpUser = ({ email, password }) => async (
  dispatch,
  getState
) => {

  let auth = getAuth()
  console.log("email, password ", email, password);
  try {
  
   const user = await createUserWithEmailAndPassword(auth, email, password)

   dispatch(authSlice.actions.updateUserProfile({userId: user.user.uid}))

   console.log("user", user);
   console.log("user.user.uid: ", user.user.uid);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
  
export const authSignInUser = ({ email, password }) => async (
  dispatch,
  getState
) => {

  let auth = getAuth()
  console.log("email, password ", email, password);
  try {
  // const user = app.auth().createUserWithEmailAndPassword(email, password)
   const user = await signInWithEmailAndPassword(auth, email, password)
   console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch, getState) => {};
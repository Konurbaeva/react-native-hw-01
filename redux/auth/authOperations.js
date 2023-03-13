import { app } from "../../firebase/config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const authSignUpUser = ({ email, password }) => async (
  dispatch,
  getState
) => {

  let auth = getAuth()
  console.log("email, password ", email, password);
  try {
  // const user = app.auth().createUserWithEmailAndPassword(email, password)
   const user = createUserWithEmailAndPassword(auth, email, password)
   console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
  

export const authSignInUser = () => async (dispatch, getState) => {};
export const authSignOutUser = () => async (dispatch, getState) => {};
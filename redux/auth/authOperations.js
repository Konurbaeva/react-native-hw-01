import { auth } from '../../firebase/config';
// import auth from "../../firebase/config"

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { authSlice } from './authReducer';

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

export const authSignUpUser =
  ({ email, password, nickName }) =>
  async (dispatch, getState) => {

    try {
      
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      dispatch(updateUserProfile({ userId: user.uid }));
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    let auth = getAuth();
    console.log('email, password ', email, password);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  await signOut();
  dispatch(authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged(user => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
      };

      dispatch(authStateChange({ stateChange: true }));
      dispatch(updateUserProfile(userUpdateProfile));
    }
  });
};

// export const authStateChangeUser = () => async (dispatch, getState) => {
//  try {
//   await onAuthStateChanged(user => {
//     if (user) {
//       const userUpdateProfile = {
//         userId: user.uid,
//       };

//       dispatch(authStateChange({ stateChange: true }));
//       dispatch(updateUserProfile(userUpdateProfile));
//     }
//   });
//  } catch (error) {
//   console.log('error', error);
//   console.log('error.message', error.message);
// }
// };
import { auth } from '../../firebase/config';
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
    console.log('email, password ', email, password);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;
      dispatch(authStateChange({ userId: user.uid }));
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignOutUser =
  ({ email, password, nickName }) =>
  async (dispatch, getState) => {
    try {
      await signOut(auth, email, password);
      const user = await auth.currentUser;

      dispatch(authSignOut(user));
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authStateChangeUser = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, user => {
      if (user) {
        const userUpdateProfile = {
          userId: user.uid,
        };

        dispatch(authStateChange({ stateChange: true }));
        dispatch(updateUserProfile(userUpdateProfile));
      }
    });
  } catch (error) {
    console.log('error', error);
    console.log('error.message', error.message);
  }
};

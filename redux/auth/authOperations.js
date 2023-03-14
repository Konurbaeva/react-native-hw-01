import { app } from '../../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';

import { authSlice } from './authReducer';

export const authSignUpUser =
  ({ email, password, nickName }) =>
  async (dispatch, getState) => {
    let auth = getAuth();
    console.log('AUTH ', auth);
    try {
      // const user = await createUserWithEmailAndPassword(auth, email, password)
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
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
      // const user = app.auth().createUserWithEmailAndPassword(email, password)
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('user', user);
    } catch (error) {
      console.log('error', error);
      console.log('error.message', error.message);
    }
  };

export const authSignOutUser = () => async (dispatch, getState) => {
  let auth = getAuth();
  await auth.signOut();

  dispatch(authSlice.actions.authSignOut());
};

export const authStateChangeUser = () => async (dispatch, getState) => {
  await auth.onAuthStateChanged(user => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
      };

      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    }
  });
};

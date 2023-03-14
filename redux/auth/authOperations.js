import { app } from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { authSlice } from './authReducer';

// export const authSignUpUser =
//   ({ email, password}) =>
//   async (dispatch, getState) => {
//     let auth = getAuth();
//     console.log('AUTH ', auth);
//     try {
//       // const user = await createUserWithEmailAndPassword(auth, email, password)
//       await createUserWithEmailAndPassword(auth, email, password);

//       const user = await auth.currentUser;

//       // user.updateProfile({
//       //    displayName: email,
//       // });
//        user.updateProfile({
//         displayName: email,
//        })

//       const { displayName } = user;
//       console.log('DISPLAYNAME ------------------- ', user.displayName);
//       console.log('USER ------------------- ', user);

//       const userUpdateProfile = {
//         userId: user.uid,
//         nickName: displayName,
//       };

//       dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));

//       // dispatch(authSlice.actions.updateUserProfile({userId: user.user.uid}))
//     } catch (error) {
//       console.log('error', error);
//       console.log('error.message', error.message);
//     }
//   };

export const authSignUpUser =
  ({ email, password}) =>
  async (dispatch, getState) => {
    let auth = getAuth();
    console.log('AUTH ', auth);
    try {
      // const user = await createUserWithEmailAndPassword(auth, email, password)
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      //  user.updateProfile({
      //   displayName: email,
      //  })
      updateProfile({
        displayName: email,
       })

      const { displayName } = user;
      console.log('DISPLAYNAME ------------------- ', user.displayName);
      console.log('USER ------------------- ', user);

      const userUpdateProfile = {
        userId: user.uid,
        nickName: user.displayName,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));

      // dispatch(authSlice.actions.updateUserProfile({userId: user.user.uid}))
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

export const authSignOutUser = () => async (dispatch, getState) => {};

// import db from '../../firebase/config';
import db from '../../firebase/config'
import firebase from '../../firebase/config'

// export const authSignUpUser = ({ email, password }) => async (
//     dispatch,
//     getState
//   ) => {
//     console.log("email, password ", email, password);
//     try {
//       const user = await db
//         .auth()
//         .createUserWithEmailAndPassword(email, password);
//       console.log("user", user);
//     } catch (error) {
//       console.log("error", error);
//       console.log("error.message", error.message);
//     }
//   };

export const authSignUpUser = ({ email, password }) => async (
  dispatch,
  getState
) => {
  console.log("email, password ", email, password);
  try {
    const user = firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log("user", user);
  } catch (error) {
    console.log("error", error);
    console.log("error.message", error.message);
  }
};
  

export const authSignInUser = () => async (dispatch, getState) => {};
export const authSignOutUser = () => async (dispatch, getState) => {};
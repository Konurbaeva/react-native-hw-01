import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5bBmrs4O7VzueRc-QqRoQxpwHRP_uiLk",
  authDomain: "rn-social-22319.firebaseapp.com",
  projectId: "rn-social-22319",
  storageBucket: "rn-social-22319.appspot.com",
  messagingSenderId: "891645863566",
  appId: "1:891645863566:web:ad8f32beac463f4b2a0bdf",
  measurementId: "G-4ES172CGDF"
};

/* const app = initializeApp(firebaseConfig);
export default app */

export const app = initializeApp(firebaseConfig);
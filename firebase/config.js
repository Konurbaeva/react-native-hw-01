import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

import "firebase/storage"
import "firebase/firestore"
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5bBmrs4O7VzueRc-QqRoQxpwHRP_uiLk",
  authDomain: "rn-social-22319.firebaseapp.com",
  projectId: "rn-social-22319",
  storageBucket: "rn-social-22319.appspot.com",
  messagingSenderId: "891645863566",
  appId: "1:891645863566:web:ad8f32beac463f4b2a0bdf",
  measurementId: "G-4ES172CGDF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth}
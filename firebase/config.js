import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5bBmrs4O7VzueRc-QqRoQxpwHRP_uiLk",
    authDomain: "rn-social-22319.firebaseapp.com",
    projectId: "rn-social-22319",
    storageBucket: "rn-social-22319.appspot.com",
    messagingSenderId: "891645863566",
    appId: "1:891645863566:web:ad8f32beac463f4b2a0bdf",
    measurementId: "G-4ES172CGDF"
  };
  
//   firebase.initializeApp(firebaseConfig);
  
//   const auth = firebase.auth();
  
//   export { auth };
export default firebase.initializeApp(firebaseConfig);
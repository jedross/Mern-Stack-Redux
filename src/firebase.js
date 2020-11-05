
import firebase from 'firebase/app';
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6Ou3n__bgS3uRlPZfjkwVlVidEVOWK5o",
    authDomain: "ecommerce2test.firebaseapp.com",
    databaseURL: "https://ecommerce2test.firebaseio.com",
    projectId: "ecommerce2test",
    storageBucket: "ecommerce2test.appspot.com",
    messagingSenderId: "825640373223",
    appId: "1:825640373223:web:ff9ce5f07003876b330b42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

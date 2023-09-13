// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider}from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtQYMiWPXOmyAGgz1o7gJ0R33BAsA692c",
  authDomain: "clone-f56a9.firebaseapp.com",
  projectId: "clone-f56a9",
  storageBucket: "clone-f56a9.appspot.com",
  messagingSenderId: "221180407303",
  appId: "1:221180407303:web:5bc6fa9a7ce7d8876dc4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth() ;
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuyytdNjQA3tk3CQcl24Yci3NoseQs3Pw",
  authDomain: "travel-guru-c98a7.firebaseapp.com",
  projectId: "travel-guru-c98a7",
  storageBucket: "travel-guru-c98a7.firebasestorage.app",
  messagingSenderId: "1013661308214",
  appId: "1:1013661308214:web:e2aa0a70067f8d1c47cf97",
  measurementId: "G-J0Q6YHSJZK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

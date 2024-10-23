// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkFYtvYn_iF2XukSKNbjf9T680fyqZcjc",
  authDomain: "netflixgpt-47493.firebaseapp.com",
  projectId: "netflixgpt-47493",
  storageBucket: "netflixgpt-47493.appspot.com",
  messagingSenderId: "187790461275",
  appId: "1:187790461275:web:0cf4d9a88b4a9b5767b27e",
  measurementId: "G-BK0D3B4ERH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

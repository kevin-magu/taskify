// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5YljcBwj82a6r7P-f0osro4KqnBj7Zrw",
  authDomain: "takskify.firebaseapp.com",
  projectId: "takskify",
  storageBucket: "takskify.appspot.com",
  messagingSenderId: "457377705397",
  appId: "1:457377705397:web:a90b7b342064ababd07dfc",
  measurementId: "G-ZV1LJRG3JT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
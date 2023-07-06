import {initializeApp} from "firebase/app"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB5YljcBwj82a6r7P-f0osro4KqnBj7Zrw",
    authDomain: "takskify.firebaseapp.com",
    projectId: "takskify",
    storageBucket: "takskify.appspot.com",
    messagingSenderId: "457377705397",
    appId: "1:457377705397:web:a90b7b342064ababd07dfc",
    measurementId: "G-ZV1LJRG3JT"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
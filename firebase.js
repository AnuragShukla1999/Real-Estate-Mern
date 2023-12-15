// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e6de0.firebaseapp.com",
  projectId: "mern-estate-e6de0",
  storageBucket: "mern-estate-e6de0.appspot.com",
  messagingSenderId: "878477065430",
  appId: "1:878477065430:web:92dca3b580fa53f3b15d77"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
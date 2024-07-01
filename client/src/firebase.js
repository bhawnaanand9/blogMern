// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ba48d.firebaseapp.com",
  projectId: "mern-blog-ba48d",
  storageBucket: "mern-blog-ba48d.appspot.com",
  messagingSenderId: "623700859581",
  appId: "1:623700859581:web:3c5a599d10401d2fe4b5d4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

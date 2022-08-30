//===========
//
//=== Firebase configuration

//==========
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjTCHd_bQCSkKwJbAt7Yh9btLCuCWw5ms",
  authDomain: "node-aa8fc.firebaseapp.com",
  projectId: "node-aa8fc",
  storageBucket: "node-aa8fc.appspot.com",
  messagingSenderId: "187884234392",
  appId: "1:187884234392:web:489dc23ceae9feab0fd2ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

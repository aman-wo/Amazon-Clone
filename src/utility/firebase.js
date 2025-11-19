// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'   

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHvhMXEWfRJ6VRRQSGwbla26drvPLxMp0",
  authDomain: "clone-d845a.firebaseapp.com",
  projectId: "clone-d845a",
  storageBucket: "clone-d845a.firebasestorage.app",
  messagingSenderId: "106138548456",
  appId: "1:106138548456:web:462c27e457886f6719315d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const db = app.firestore();
export { auth };
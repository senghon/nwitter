import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeYuqvIjrBdrK7ywbuK_2kQ5-ubmrofPA",
  authDomain: "nwitter-385cc.firebaseapp.com",
  projectId: "nwitter-385cc",
  storageBucket: "nwitter-385cc.appspot.com",
  messagingSenderId: "704628233922",
  appId: "1:704628233922:web:1861d262b1f538abd2cd5b",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const authService = getAuth();
export const db = getFirestore();

export default firebase;

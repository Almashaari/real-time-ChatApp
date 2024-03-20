// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCrV3FKvjLxe2Cbbb8rY-FinDSzJwKorBE",
    authDomain: "chat-app-3e86a.firebaseapp.com",
    projectId: "chat-app-3e86a",
    storageBucket: "chat-app-3e86a.appspot.com",
    messagingSenderId: "929604297538",
    appId: "1:929604297538:web:de15b1ab5356520cec5edb",
    measurementId: "G-VRHCJ6KH1B"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyADKRc4EOnlFxDvF_tkhktC5wbHn4q8uZA",
    authDomain: "chat-app-ad38b.firebaseapp.com",
    projectId: "chat-app-ad38b",
    storageBucket: "chat-app-ad38b.appspot.com",
    messagingSenderId: "946767983867",
    appId: "1:946767983867:web:54952ded7a161bf8ecec5e",
    measurementId: "G-3KQ1VQN104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWzBVrkq_KYnupz5Oc68ggy51bytzHdHk",
  authDomain: "focusnest-cfc5c.firebaseapp.com",
  projectId: "focusnest-cfc5c",
  storageBucket: "focusnest-cfc5c.appspot.com",
  messagingSenderId: "1059483111519",
  appId: "1:1059483111519:web:04eb385b683f2f984ccbea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
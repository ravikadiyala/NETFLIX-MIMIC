// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNrNVWZ-LW_lOBDH7xPCZoV5ZQJUsvppI",
  authDomain: "netflix-mimic-7cd0c.firebaseapp.com",
  projectId: "netflix-mimic-7cd0c",
  storageBucket: "netflix-mimic-7cd0c.appspot.com",
  messagingSenderId: "700890542632",
  appId: "1:700890542632:web:2b099518b5ea3d9ef0fb1d",
  measurementId: "G-QKG0NYGRVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
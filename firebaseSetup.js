// firebaseSetup.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIKqtY8mnUAIBAdVmUg5HDPUZOpGnNG4",
  authDomain: "tracker-18548.firebaseapp.com",
  projectId: "tracker-18548",
  storageBucket: "tracker-18548.appspot.com",
  messagingSenderId: "1019124496822",
  appId: "1:1019124496822:web:2e61d17014807557a3a917",
  measurementId: "G-44V3CKRWTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

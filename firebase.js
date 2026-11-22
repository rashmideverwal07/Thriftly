
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADLWC4x5v7MfGExWBsqQRyHwWqthpGa7Y",
  authDomain: "thriftly-d7322.firebaseapp.com",
  projectId: "thriftly-d7322",
  storageBucket: "thriftly-d7322.firebasestorage.app",
  messagingSenderId: "741945285533",
  appId: "1:741945285533:web:38ea4908b085eb13f92d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

// Initialize Firestore Database
export const db = getFirestore(app);

console.log("Thriftly Firebase connected!");

// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Your Firebase config
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);// Firebase core imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHLcVg8u_6UrVJ2wTtrIoQv7iCPtdcLA",
  authDomain: "emaithworld-56aa8.firebaseapp.com",
  projectId: "emaithworld-56aa8",
  storageBucket: "emaithworld-56aa8.firebasestorage.app",
  messagingSenderId: "377667022836",
  appId: "1:377667022836:web:3e4f6eec95828cedfe53a1",
  measurementId: "G-SMTN3DS2ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database (to store your messages, love notes, promises, etc.)
export const db = getFirestore(app);


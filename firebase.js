import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg53f3iIDh4and5MEHafN45Zx9QRqo4BE",
  authDomain: "fusion-mediaa.firebaseapp.com",
  projectId: "fusion-mediaa",
  storageBucket: "fusion-mediaa.firebasestorage.app",
  messagingSenderId: "505493437957",
  appId: "1:505493437957:web:b910ffb9d09c794a53a66c",
  measurementId: "G-HNZYBJ125J"
};

// Initialize Firebase
let app;
let db;
let analytics;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  analytics = getAnalytics(app);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

export { db, analytics }; 
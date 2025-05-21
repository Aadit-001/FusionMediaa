import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx-k2MFZm8PX-VrmmO1uflXLQSQ4g8ba0",
  authDomain: "fusionmedia-02.firebaseapp.com",
  projectId: "fusionmedia-02",
  storageBucket: "fusionmedia-02.firebasestorage.app",
  messagingSenderId: "302154543859",
  appId: "1:302154543859:web:6ddaabf3c31d05a56ffd86",
  measurementId: "G-VKNJ8N6H0F"
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
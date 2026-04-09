import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApmbwIqk1nuXRoewcYz8rLcWMjmGhYfKA",
  authDomain: "ilmiaco.firebaseapp.com",
  projectId: "ilmiaco",
  storageBucket: "ilmiaco.firebasestorage.app",
  messagingSenderId: "361474768568",
  appId: "1:361474768568:web:85078ccbf4e9eaebb4fe4d",
  measurementId: "G-56GQF9FQ7Y"
};

export const app = initializeApp(firebaseConfig);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

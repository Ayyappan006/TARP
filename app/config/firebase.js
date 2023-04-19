// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSa1RI4cScqjpUV6s1PB4KSO10xQofXzQ",
  authDomain: "mini-project-9f217.firebaseapp.com",
  projectId: "mini-project-9f217",
  storageBucket: "mini-project-9f217.appspot.com",
  messagingSenderId: "252445237199",
  appId: "1:252445237199:web:2eb3d2bb8c5be1a7503cba",
  measurementId: "G-0B6MER5QQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
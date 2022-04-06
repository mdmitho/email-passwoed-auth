// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuYN4HHE9Mo9iW1V7G2eG0X64_AeakKR8",
  authDomain: "email-passwored-auth.firebaseapp.com",
  projectId: "email-passwored-auth",
  storageBucket: "email-passwored-auth.appspot.com",
  messagingSenderId: "620428295484",
  appId: "1:620428295484:web:4adbd568bd04e00feab239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
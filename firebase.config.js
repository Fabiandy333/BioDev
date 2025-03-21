// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbERsH2IlPZYlDXn6zwyDPj_6ESsAaeUQ",
  authDomain: "biodev-7b3f3.firebaseapp.com",
  projectId: "biodev-7b3f3",
  storageBucket: "biodev-7b3f3.firebasestorage.app",
  messagingSenderId: "1081492966529",
  appId: "1:1081492966529:web:0bd7d8862bc240d443d180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
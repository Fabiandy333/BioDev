// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkpx4QUuOXznkwm-3JhDjueAOTuTm1r_4",
    authDomain: "biodev-70922.firebaseapp.com",
    projectId: "biodev-70922",
    storageBucket: "biodev-70922.firebasestorage.app",
    messagingSenderId: "817816114444",
    appId: "1:817816114444:web:b0f45ea67ad888d7eee529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
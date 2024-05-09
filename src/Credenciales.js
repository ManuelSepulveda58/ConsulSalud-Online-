// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO6HRYunBPDqydl8KAsgHbA3J1ZldOrsk",
  authDomain: "consusalud-online.firebaseapp.com",
  projectId: "consusalud-online",
  storageBucket: "consusalud-online.appspot.com",
  messagingSenderId: "244125848368",
  appId: "1:244125848368:web:f57874b1c1eeb92895eef5",
  measurementId: "G-KGJN013XB6"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default  appFirebase;
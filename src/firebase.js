// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyADTJutBXjfgSoIiGk7EOYRdpt1yLIcNrY",
  authDomain: "voicearchi-8ff0f.firebaseapp.com",
  databaseURL: "https://voicearchi-8ff0f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "voicearchi-8ff0f",
  storageBucket: "voicearchi-8ff0f.appspot.com",
  messagingSenderId: "53576738848",
  appId: "1:53576738848:web:aa5933e5b38d7b71b87445",
  measurementId: "G-2S9B73ZXYE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getDatabase(app); 
export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6gXbhAK6rAOW_El2J53rShRiAH8A3O5E",
  authDomain: "job-seeking-4b520.firebaseapp.com",
  projectId: "job-seeking-4b520",
  storageBucket: "job-seeking-4b520.appspot.com",
  messagingSenderId: "136340583684",
  appId: "1:136340583684:web:995946f7531b8d06868c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

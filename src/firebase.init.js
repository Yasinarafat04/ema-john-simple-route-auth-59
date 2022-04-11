// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH09BqYEfkTiZfV26A5Nr3tkBIHbVENs0",
    authDomain: "ema-john-simple-6fef6.firebaseapp.com",
    projectId: "ema-john-simple-6fef6",
    storageBucket: "ema-john-simple-6fef6.appspot.com",
    messagingSenderId: "896681416145",
    appId: "1:896681416145:web:7e9f965f5e78be9aaa7cf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
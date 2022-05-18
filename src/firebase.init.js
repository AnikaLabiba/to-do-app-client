// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-3lW2rvLfre5RMg1JkJDmco6ajiRW9x0",
    authDomain: "to-do-app-1ee37.firebaseapp.com",
    projectId: "to-do-app-1ee37",
    storageBucket: "to-do-app-1ee37.appspot.com",
    messagingSenderId: "640636184798",
    appId: "1:640636184798:web:33e3d07d114335866b3a4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwpF7oIqSmr0nS-aqc318XxVbFLtP9AuA",
    authDomain: "chetona-client.firebaseapp.com",
    projectId: "chetona-client",
    storageBucket: "chetona-client.appspot.com",
    messagingSenderId: "1047869688343",
    appId: "1:1047869688343:web:0015c81eaa133ca9ccea52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
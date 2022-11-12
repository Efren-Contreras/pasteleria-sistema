// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGu-UaApF4qxFLxFRsof-2y57hCulexPk",
  authDomain: "pasteleria-sistema.firebaseapp.com",
  projectId: "pasteleria-sistema",
  storageBucket: "pasteleria-sistema.appspot.com",
  messagingSenderId: "505155872343",
  appId: "1:505155872343:web:996123696a341bb0d86512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
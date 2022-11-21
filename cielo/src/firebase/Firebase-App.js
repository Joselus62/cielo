// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVdQQaUzBHuEnX6AjcSJDSQ0rTjJXOts8",
  authDomain: "centroinvestigacioneducativa22.firebaseapp.com",
  projectId: "centroinvestigacioneducativa22",
  storageBucket: "centroinvestigacioneducativa22.appspot.com",
  messagingSenderId: "1088755339198",
  appId: "1:1088755339198:web:48d7035226069ac951f3ef",
  measurementId: "G-N3734F4SHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
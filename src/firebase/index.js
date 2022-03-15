// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgMTNiENyONZVLeQiTKg9Ck1M2HkiVnzA",
  authDomain: "msp-assessment.firebaseapp.com",
  projectId: "msp-assessment",
  storageBucket: "msp-assessment.appspot.com",
  messagingSenderId: "999788226702",
  appId: "1:999788226702:web:a85c255585096f4538c1df",
  measurementId: "G-8WXPCRW5NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore()
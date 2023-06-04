// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDxKEEW3vkLhDUBvxd9NQhyBm0UGD266U",
  authDomain: "earplugs-ecommerce.firebaseapp.com",
  projectId: "earplugs-ecommerce",
  storageBucket: "earplugs-ecommerce.appspot.com",
  messagingSenderId: "697962066652",
  appId: "1:697962066652:web:77cbb08dfe50ce91b77a19",
  measurementId: "G-MJQK32MPTB"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



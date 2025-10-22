
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5BenOqjBsFI5n2CDumuG2ZVyX6CZ29Ic",
  authDomain: "student-dashboard-8477b.firebaseapp.com",
  projectId: "student-dashboard-8477b",
  storageBucket: "student-dashboard-8477b.firebasestorage.app",
  messagingSenderId: "404142121909",
  appId: "1:404142121909:web:c4105538a48b630069effc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

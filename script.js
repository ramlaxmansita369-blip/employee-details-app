import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBjaghgiluUgkElOg0fQwg0IfDMU0BcNU",
  authDomain: "employee-details-1ce02.firebaseapp.com",
  projectId: "employee-details-1ce02",
  storageBucket: "employee-details-1ce02.firebasestorage.app",
  messagingSenderId: "656589537477",
  appId: "1:656589537477:web:d3ffafa4061b7fb869b0ac",
  measurementId: "G-JSXRRMCXN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it for use in other files
export const db = getFirestore(app);
import { db } from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";

// Example: Adding an employee
async function addEmployee(name, role) {
  try {
    const docRef = await addDoc(collection(db, "employees"), {
      name: name,
      role: role
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

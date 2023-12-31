// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeHREdN0kcvsk-AMR6nd1hbGgjP4wI6eU",
  authDomain: "netflix-clone-react-adfdd.firebaseapp.com",
  projectId: "netflix-clone-react-adfdd",
  storageBucket: "netflix-clone-react-adfdd.appspot.com",
  messagingSenderId: "1073212354184",
  appId: "1:1073212354184:web:9deb69ad00fa571707393d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init auth
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, app, db };

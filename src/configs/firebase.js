// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7VBJuFcMNlmKFzuQnkirFNHE2pdzq9ik",
  authDomain: "codequeens-26324.firebaseapp.com",
  projectId: "codequeens-26324",
  storageBucket: "codequeens-26324.appspot.com",
  messagingSenderId: "866339537122",
  appId: "1:866339537122:web:df6979a1862bc0aee99ebb",
  measurementId: "G-3E3XZFQBD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, provider, storage};

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCx3KhK2Ugai_TLQyr4er9Vsj6MyJS1Lg8",
  authDomain: "facebook-clone-d2c77.firebaseapp.com",
  projectId: "facebook-clone-d2c77",
  storageBucket: "facebook-clone-d2c77.appspot.com",
  messagingSenderId: "88702517949",
  appId: "1:88702517949:web:090a670d4e1df7b88fedd4",
  measurementId: "G-3H3V61H2F9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



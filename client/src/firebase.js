// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWvK9xGwh5uDRVeGhuo9Z91nIDwxWNTCE",
  authDomain: "videoapp-c440b.firebaseapp.com",
  projectId: "videoapp-c440b",
  storageBucket: "videoapp-c440b.appspot.com",
  messagingSenderId: "876776963456",
  appId: "1:876776963456:web:0ebd5a8f4211658b33d565",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;

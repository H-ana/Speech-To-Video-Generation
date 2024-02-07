// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCJDFsT5Bc7XoINrb2vKKlOA0_-M9rZCJ8",
  authDomain: "speech-to-video-gan.firebaseapp.com",
  projectId: "speech-to-video-gan",
  storageBucket: "speech-to-video-gan.appspot.com",
  messagingSenderId: "975508315070",
  appId: "1:975508315070:web:2ba603200892e79855b7ef",
  measurementId: "G-QL7ZPV29VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider();

export{provider,auth};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-32TvGJThiHcxr9Gx2up-hJUnf0MfIpQ",
  authDomain: "shoping-ea236.firebaseapp.com",
  projectId: "shoping-ea236",
  storageBucket: "shoping-ea236.appspot.com",
  messagingSenderId: "160059248874",
  appId: "1:160059248874:web:25c6101af8725c10ee8793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}



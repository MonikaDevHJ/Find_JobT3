import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDUoPnFs16k485VpSeXc79mPGr8PTUrIMY",
  authDomain: "find-jobt3-e0e48.firebaseapp.com",
  projectId: "find-jobt3-e0e48",
  storageBucket: "find-jobt3-e0e48.firebasestorage.app",
  messagingSenderId: "733905129156",
  appId: "1:733905129156:web:0b66514d0a970ec2614391",
  measurementId: "G-TCQDJE9C9D"
};

const app = initializeApp(firebaseConfig);


export {app};
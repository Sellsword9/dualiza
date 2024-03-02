// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Lkn_m-Cu1duAZieSXDhJP8lZi2BQHOI",
  authDomain: "dualiza-80744.firebaseapp.com",
  projectId: "dualiza-80744",
  storageBucket: "dualiza-80744.appspot.com",
  messagingSenderId: "578285900184",
  appId: "1:578285900184:web:1c4088260115d3b8eedbed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export const db = getFirestore();
export {app, auth}
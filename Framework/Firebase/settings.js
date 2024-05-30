// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
import 'firebase/compat/storage';
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhFfWJcKSMbGYNg3RD2F_-2ZDFbp8mSkg",
  authDomain: "qp-bills-c64e9.firebaseapp.com",
  projectId: "qp-bills-c64e9",
  storageBucket: "qp-bills-c64e9.appspot.com",
  messagingSenderId: "253368294277",
  appId: "1:253368294277:web:2123e4cc08b839edabc2ec"
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
export const imgStorage = firebase.storage;

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export const storage = getStorage(app);
 export const db = initializeFirestore(app, {
   experimentalForceLongPolling: true,
  });
  export {auth}


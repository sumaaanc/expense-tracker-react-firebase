
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD_42NQxWBtAMDPs6bByxeQ4OYnj6cq4pg",
  authDomain: "expense-tracker-329ea.firebaseapp.com",
  projectId: "expense-tracker-329ea",
  storageBucket: "expense-tracker-329ea.appspot.com",
  messagingSenderId: "748058857598",
  appId: "1:748058857598:web:caffe3f88dd2fe080e082f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)



//firebase login
//firebase init 
//firebase deploy
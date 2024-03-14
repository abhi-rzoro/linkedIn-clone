// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwqCQfT0gX8bfKl_-uu0oJ3GU-ONv4L1A",
  authDomain: "linkedin-clone-b2ce5.firebaseapp.com",
  projectId: "linkedin-clone-b2ce5",
  storageBucket: "linkedin-clone-b2ce5.appspot.com",
  messagingSenderId: "41983733844",
  appId: "1:41983733844:web:d80f817f1997271a177dc1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); //This is the database in which we make collections
const auth = getAuth(app);

export { auth, app, firestore };

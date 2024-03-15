import { auth } from "../firebaseConfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export async function LoginAPI(email, password) {
  try {
    console.log("This is the login try ");
    let res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log("this is the error console of login", err);
  }
}
export async function googleSignIn() {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    console.log("This is the google pop up error", err);
  }
}

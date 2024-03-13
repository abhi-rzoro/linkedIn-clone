import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default async function register(email, password) {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (err) {
    console.log("This is the register api error: ", err);
  }
}

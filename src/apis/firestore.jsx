import { firestore } from "../firebaseConfig"; //Importing the database
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore"; //Importing the functions to make collections
// and store data
import { toast } from "react-toastify";
let dbRef = collection(firestore, "posts"); //making a collection named dbRef
//storing it inside the firestore named database
let userRef = collection(firestore, "users");

export function storePost(postData) {
  addDoc(dbRef, postData)
    .then((res) => {
      toast.success("Posted");
    })
    .catch((err) => {
      console.log(err);
    }); //adding the data to the collection
}

export function getPost(setAllPosts) {
  onSnapshot(dbRef, (response) => {
    setAllPosts(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })
    );
  });
}

export function storeUser(userData) {
  addDoc(userRef, userData)
    .then((res) => {
      console.log("response for storing the user data", res);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function getCurrentUser(setCurrentUser) {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((user) => user.email === localStorage.getItem("user-email"))[0]
    );
  });
}
export function editProfile(userID, paylaod) {
  let userToEdit = doc(userRef, userID);
  updateDoc(userToEdit, paylaod)
    .then(() => {
      toast.success("The profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
export function getSelectedPost(email, setAllSelectedPosts) {
  onSnapshot(dbRef, (response) => {
    setAllSelectedPosts(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((post) => post.email === email)
    );
  });
}
export function getSelectedUser(email, setAllSelectedUsers) {
  onSnapshot(userRef, (response) => {
    setAllSelectedUsers(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((post) => post.email === email)[0]
    );
  });
}

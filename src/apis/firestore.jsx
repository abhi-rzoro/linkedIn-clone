import { firestore } from "../firebaseConfig"; //Importing the database
import { addDoc, collection, onSnapshot } from "firebase/firestore"; //Importing the functions to make collections
// and store data
import { toast } from "react-toastify";
let dbRef = collection(firestore, "posts"); //making a collection named dbRef
//storing it inside the firestore named database
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

import { React, Suspense, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate, useNavigation } from "react-router-dom";
import Spinner from "../../commonComp/loader";
import Header from "../../commonComp/Header";
import PostStatus from "./components/postStatus";
import styles from "./styles.module.scss";

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        //This res gives the data    of the logged in  user
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  console.log("This is the vaigate state", navigate);
  return loading ? (
    <Spinner />
  ) : (
    <div className={styles["home--main-container"]}>
      <Header />
      <PostStatus />
    </div>
  );
}

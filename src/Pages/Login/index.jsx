import { React, useEffect, useState } from "react";
import { LoginAPI, googleSignIn } from "../../apis/AuthApi";
import styles from "./styles.module.scss";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import logo from "../../assets/linkedinLogo.png";
import { toast } from "react-toastify";
import Spinner from "../../commonComp/loader";

export default function Login() {
  const [loginCredentials, setLoginCredentials] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const navigation = useNavigation();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        //This res gives t  he data of the logged in user
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  const authRes = async () => {
    try {
      let res = await LoginAPI(
        loginCredentials?.email,
        loginCredentials?.password
      );
      localStorage.setItem("user-email", res.user.email);
      toast.success("Sucessfully signed in");
      navigate("/home");
    } catch (err) {
      console.log("this is the error console of comp", err);
      toast.error("Please check your credentials");
    }
  };
  const googleLogIn = async () => {
    try {
      let res = await googleSignIn();
      console.log(res);
    } catch (err) {
      console.log("This is the eerror in login with google", err);
    }
  };
  return loading ? (
    <Spinner />
  ) : (
    <div className={styles["login--main-container"]}>
      <div className={styles["login--main-form"]}>
        <img src={logo} className={styles["login--logo"]} />
        <div>
          <p className={styles["login--title-text"]}>Sign In</p>
          <p className={styles["login--title-desc"]}>
            Stay updated on your professional work
          </p>
        </div>
        <div className={styles["login--input-container"]}>
          <input
            placeholder="Email or Phone"
            className={styles["login--input"]}
            onChange={(event) => {
              console.log(loginCredentials);
              setLoginCredentials({
                ...loginCredentials,
                email: event.target.value,
              });
            }}
          />
          <input
            placeholder="Password"
            className={styles["login--input"]}
            onChange={(event) => {
              console.log(loginCredentials);
              setLoginCredentials({
                ...loginCredentials,
                password: event.target.value,
              });
            }}
          />
        </div>
        <p className={styles["login--forgot-password"]}>Forgot Password?</p>
        <button className={styles["login--signin-button"]} onClick={authRes}>
          Sign in
        </button>
        <p className={styles["align-center"]}>---------or---------</p>
        <button
          className={styles["login--signin-button-g-a"]}
          onClick={googleLogIn}
        >
          Sign in with google
        </button>
        <button className={styles["login--signin-button-g-a"]}>
          Sign in with apple
        </button>
        <p className={styles["login--join-now-text"]}>
          New to LinekdIn{" "}
          <Link to="register">
            <span className={styles["blue"]}>Join Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

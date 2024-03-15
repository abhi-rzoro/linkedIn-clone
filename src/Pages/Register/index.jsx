import React from "react";
import styles from "../Login/styles.module.scss";
import logo from "../../assets/linkedinLogo.png";
import register from "../../apis/register";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [registerCredentials, setRegisterCredentials] = React.useState({});
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      let res = await register(
        registerCredentials?.email,
        registerCredentials?.password
      );
      localStorage.setItem("user-email", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log("this is the error console of comp", err);
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
  return (
    <div className={styles["login--main-container"]}>
      <div className={styles["login--main-form"]}>
        <img src={logo} className={styles["login--logo"]} />
        <div>
          <p className={styles["login--title-text"]}>
            Make the most out of your professional life
          </p>
          <p className={styles["login--title-desc"]}>
            Stay updated on your professional work
          </p>
        </div>
        <div className={styles["login--input-container"]}>
          <input
            placeholder="Email or Phone"
            className={styles["login--input"]}
            onChange={(event) => {
              console.log(registerCredentials);
              setRegisterCredentials({
                ...registerCredentials,
                email: event.target.value,
              });
            }}
          />
          <input
            placeholder="Password (6 or more characters) "
            className={styles["login--input"]}
            onChange={(event) => {
              console.log(registerCredentials);
              setRegisterCredentials({
                ...registerCredentials,
                password: event.target.value,
              });
            }}
          />
        </div>
        <p className={styles["login--forgot-password"]}>
          By clicking agree you are agreeing to the terms and conitions
        </p>
        <button className={styles["login--signin-button"]} onClick={signUp}>
          Agree & Join
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
          Already on LinkedIn
          <Link to="/">
            <span className={styles["blue"]}> sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

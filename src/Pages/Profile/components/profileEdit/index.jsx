import React from "react";
import styles from "./styles.module.scss";
import { editProfile } from "../../../../apis/firestore";

export default function ProfileEdit(props) {
  const [profileInput, setProfileInput] = React.useState({});
  function handleChange(event) {
    let { name, value } = event.target;
    setProfileInput({ ...profileInput, [name]: value });
  }
  async function submitDetails() {
    await editProfile(props.currentUser.id, profileInput);
    await props.showProfile();
  }

  return (
    <div className={styles["profileE--main-container"]}>
      <div className={styles["profileE--edt-button"]}>
        <button onClick={props.showProfile}>Go back</button>
      </div>
      <div className={styles["profileE--inputs-container"]}>
        <input onChange={handleChange} name="name" placeholder="Name" />
        <input onChange={handleChange} name="headline" placeholder="Headline" />
        <input onChange={handleChange} name="location" placeholder="Location" />
        <input onChange={handleChange} name="company" placeholder="Company" />
        <input onChange={handleChange} name="college" placeholder="College" />
        <button
          className={styles["profileE--save-button"]}
          onClick={submitDetails}
        >
          {" "}
          Save
        </button>
      </div>
    </div>
  );
}

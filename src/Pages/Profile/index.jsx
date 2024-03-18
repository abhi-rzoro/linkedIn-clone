import React from "react";
import Header from "../../commonComp/Header";
import styles from "./styles.module.scss";
import Spinner from "../../commonComp/loader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import ProfileCard from "./components/profile-card";
import { getCurrentUser } from "../../apis/firestore";
import { Spin } from "antd";
import ProfileEdit from "./components/profileEdit";

export default function Profile() {
  const [currentUserP, setCurrentUserP] = React.useState({});
  const [profileEdit, setProfileEdit] = React.useState(false);

  React.useMemo(() => {
    getCurrentUser(setCurrentUserP);
  }, []);
  console.log("current user P: ", currentUserP);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        //This res gives the data of the logged in  user
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);

  function toggleProfile() {
    setProfileEdit((prevProfile) => !prevProfile);
  }
  return loading ? (
    <Spinner />
  ) : (
    <>
      <Header />
      <>
        {profileEdit ? (
          <ProfileEdit currentUser={currentUserP} showProfile={toggleProfile} />
        ) : (
          <ProfileCard currentUser={currentUserP} showProfile={toggleProfile} />
        )}
      </>
    </>
  );
}

import React from "react";
import styles from "./styles.module.scss";
import logoSmall from "./images/linkedin-logo-small.png";
import { IoIosHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdChat } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import userIcon from "./images/userIcon.png";
import PopUp from "./popup";

export default function Header() {
  const [popup, setPopup] = React.useState(false);
  return (
    <div>
      <div className={styles["header--main-container"]}>
        <div className={styles["header--inner-container"]}>
          {/*For alignment */}
          <div>
            <img src={logoSmall} className={styles["header--logo"]} />
          </div>
          <div className={styles["header--icons-container"]}>
            <CiSearch size="25px" className={styles["header--icons"]} />
            <IoIosHome size="25px" className={styles["header--icons"]} />
            <CgProfile size="25px" className={styles["header--icons"]} />
            <MdWork size="25px" className={styles["header--icons"]} />
            <MdChat size="25px" className={styles["header--icons"]} />
            <IoMdNotifications
              size="25px"
              className={styles["header--icons"]}
            />
          </div>
          <img
            src={userIcon}
            className={styles["header--logo"]}
            onClick={() => setPopup((prevPop) => !prevPop)}
          />
        </div>
      </div>
      <PopUp popState={popup} />
    </div>
  );
}

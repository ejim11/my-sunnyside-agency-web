import React, { useState } from "react";
import ReactDOM from "react-dom";

import styles from "./Header.module.scss";
import Button from "../Button/Button";
import icons from "../images/sprite.svg";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

function Header() {
  const [display, setDisplay] = useState(false);

  const displayMenu = () => {
    setDisplay(true);
  };

  const closeMenu = () => {
    setDisplay(false);
  };

  return (
    <div className={styles.header}>
      {display &&
        ReactDOM.createPortal(
          <BackDrop onConfirm={closeMenu} />,
          document.getElementById("backdrop-root")
        )}
      <div className={styles.header__head}>
        <p className={styles.header__logo}>sunnyside</p>
        <div
          className={`${styles.header__mainNav} ${
            display ? styles.display__active : ""
          }`}
        >
          <ul className={styles.header__nav}>
            <li className={styles.header__nav_item}>
              <a href="http://google.com">About</a>
            </li>
            <li className={styles.header__nav_item}>
              <a href="http://google.com">Services</a>
            </li>
            <li className={styles.header__nav_item}>
              <a href="http://google.com">Projects</a>
            </li>
          </ul>

          <Button className={styles.contact} type="button">
            Contact
          </Button>
        </div>

        <div onClick={!display ? displayMenu : closeMenu}>
          <svg className={styles.header__menuBar}>
            <use
              xlinkHref={`${icons}${!display ? "#icon-menu" : "#icon-cross"}`}
            ></use>
          </svg>
        </div>
      </div>

      <div className={styles.header__title}>
        <h1 className={styles.heading_1}>we are creatives</h1>
        {/* <svg className={styles.header__icon}>
          <use xlinkHref={`${icons}#icon-arrow-down2`}></use>
        </svg> */}
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            strokeWidth="6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Header;

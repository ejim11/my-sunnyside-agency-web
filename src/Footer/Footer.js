import React from "react";

import styles from "./Footer.module.scss";
import icons from "../images/sprite.svg";

function Footer() {
  return (
    <div className={styles.footer}>
      <h2 className={styles.heading_2}>sunnyside</h2>

      <ul className={styles.footer__nav}>
        <li className={styles.footer__nav_item}>
          <a href="http://google.com">About</a>
        </li>
        <li className={styles.footer__nav_item}>
          <a href="http://google.com">Services</a>
        </li>
        <li className={styles.footer__nav_item}>
          <a href="http://google.com">Projects</a>
        </li>
      </ul>

      <div className={styles.footer__icons}>
        <svg className={styles.footer__icon}>
          <use xlinkHref={`${icons}#icon-facebook`}></use>
        </svg>
        <svg className={styles.footer__icon}>
          <use xlinkHref={`${icons}#icon-instagram`}></use>
        </svg>
        <svg className={styles.footer__icon}>
          <use xlinkHref={`${icons}#icon-twitter`}></use>
        </svg>
        <svg className={styles.footer__icon}>
          <use xlinkHref={`${icons}#icon-pinterest-with-circle`}></use>
        </svg>
      </div>
    </div>
  );
}

export default Footer;

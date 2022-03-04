import React from "react";

import styles from "./Main.module.scss";
import Header from "../Header/Header";
import Showcase from "../Showcase/Showcase";
import Client from "../Client/Client";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Showcase />
      <Client />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Main;

import React from "react";

import styles from "./Showcase.module.scss";
import pic2 from "../images/desktop/image-transform.jpg";
import pic3 from "../images/desktop/image-stand-out.jpg";
import smallPic2 from "../images/mobile/image-transform.jpg";
import Button from "../Button/Button";

function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__1}>
        <h2 className={styles.heading_2}>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <Button className={styles.showcase__btn}>Learn more</Button>
      </div>

      <div className={styles.showcase__2}>
        <img
          src={pic2}
          srcSet={`${smallPic2} 350w, ${pic2} 720w`}
          alt="Tranform "
        />
      </div>

      <div className={styles.showcase__3}>
        <img src={pic3} alt="Tranform " />
      </div>

      <div className={styles.showcase__4}>
        {" "}
        <h2 className={styles.heading_2}>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <Button className={styles.showcase__btn}>Learn more</Button>
      </div>

      <div className={styles.showcase__5}>
        <h3 className={styles.heading_3}> Graphic design</h3>
        <p>
          {" "}
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>

      <div className={styles.showcase__6}>
        <h3 className={styles.heading_3}>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
}

export default Showcase;

import React from "react";

import styles from "./Gallery.module.scss";
import pic1 from "../images/desktop/image-gallery-milkbottles.jpg";
import pic2 from "../images/desktop/image-gallery-orange.jpg";
import pic3 from "../images/desktop/image-gallery-cone.jpg";
import pic4 from "../images/desktop/image-gallery-sugarcubes.jpg";

function Gallery() {
  return (
    <div className={styles.gallery}>
      <img src={pic1} alt={"Gallery-1"} />
      <img src={pic2} alt={"Gallery-2"} />
      <img src={pic3} alt={"Gallery-3"} />
      <img src={pic4} alt={"Gallery-4"} />
    </div>
  );
}

export default Gallery;

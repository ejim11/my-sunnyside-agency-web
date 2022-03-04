import React from "react";

import styles from "./ClientCard.module.scss";

const ClientCard = (props) => {
  return (
    <div className={styles.clientcard}>
      <img
        src={props.pic}
        alt={"client card pic"}
        className={styles.clientcard__img}
      />
      <p className={styles.clientcard__text}>{props.text}</p>
      <p className={styles.clientcard__name}>{props.name}</p>
      <p className={styles.clientcard__job}>{props.job}</p>
    </div>
  );
};

export default ClientCard;

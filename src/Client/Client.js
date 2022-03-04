import React from "react";

import styles from "./Client.module.scss";
import pic1 from "../images/image-emily.jpg";
import pic2 from "../images/image-thomas.jpg";
import pic3 from "../images/image-jennie.jpg";
import ClientCard from "../ClientCard/ClientCard";

function Client() {
  const clientData = [
    {
      name: "Emily R.",
      job: "Marketing Director",
      text: " We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      image: pic1,
    },
    {
      name: "Thomas S.",
      job: "Chief Operating Officer",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      image: pic2,
    },
    {
      name: "Jennie F.",
      job: "Business Owner",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      image: pic3,
    },
  ];

  const clientList = clientData.map((data) => (
    <ClientCard
      key={Math.random()}
      pic={data.image}
      text={data.text}
      name={data.name}
      job={data.job}
    />
  ));

  console.log(clientList);

  return (
    <div className={styles.client}>
      <h4>Client testimonials</h4>
      <div className={styles.client__clientList}> {clientList}</div>
    </div>
  );
}

export default Client;

# Frontend Mentor - Sunnyside agency landing page solution

## Table of contents

- [Overview](#overview)

  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![Design preview for the Sunnyside agency landing page coding challenge](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- React
- SCSS
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

I learnt how to make use of react states and portals. Using states to organise changes in the app.

I also learnt a lot of css grid and scss. it is a very nice project to practce some css skills.

```React
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

```

```scss
.showcase {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 50rem);

  @media only screen and (max-width: $bp-medium) {
    grid-template-rows: repeat(3, 60rem);
  }

  @media only screen and (max-width: $bp-smaller) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, 50rem);
  }

```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@favourejim56](https://www.twitter.com/favourejim56)

## Acknowledgments

Thanks to jonas and maxillian courses on advanced scss, flexbox,grid and react respectively...

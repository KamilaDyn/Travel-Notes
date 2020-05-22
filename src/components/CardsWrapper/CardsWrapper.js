import React from "react";
import Card from "./Card/Card";
import styles from "./CardsWrapper.module.css";
const CardsWrapper = ({ items }) => (
  <>
    {items.length ? (
      <div className={styles.cardsWrapper}>
        {items.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    ) : (
      <h2 className={styles.note}>
        Nie masz jszcze notatek, dadaj nowe <span> &#10084;</span>
      </h2>
    )}
  </>
);

export default CardsWrapper;

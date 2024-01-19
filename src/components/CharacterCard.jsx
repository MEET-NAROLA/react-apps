import React from "react";
import CardTable from "./CardTable";
import styles from "../styles/CharacterCard.module.css";

function CharacterCard(props) {
  return (
    <div className={styles.card}>
      {props.key}
      <h1>{props.name}</h1>
      <img src={props.imgURL} alt="shinchan" className={styles.imgContainer} />
      <p className={styles.description}>{props.description}</p>
      {props.table.map(function (value, index) {
        return <CardTable key={index} name={value.key} value={value.value} />;
      })}
    </div>
  );
}

export default CharacterCard;

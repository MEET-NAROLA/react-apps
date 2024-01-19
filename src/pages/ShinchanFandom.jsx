import React from "react";
import { Characters } from "../data/Data";
import CharacterCard from "../components/CharacterCard";

function ShinchanFandom() {
  const imgStyle = {
    border: "3px solid black",
    height: "350px",
    width: "auto",
  };
  console.log(Characters[0]);

  return (
    <>
      <div>
        {Characters.map(function (value, index) {
          return (
            <CharacterCard
              key={index}
              name={value.name}
              description={value.description}
              imgURL={value.imgURL}
              table={value.table}
            />
          );
        })}
      </div>
    </>
  );
}

export default ShinchanFandom;

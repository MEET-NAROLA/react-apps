import React from "react";

function CardTable(props) {
  return (
    <>
      {console.log(props.key)}
      <table>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CardTable;

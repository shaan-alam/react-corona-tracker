import React from "react";
import Flip from "react-reveal/Flip";

function Card(props) {
  return (
    <Flip left>
      <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <h3>{props.value}</h3>
      </div>
    </Flip>
  );
}

export default Card;

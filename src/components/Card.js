import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1 className="card-title">{props.title}</h1>
      <h3>{props.value}</h3>
    </div>
  );
}

export default Card;

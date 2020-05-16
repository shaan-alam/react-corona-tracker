import React from "react";
import Card from './Card';


function CardsInfo (props) {
  return (
    <div className="cards-info-grid">
      {props.cards.map(card => (
        <Card key={generateID()} title={card.title} value={card.value} />       
      ))}
    </div>
  );
}

function generateID () {
  return "#" + Math.floor(Math.random()  * 16777215).toString(16);
}

export default CardsInfo;

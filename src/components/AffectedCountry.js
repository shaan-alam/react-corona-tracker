import React from "react";
import Flip from "react-reveal/Flip";

function AffectedCountry(props) {
  return (
    <Flip left delay={400 + props.id * 100}>
      <div className="country-data">
        <span className="country-count">#{props.id}</span>
        <h3>{props.affectedCountry.name}</h3>
        <h5>Confirmed: {props.affectedCountry.confirmed}</h5>
      </div>
    </Flip>
  );
}

export default AffectedCountry;
